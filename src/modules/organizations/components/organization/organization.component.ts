import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Organization, SocialReason } from '@modules/organizations/models/organization';
import { OrganizationType } from '@modules/organizations/models/organization-type';
import { OrganizationService } from '@modules/organizations/services/organization.service';
import { DomSanitizer, SafeHtml,  SafeUrl,  SafeStyle, SafeResourceUrl } from '@angular/platform-browser';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';
import { ParserService } from '@modules/organizations/services/parser.service';
import {ThemePalette} from '@angular/material/core';
class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';
  description: any = '';
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'sb-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {
  public Editor = ClassicEditor;
  isUpdate: boolean = false;
  editOrg = false;
  showTypeForm = false;
  socialReasonForm = false;
  typeTitle = '';

  reasonTitle = '';
  organizations: Organization [] = [];
  organization: Organization = new Organization();

  type: OrganizationType = {};
  socialReason: SocialReason = {};
  reasons: SocialReason [] = [];
  types: OrganizationType[] = [];
  title = '';

  logo!: File;

  public editorOptions!: JsonEditorOptions;
  public data: any;
  color: ThemePalette = 'accent';
  checked = false;
  checkedp2 = false;
  disabledp2 = false;
  maxEmployee: number = Infinity;
  disabled = false;

  @ViewChild(JsonEditorComponent, { static: false }) editor!: JsonEditorComponent;
  imageSrc!: SafeResourceUrl;
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });


  constructor(private parserService: ParserService, private orgService: OrganizationService, public fb: FormBuilder, private sanitization: DomSanitizer) { 
    this.editorOptions = new JsonEditorOptions()
    this.editorOptions.modes = ['code', 'text', 'tree', 'view']; // set all allowed modes
    //this.options.mode = 'code'; //set only one mode      
    this.data = "{ org: {id: 12, name: BHD, description: PAPA}, au: {id: 11, name: BHD, description: PAPA, parent: 0}, ou: {id: 14, name: BHD, description: PAPA, parent: 11} }";
    //this.data = "{ org: {id: 12, name: BHD, description: PAPA} }";
  }

  ngOnInit(): void {
    this.orgService.loadOrganizations().subscribe( (results : Organization[]) =>{
      this.organizations = results;
      this.downloadLogo(this.organizations[0]?.logo!);
    })
    this.orgService.loadTypes().subscribe( (results) =>{
      this.types = results;
    })

    this.orgService.loadSocialReasons().subscribe( (results) =>{
      results.forEach(item =>{
        this.reasons.push(<SocialReason>item);
      })      
      
    })
  }
  createOrg(){
    this.orgService.createOrganization(this.organization).subscribe( (result: Organization) => {
      this.editOrg = false;
      this.organizations.push(result);
    } )
  }

  createType(){
    this.orgService.createType(this.type).subscribe( (result) => {
      this.types.push(<OrganizationType>result);
      this.showTypeForm = false;
    })
  }

  updateOrg(){
    this.orgService.updateOrganization(this.organization).subscribe((result: Organization) => {
      let index = this.organizations.findIndex(item => item.id === this.organization.id);
      this.editOrg = false;
      this.organizations[index] = result;
    });
    this.isUpdate = false;
    this.organization = new Organization();
  }
  updateType(){
    this.orgService.updateType(this.type).subscribe((result) => {
      let index = this.types.findIndex(item => item.id === this.type.id);
      this.showTypeForm = false;
      this.types[index] = <OrganizationType>result;
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
      this.types = this.types.filter( item => {return item.id !== type.id});
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
        this.logo = event.target.files[0];
      };
   
    }
  }
  formChanges(event: any){
    console.log('data ', event);
  }
  changeLog(){
    console.log('data ', this.data)
    this.parserService.parse(this.data, (res, obj) =>{
      this.data = obj;
      this.organization = JSON.parse(JSON.stringify(this.data))
      this.createOrg();

    })
    console.log(this.data);
  }
  saveParam2(){
    this.checkedp2 = !this.checkedp2;
    if(!this.checkedp2) this.maxEmployee = Infinity;
  }

  createSocialReason(){
    this.orgService.createSocialReason(this.socialReason).subscribe( (result) => {
      this.reasons.push(<SocialReason>result);
      this.socialReasonForm = false;
    })
  }

  updateSocialReason(){
    this.orgService.updateSocialReason(this.socialReason).subscribe((result) => {
      let index = this.reasons.findIndex(item => item.id === this.socialReason.id);
      this.socialReasonForm = false;
      this.reasons[index] = <SocialReason>result;
    });
    this.isUpdate = false;
    this.socialReason = {}
  }

  deleteSocialReason(reason: SocialReason){
    this.orgService.deleteSocialReason(reason).subscribe( result => {
      this.reasons = this.reasons.filter( item => {return item.id !== reason.id});
    })
  }

  saveLogo(id: number){    
      this.orgService.uploadImage(id, this.logo).subscribe((result :Object) => {
        if (result) {
        let reader = new FileReader();
        reader.readAsDataURL(<Blob>result);
        reader.onload = () => {        
          this.imageSrc  = this.sanitization.bypassSecurityTrustResourceUrl(reader.result as string);
          console.log('result', this.imageSrc);
        };
      }
    }) 
  }

  downloadLogo(src: string){
    this.orgService.downloadImage(src).subscribe((result) => {
      if (result) {
      let reader = new FileReader();
      reader.readAsDataURL(<Blob>result);
      reader.onload = () => {        
        this.imageSrc  = this.sanitization.bypassSecurityTrustResourceUrl(reader.result as string);
        console.log('result', this.imageSrc);
      };
    }
  }) 
  }

  resetLogo(){
    this.imageSrc = '';
    (<HTMLInputElement>document.getElementById('upload-logo')).value = "";
  }
}
