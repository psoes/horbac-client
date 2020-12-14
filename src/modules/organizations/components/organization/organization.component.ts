import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Organization } from '@modules/organizations/models/organization';
import { OrganizationType } from '@modules/organizations/models/organization-type';
import { OrganizationService } from '@modules/organizations/services/organization.service';

@Component({
  selector: 'sb-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {
  isUpdate: boolean = false;
  organizations: Organization [] = [];
  organization: Organization = {};
  type: OrganizationType = {};
  types: OrganizationType[] = [];
  constructor(private orgService: OrganizationService) { }

  ngOnInit(): void {
    this.orgService.loadOrganizations().subscribe( (results : Organization[]) =>{
      this.organizations = results;
    } )
    this.orgService.loadTypes().subscribe( (results : OrganizationType[]) =>{
      this.types = results;
    } )
  }

  createOrg(){
    this.orgService.createOrganization(this.organization).subscribe( (result: Organization) => {
      this.organizations.push(result);
    } )
  }

  createType(){
    this.orgService.createType(this.type).subscribe( (result: OrganizationType) => {
      this.types.push(result);
    } )
  }

  updateOrg(){
    this.orgService.updateOrganization(this.organization).subscribe((result: Organization) => {
      let index = this.organizations.findIndex(item => item.id === this.organization.id)
      this.organizations[index] = result;
    });
    this.isUpdate = false;
    this.organization = {}
  }
  updateType(){
    this.orgService.updateType(this.type).subscribe((result: OrganizationType) => {
      let index = this.types.findIndex(item => item.id === this.type.id)
      this.types[index] = result;
    });
    this.isUpdate = false;
    this.type = {}
  }

  deleteOrg(org: Organization){
    this.orgService.deleteOrganization(org).subscribe( result => {
      this.organizations = this.organizations.filter( item => {return item.id !== org.id});
    })
  }
  deleteType(type: OrganizationType){
    this.orgService.deleteType(type).subscribe( result => {
      this.types = this.organizations.filter( item => {return item.id !== type.id});
    })
  }

}
