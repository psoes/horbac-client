import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Organization } from '@modules/dashboard/models';
import { DashboardService } from '@modules/dashboard/services';

@Component({
    selector: 'sb-dashboard',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard.component.html',
    styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    organizations : any;
    constructor(private apiService: DashboardService) {}
    ngOnInit() {
        this.apiService.getOrganizations().subscribe((data)=>{
            this.organizations = data;
        });
    }
}
