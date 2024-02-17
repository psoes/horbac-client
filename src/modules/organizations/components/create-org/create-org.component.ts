import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Organization } from '@modules/organizations/models/organization';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { AdminUnit } from '@modules/unities/models/AdminUnit';
import { EmployeeCrud } from '@modules/employees/models/Employee';
import { OrganizationService } from '@modules/organizations/services/organization.service';
import { OrganizationType } from '@modules/organizations/models/organization-type';

@Component({
  selector: 'sb-create-org',
  templateUrl: './create-org.component.html',
  styleUrls: ['./create-org.component.scss'],
  
})
export class CreateOrgComponent implements OnInit {
  public Editor = ClassicEditor;
  organization: Organization = new Organization();
  root: AdminUnit = new AdminUnit(undefined, "Root");
  owner: EmployeeCrud = {};

  pending: boolean = false;

  title ="Organization"
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
  types: OrganizationType[] = [];

  @ViewChild('autosize') autosize!: CdkTextareaAutosize;
  constructor(private _formBuilder: FormBuilder, private orgService: OrganizationService) { }

  ngOnInit(): void {
    this.orgService.loadTypes().subscribe((results) => {
      this.types = results;
    })
  }

  message= ""
  hasError = false;
  success = false;
  submit() : void {
    const payload = {
      organization: this.organization,
      root: this.root,
      owner: this.owner
    };
    console.log("Organization data", payload)
    this.pending = true
    this.orgService.createOrganizationWithApproval(payload).subscribe((res) => {
      this.pending = false;
      this.hasError = false;
      this.success = true;
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
