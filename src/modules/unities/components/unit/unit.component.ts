import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Organization } from '@modules/organizations/models/organization';
import { OrganizationService } from '@modules/organizations/services/organization.service';
import { AdminUnit } from '@modules/unities/models/AdminUnit';
import { OperationalUnit } from '@modules/unities/models/OperationalUnit';
import { Subordinate } from '@modules/unities/models/Subordinate';
import { UnitService } from '@modules/unities/services/unit.service';

@Component({
  selector: 'sb-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.scss']
})
export class UnitComponent implements OnInit {
  constructor(public orgService: OrganizationService, public unitService: UnitService,  private sanitization: DomSanitizer) { }
  imageSrc! : SafeResourceUrl;
  isUpdate: boolean = false;
  organizations: Organization[] = [];

  public aunits!: AdminUnit[];
  adminForm: boolean = false;
  adminTitle: string = 'New Administrative Unit';  
  adminUnit: AdminUnit = {};

  public ounits!: OperationalUnit[];
  operationalTitle: string = 'New Operational Unit';
  operationalUnit: OperationalUnit = {};
  operationalForm: boolean = false;

  public subordinateUnits!: Subordinate[];
  subordinateTitle: string = 'New Operational Unit';
  subordinateUnit: Subordinate = {};
  subordinateForm: boolean = false;

  subordinatedUnits : Subordinate[] = [];

  urlPattern = "[Hh][Tt][Tt][Pp][Ss]?:\/\/(?:(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,}))(?::\d{2,5})?(?:\/[^\s]*)?"

  ngOnInit(): void {
    this.orgService.loadOrganizations().subscribe( (results) =>{
      this.organizations = results;
    })

    this.unitService.loadAdminUnits().subscribe( (results) =>{
      this.aunits = results;
    });
    this.unitService.loadOperationalUnits().subscribe( (results) =>{
      this.ounits = results;
    });
    this.unitService.loadSubordinates().subscribe( (results) =>{
      this.subordinateUnits = results;
    });
  }

  createAdminUnit(){
    this.unitService.createAdminUnit(this.adminUnit).subscribe( (result) => {
      this.aunits.push(<AdminUnit> result);
    } )
  }
  updateAdminUnit(){
    this.unitService.updateAdminUnit(this.adminUnit).subscribe((result: AdminUnit) => {
      let index = this.aunits.findIndex(item => item.id === this.adminUnit.id)
      this.aunits[index] = <AdminUnit> result;
    });
    this.isUpdate = false;
    this.adminUnit = {}
  }
  deleteAdminUnit(org: AdminUnit){
    this.unitService.deleteAdminUnit(org).subscribe( result => {
      this.aunits = this.aunits.filter( item => {return item.id !== org.id});
    })
  }
  onFileChange(event: any) {
    const reader = new FileReader();    
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);    
      reader.onload = () => {       
        this.imageSrc  = this.sanitization.bypassSecurityTrustResourceUrl(reader.result as string);
        //this.imageSrc = reader.result as SafeResourceUrl;
        console.info('File source... ', file.size)
        console.info('File source... ', file.name)
        console.info('File source... ', file.type)
      };
   
    }
  }
  createOperationalUnit(){
    this.unitService.createOperationalUnit(this.operationalUnit).subscribe( (result) => {
      this.ounits.push(<OperationalUnit> result);
    })
  }

  updateOperationalUnit(){
    this.unitService.updateOperationalUnit(this.operationalUnit).subscribe((result) => {
      let index = this.ounits.findIndex(item => item.id === this.adminUnit.id)
      this.ounits[index] = <OperationalUnit> result;
    });
    this.isUpdate = false;
    this.operationalUnit = {}
  }

  deleteOperationalUnit(ou: OperationalUnit){
    this.unitService.deleteOperationalUnit(ou).subscribe( result => {
      this.ounits = this.ounits.filter( item => {return item.id !== ou.id});
    })
  }
  createSubordinate(){
    this.unitService.createSuborniate(this.subordinateUnit).subscribe( (result) => {
      this.subordinateUnits.push(<Subordinate> result);      
      this.subordinateForm = false;
    })
  }

  updateSubordinate(){
    this.unitService.updateSubordinate(this.subordinateUnit).subscribe((result) => {
      let index = this.subordinateUnits.findIndex(item => item.id === this.subordinateUnit.id)
      this.subordinateUnits[index] = <Subordinate> result;
    });
    this.isUpdate = false;
    this.subordinateForm = false;
    this.subordinateUnit = {}
  }

  deleteSubordinate(sub: Subordinate){
    this.unitService.deleteSubordinate(sub).subscribe( result => {
      this.subordinateUnits = this.subordinateUnits.filter( item => {return item.id !== sub.id});
    })
  }
  setSubordinates(event: any){
    console.log('event', event)
    this.subordinatedUnits = this.aunits.filter( item => {return item.id !== this.subordinateUnit.superior?.id});

  }

  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

}
