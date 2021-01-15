import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Organization } from '@modules/organizations/models/organization';
import { OrganizationType } from '@modules/organizations/models/organization-type';
import { OrganizationService } from '@modules/organizations/services/organization.service';
import { DomSanitizer, SafeHtml,  SafeUrl,  SafeStyle, SafeResourceUrl } from '@angular/platform-browser';


class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';
  constructor(public src: string, public file: File) {}
}

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

  imageSrc!: SafeResourceUrl;
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });


  constructor(private orgService: OrganizationService, public fb: FormBuilder, private sanitization: DomSanitizer) { 
  }

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

  selectedFile!: ImageSnippet;
  private onSuccess() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'ok';
  }

  private onError() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'fail';
    this.selectedFile.src = '';
  }

  get f(){
    return this.myForm.controls;
  }
   
  onFileChange(event: any) {
    const reader = new FileReader();
    
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
    
      reader.onload = () => {
        
        this.imageSrc  = this.sanitization.bypassSecurityTrustResourceUrl(reader.result as string);
        //this.imageSrc = reader.result as SafeResourceUrl;
     
        this.myForm.patchValue({
          fileSource: reader.result
        });

        console.info('File source... ', file.size)
        console.info('File source... ', file.name)
        console.info('File source... ', file.type)
   
      };
   
    }
  }

 
}
