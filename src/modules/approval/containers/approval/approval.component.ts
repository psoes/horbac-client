import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-approval',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './approval.component.html',
    styleUrls: ['approval.component.scss'],
})
export class ApprovalComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
