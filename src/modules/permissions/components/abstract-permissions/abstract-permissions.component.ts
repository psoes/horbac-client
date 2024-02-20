import { Component, OnInit } from '@angular/core';
import { ActionsService } from '@modules/actions/services/actions.service';
import { Activity } from '@modules/activities/models/Activity';
import { ActivitiesService } from '@modules/activities/services/activities.service';
import { Context } from '@modules/contexts/models/Contexts';
import { ContextService } from '@modules/contexts/services/context.service';
import { Organization } from '@modules/organizations/models/organization';
import { OrganizationService } from '@modules/organizations/services/organization.service';
import { AdministrativePermission } from '@modules/permissions/models/AdministrativePermission';
import { OperationalPermission } from '@modules/permissions/models/OperationalPermission';
import { AbstractPermissionService } from '@modules/permissions/services/abstract-permission.service';
import { Vue } from '@modules/resources/models/Vue';
import { ResourceService } from '@modules/resources/services/resource.service';
import { AdminUnit } from '@modules/unities/models/AdminUnit';
import { OperationalUnit } from '@modules/unities/models/OperationalUnit';
import { OrgUnit } from '@modules/unities/models/OrgUnit';
import { UnitService } from '@modules/unities/services/unit.service';

@Component({
  selector: 'sb-abstract-permissions',
  templateUrl: './abstract-permissions.component.html',
  styleUrls: ['./abstract-permissions.component.scss']
})
export class AbstractPermissionsComponent implements OnInit {
    isUpdate: boolean = false;
    contexts: Context[] = [];
    activities: Activity[] = [];	
    vues: Vue[] = [];	
    operationalUnits: OperationalUnit[] = [];	
    administrativeUnits: AdminUnit[] = [];	
    organizations: Organization[] = [];
	  modes: string[] = ['DIFFERED', 'REALTIME'];

    approvalTypes: string[] = ['PARALLEL', 'SEQUENTIAL']

    units: OrgUnit[] = [];

    adminPermission: AdministrativePermission = {};
    opPermission: OperationalPermission = {};
    adminPermissions: AdministrativePermission[] = [];
    opPermissions: OperationalPermission[] = [];

  message = ""
  hasError = false;
  success = false;
  pending: boolean = false;
  constructor(private abstractPermissionService: AbstractPermissionService, private activityService: ActivitiesService, private resourceService: ResourceService, private actionService: ActionsService, private unitService: UnitService, private contextService: ContextService, private orgService: OrganizationService) { }
  ngOnInit(): void {
    this.contextService.loadContexts().subscribe( (results : Context[]) =>{
      this.contexts = results ? results : [];
    });
    this.resourceService.loadViews().subscribe( (results : Vue[]) =>{
      this.vues = results ? results : [];
    });
    this.activityService.loadActivities().subscribe( (results : Activity[]) =>{
      this.activities = results ? results : [];
    });

    this.orgService.loadOrganizations().subscribe( (results : Organization[]) =>{
      this.organizations = results ? results : [];
    });

    this.unitService.loadAdminUnits().subscribe( (results : AdminUnit[]) =>{
      this.administrativeUnits = results ? results : [];
    });

    this.unitService.loadUnits().subscribe((results: OrgUnit[]) => {
      this.units = results ? results : [];
    });

    this.unitService.loadOperationalUnits().subscribe( (results : OperationalUnit[]) =>{
      this.operationalUnits = results ? results : [];
    });
    /////
    this.abstractPermissionService.loadAdminPermissions().subscribe( (results : AdministrativePermission[]) =>{
      this.adminPermissions = results ? results : [];
    });

    this.abstractPermissionService.loadOperationalPermissions().subscribe( (results : OperationalPermission[]) =>{
      this.opPermissions = results ? results : [];
    });
  }

  createAdminPermission(){
    this.abstractPermissionService.createAdminPermissions(this.adminPermission).subscribe( (result) =>  {
      this.adminPermissions.push(<AdministrativePermission>result);
      this.pending = false;
      this.hasError = false;
      this.success = true;
      this.pending = false;
      this.message = "Operation approved by the hierarchy!"
      this.adminPermissions.push(<AdministrativePermission>result);
    },
    (err) => {
      console.error(err)
      this.hasError = true;
      this.pending = false;
      this.message = "Operation rejected by the hierarchy!"
    }
    )
  }

  updateAdminPermission(){
    this.abstractPermissionService.updateAdminPermissions(this.adminPermission).subscribe((result) =>{
      let index = this.adminPermissions.findIndex(item => item.id === this.adminPermission.id);
      this.adminPermissions[index] = <AdministrativePermission>result;
      this.pending = false;
      this.hasError = false;
      this.success = true;
      this.pending = false;
      this.message = "Operation approved by the hierarchy!"
    },
    (err) => {
      console.error(err)
      this.hasError = true;
      this.pending = false;
      this.message = "Operation rejected by the hierarchy!"
    }
    )
    this.isUpdate = false;
    this.adminPermission = {}
  }

  deleteAdminPermission(ap: AdministrativePermission){
    this.abstractPermissionService.deleteAdminPermissions(ap).subscribe( result => {     
      this.adminPermissions = this.adminPermissions.filter(item => { return item.id !== ap.id });
      this.pending = false;
      this.hasError = false;
      this.success = true;
      this.pending = false;
      this.message = "Operation approved by the hierarchy!"
    },
    (err) => {
      console.error(err)
      this.hasError = true;
      this.pending = false;
      this.message = "Operation rejected by the hierarchy!"
    }
    )
  }
  ////
  createOpPermission(){
    this.pending = true;
    this.abstractPermissionService.createOperationalPermissions(this.opPermission).subscribe( (result) => {
      this.opPermissions.push(<OperationalPermission>result);
      this.pending = false;
      this.hasError = false;
      this.success = true;
      this.pending = false;
      this.message = "Operation approved by the hierarchy!"
    },
    (err) => {
      console.error(err)
      this.hasError = true;
      this.pending = false;
      this.message = "Operation rejected by the hierarchy!"
    }
    )
  }

  updateOpPermission(){
    this.pending = true;
    this.abstractPermissionService.updateOperationalPermissions(this.opPermission).subscribe((result) => {
      let index = this.opPermissions.findIndex(item => item.id === this.opPermission.id);
      this.opPermissions[index] = <OperationalPermission>result;
      this.pending = false;
      this.hasError = false;
      this.success = true;
      this.pending = false;
      this.message = "Operation approved by the hierarchy!"
    },
    (err) => {
      console.error(err)
      this.hasError = true;
      this.pending = false;
      this.message = "Operation rejected by the hierarchy!"
    }
    )
    this.isUpdate = false;
    this.opPermission = {}
  }
  deleteOpPermission(ap: OperationalPermission){
    this.pending = true;
    this.abstractPermissionService.deleteOperationalPermissions(ap).subscribe( result => {
      this.opPermissions = this.opPermissions.filter(item => { return item.id !== ap.id });
      this.pending = false;
      this.hasError = false;
      this.success = true;
      this.pending = false;
      this.message = "Operation approved by the hierarchy!"
    },
    (err) => {
      console.error(err)
      this.hasError = true;
      this.pending = false;
      this.message = "Operation rejected by the hierarchy!"
    }
    )
  
  }

}
