import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Organization } from '@modules/organizations/models/organization';
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
  typeTitle = '';
  organizations: Organization [] = [];
  organization: Organization = {};
  type: OrganizationType = {};
  types: OrganizationType[] = [];
  title = '';
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
    } )
    this.orgService.loadTypes().subscribe( (results : OrganizationType[]) =>{
      this.types = results;
    } )
  }

  createOrg(){
    this.orgService.createOrganization(this.organization).subscribe( (result: Organization) => {
      this.editOrg = false;
      this.organizations.push(result);
    } )
  }

  createType(){
    this.orgService.createType(this.type).subscribe( (result: OrganizationType) => {
      this.types.push(result);
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
    this.organization = {}
  }
  updateType(){
    this.orgService.updateType(this.type).subscribe((result: OrganizationType) => {
      let index = this.types.findIndex(item => item.id === this.type.id);
      this.showTypeForm = false;
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
 
}
