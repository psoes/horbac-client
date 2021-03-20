import { Component, OnInit } from '@angular/core';
import { Organization } from '@modules/organizations/models/organization';
import { OrganizationService } from '@modules/organizations/services/organization.service';
import { Resource } from '@modules/resources/models/Resource';
import { Uses } from '@modules/resources/models/Uses';
import { Vue } from '@modules/resources/models/Vue';
import { ResourceService } from '@modules/resources/services/resource.service';

@Component({
  selector: 'sb-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {
  isUpdate: boolean = false;
  editResource = false;
  resources: Resource[] = [];
  resource: Resource = {};
  title='';
  editUses = false;
  usesTab: Uses[] = [];
  uses: Uses = {};
  vues: Vue[] = [];
  vue: Vue = {};
  editVue = false;
  organizations : Organization[] = [];

  constructor(private orgService: OrganizationService, private resourceService: ResourceService) { 

  }

  ngOnInit(): void {
    this.orgService.loadOrganizations().subscribe((results : Organization[]) =>{
      this.organizations = results ? results : [];
    })
    this.resourceService.loadResources().subscribe((results : Resource[]) =>{
      this.resources = results? results : [];
    })
    this.resourceService.loadViews().subscribe((results : Vue[]) =>{
      this.vues = results? results : [];
    });
    this.resourceService.loadUses().subscribe((results : Uses[]) =>{
      this.usesTab = results? results : [];
    })
  }

  createUses(){
    console.log(this.uses);
    this.resourceService.createUses(this.uses).subscribe((result: Uses) => {
      this.editUses= false;
      this.usesTab.push(result);
    })
  }

  updateUses(){
    this.resourceService.updateUses(this.uses).subscribe((result: Uses) => {
      let index = this.usesTab.findIndex(item => item.id === this.uses.id);
      this.editUses= false;
      this.usesTab[index] = result;
    });
    this.isUpdate = false;
    this.uses = {}
  }
  deleteUses(cons: Uses){
    this.resourceService.deleteUses(cons).subscribe( result => {
      this.usesTab = this.usesTab.filter( item => {return item.id !== cons.id});
    })
  }

  ////
  createResource(){
    console.log(this.resource);
    this.resourceService.createResource(this.resource).subscribe((result: Resource) => {
      this.editResource= false;
      this.resources.push(result);
    })
  }

  updateResource(){
    this.resourceService.updateResource(this.uses).subscribe((result: Resource) => {
      let index = this.resources.findIndex(item => item.id === this.resource.id);
      this.editResource = false;
      this.resources[index] = result;
    });
    this.isUpdate = false;
    this.resource = {}
  }
  deleteResource(cons: Resource){
    this.resourceService.deleteResource(cons).subscribe( result => {
      this.resources = this.resources.filter( item => {return item.id !== cons.id});
    })
  }
/////
  createVue(){
    this.resourceService.createView(this.vue).subscribe((result: Vue) => {
      this.editVue = false;
      this.resources.push(result);
    })
  }

  updateVue(){
    this.resourceService.updateView(this.vue).subscribe((result: Vue) => {
      let index = this.vues.findIndex(item => item.id === this.vue.id);
      this.editVue = false;
      this.vues[index] = result;
    });
    this.isUpdate = false;
    this.vue = {}
  }
  deleteVue(cons: Vue){
    this.resourceService.deleteView(cons).subscribe( result => {
      this.vues = this.vues.filter( item => {return item.id !== cons.id});
    })
  }

}
  