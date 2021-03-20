import { Component, OnInit } from '@angular/core';
import { Action } from '@modules/actions/models/Action';
import { ActionsService } from '@modules/actions/services/actions.service';
import { EmployeeCrud } from '@modules/employees/models/Employee';
import { EmployeeService } from '@modules/employees/services/employee.service';
import { Organization } from '@modules/organizations/models/organization';
import { OrganizationService } from '@modules/organizations/services/organization.service';
import { AdministrativePermission } from '@modules/permissions/models/AdministrativePermission';
import { CanSuggest } from '@modules/permissions/models/CanSuggest';
import { CanTreat } from '@modules/permissions/models/CanTreat';
import { OperationalPermission } from '@modules/permissions/models/OperationalPermission';
import { HelperService } from '@modules/permissions/services/helper.service';
import { Resource } from '@modules/resources/models/Resource';
import { ResourceService } from '@modules/resources/services/resource.service';

@Component({
  selector: 'sb-permission-helper',
  templateUrl: './permission-helper.component.html',
  styleUrls: ['./permission-helper.component.scss']
})
export class PermissionHelperComponent implements OnInit {
  organizations: Organization[] = [];
  resources: Resource[] = [];
  actions: Action[] = []
  employees: EmployeeCrud[] = [];
  opPermissions: OperationalPermission[] = [];
  adminPermissions: AdministrativePermission [] = [];

  canSuggest: CanSuggest = {};
  canTreat: CanTreat = {};
  organization: Organization = new Organization();

  constructor(private actionService: ActionsService, private resourceService: ResourceService, private employeeService: EmployeeService, private orgService: OrganizationService, private permissionService: HelperService) { }

  ngOnInit(): void {
    this.orgService.loadOrganizations().subscribe((results: Organization[]) => {
      this.organizations = results ? results : []
    });
    this.actionService.loadActions().subscribe((results: Action[]) => {
      this.actions = results ? results : []
    })
    this.resourceService.loadResources().subscribe((results: Resource[]) => {
      this.resources = results ? results : []
    })
    this.employeeService.loadEmployees().subscribe((results: EmployeeCrud[]) => {
      this.employees = results ? results : []
    })
  }

  canSuggests(){
    this.permissionService.canSuggest(this.organization, this.canSuggest).subscribe(results => {
      this.opPermissions = results? results : [];
    })
  }

  canTreats(){
    this.permissionService.canTreat(this.organization, this.canTreat).subscribe(results => {
      this.adminPermissions = results? results : [];
    })
  }

}
