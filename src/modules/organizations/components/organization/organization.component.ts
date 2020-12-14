import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Organization } from '@modules/organizations/models/organization';
import { OrganizationService } from '@modules/organizations/services/organization.service';

@Component({
  selector: 'sb-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {
  isUpdate: boolean = false;
  organizations: Organization [] = [];
  organization: Organization = {}
  constructor(private orgService: OrganizationService) { }

  ngOnInit(): void {
    this.orgService.loadOrganizations().subscribe( (results : Organization[]) =>{
      this.organizations = results;
    } )
  }

  createOrg(){
    this.orgService.createOrganization(this.organization).subscribe( (result: Organization) => {
      this.organizations.push(result);
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

  deleteOrg(org: Organization){
    this.orgService.deleteOrganization(org).subscribe( result => {
      this.organizations = this.organizations.filter( item => {return item.id !== org.id});
    })
  }

}
