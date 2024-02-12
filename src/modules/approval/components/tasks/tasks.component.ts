import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnInit,
    QueryList,
    ViewChildren,
} from '@angular/core';
import { Organization } from '@modules/dashboard/models';
import { AppResponse, Country, ExtendedTask, Task } from '@modules/approval/models';
import { CountryService } from '@modules/tables/services';
import { Observable } from 'rxjs';
import { TasksService } from '@modules/approval/services';
import { SBSortableHeaderDirective, SortEvent } from '@modules/tables/directives';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApproveModalComponent } from '../approve-modal/approve-modal.component';

@Component({
    selector: 'tasks',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './tasks.component.html',
    styleUrls: ['tasks.component.scss'],
})
export class TasksComponent implements OnInit {
    @Input() pageSize = 4;

    countries$!: Observable<Country[]>;
    orgs$!: Observable<Organization[]>;
    tasks!: ExtendedTask[];
    total$!: Observable<number>;
    sortedColumn!: string;
    sortedDirection!: string;

    @ViewChildren(SBSortableHeaderDirective) headers!: QueryList<SBSortableHeaderDirective>;

    constructor(
        public countryService: CountryService,
        private changeDetectorRef: ChangeDetectorRef,
        private tasksService: TasksService,
        private ngbModal: NgbModal,
    ) {}

    ngOnInit() {
        this.countryService.pageSize = this.pageSize;
        this.countries$ = this.countryService.countries$;
        this.orgs$ = this.countryService.getOrganizations();
        this.tasksService.loadUserTasks().subscribe(res =>{
            this.tasks = res.data
            console.log("data.........", this.tasks)
        })
        this.total$ = this.countryService.total$;
    }

    onSort({ column, direction }: SortEvent) {
        this.sortedColumn = column;
        this.sortedDirection = direction;
        this.countryService.sortColumn = column;
        this.countryService.sortDirection = direction;
        this.changeDetectorRef.detectChanges();
    }
    viewModal() {
        const openModal = this.ngbModal.open(ApproveModalComponent);
        openModal.componentInstance.id = this.selectedTask.id;
    }
    reload(): void{
        this.tasksService.loadUserTasks().subscribe(res => {
            this.tasks = res.data
            console.log("data.........", this.tasks)
        })
    }
    showApproveModal = false;
    selectedTask: any;


    approveTask(task: Task, approvalData: { approve: boolean, comment: string }) {
        console.log('Approving task:', task, 'with comment:', approvalData); // Placeholder
        this.tasksService.approveRequest(task.id, approvalData).subscribe(res => {

            this.tasks = res.data
            console.log("APPROVE SUCCESS........", this.tasks)
            console.log("APPROVE ERROR.............", res)
        })
        this.reload();       

        this.showApproveModal = false; // Close modal after approval
    }

    openApproveModal(task: ExtendedTask) {
        const modalRef = this.ngbModal.open(ApproveModalComponent, {
            size: 'lg', // Optional: Set modal size
        });
        modalRef.componentInstance.selectedTask = task;
        this.showApproveModal = true;
        // Handle modal close events if needed
        modalRef.componentInstance.approveConfirmed.subscribe((receivedEntry :any) => {
            console.log("JE t'appel.............", receivedEntry)
            this.approveTask(task.task, receivedEntry)
        })
    }

}
