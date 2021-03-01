import { SelectionModel } from '@angular/cdk/collections';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Organization } from '@modules/organizations/models/organization';
import { OrganizationService } from '@modules/organizations/services/organization.service';
import { AdminUnit } from '@modules/unities/models/AdminUnit';
import { OperationalUnit } from '@modules/unities/models/OperationalUnit';
import { OrgFlatNode, OrgTree } from '@modules/unities/models/OrgTree';
import { PlaceUnder } from '@modules/unities/models/PlaceUnder';
import { Subordinate } from '@modules/unities/models/Subordinate';
import { UnitService } from '@modules/unities/services/unit.service';

@Component({
  selector: 'sb-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.scss'],
  providers: [UnitService]
})
export class UnitComponent implements OnInit {
  
  
  flatNodeMap = new Map<OrgFlatNode, OrgTree>();
  
  nestedNodeMap = new Map<OrgTree, OrgFlatNode>();

  treeControl!: FlatTreeControl<OrgFlatNode>;

  treeFlattener!: MatTreeFlattener<OrgTree, OrgFlatNode>;
    
  dataSource!: MatTreeFlatDataSource<OrgTree, OrgFlatNode>;  

  constructor(public orgService: OrganizationService, public unitService: UnitService,  private sanitization: DomSanitizer) {
    this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel,
      this.isExpandable, this.getChildren);
    this.treeControl = new FlatTreeControl<OrgFlatNode>(this.getLevel, this.isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  }

  getLevel = (node: OrgFlatNode) => node.level!;

  isExpandable = (node: OrgFlatNode) => node.expandable!;

  getChildren = (node: OrgTree): OrgTree[] => node.children!;

  hasChild = (_: number, _nodeData: OrgFlatNode) => _nodeData.expandable;

  hasNoContent = (_: number, _nodeData: OrgFlatNode) => _nodeData.data === null;

  /**
   * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
   */
  transformer = (node: OrgTree, level: number) => {
    const existingNode = this.nestedNodeMap.get(node);
    const flatNode = existingNode && existingNode.data === node.data
        ? existingNode
        : new OrgFlatNode();
    flatNode.data = node.data;
    flatNode.level = level;
    flatNode.expandable = !!node.children?.length;
    this.flatNodeMap.set(flatNode, node);
    this.nestedNodeMap.set(node, flatNode);
    return flatNode;
  }  

  

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

  freeUnits: AdminUnit[] = [];
  
  subUnits: AdminUnit[] = [];
  placeUnits: OperationalUnit[] = [];
  placeUnderUnits: PlaceUnder[] = [];
  freePlaceUnders: OperationalUnit[] = [];

  mapTitle = '';

  isSubordinate = true;

  urlPattern = "[Hh][Tt][Tt][Pp][Ss]?:\/\/(?:(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,}))(?::\d{2,5})?(?:\/[^\s]*)?"

  ngOnInit(): void {
    this.orgService.loadOrganizations().subscribe( (results) =>{
      this.organizations = results;
    })

    this.unitService.loadAdminUnits().subscribe( (results) =>{
      this.aunits = results;
      this.freeUnits = results;
    });
    this.unitService.loadOperationalUnits().subscribe( (results) =>{
      this.ounits = results;
      this.freePlaceUnders = results;
    });
    this.unitService.loadSubordinates().subscribe( (results) =>{
      this.subordinateUnits = results;
    });
    this.unitService.loadPlaceUnders().subscribe( (results) =>{
      this.placeUnderUnits = results;
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
    let tmp :Subordinate[] = [];
    this.subUnits.forEach(unit => {
        let subord = new Subordinate(this.subordinateUnit.organization, this.subordinateUnit.superior, unit);
        tmp.push(subord);
    });
    this.unitService.createManySubornates(tmp).subscribe( (result) => {
      if(result) result.map(item => this.subordinateUnits.push(item));    
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
      this.freeUnits.push(sub);
    })
  }
  deletePlaceUnder(sub: PlaceUnder){
    this.unitService.deletePlaceUnder(sub).subscribe( result => {
      this.placeUnderUnits = this.placeUnderUnits.filter( item => {return item.id !== sub.id});
      this.freePlaceUnders.push(sub);
    })
  }
  createPlaceUnder(){
    let tmp :PlaceUnder[] = [];
    this.placeUnits.forEach(unit => {
        let place = new PlaceUnder(this.subordinateUnit.organization!, this.subordinateUnit.superior!, unit);
        tmp.push(place);
    });
    this.unitService.createManyPlaceUnders(tmp).subscribe( (result) => {
      if(result) result.map(item => this.placeUnderUnits.push(item));    
      this.subordinateForm = false;
    })
  }

  setSubordinates(event: any){
    this.freeUnits = this.freeUnits.filter(item => {
      return this.subordinateUnits.findIndex(item1 => item1.subordinate?.id === item.id) == -1 && item.id !== this.subordinateUnit.superior?.id;
    });
  }

  drop(event: CdkDragDrop<AdminUnit[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  setFreeUnits(){
    this.subUnits = [];
    this.freeUnits = this.freeUnits.filter(item => {
      return this.subordinateUnits.findIndex(item1 => item1.subordinate?.id === item.id) == -1;
    })
  }
  setFreePlaceUnders(){
    this.placeUnits = [];
    this.freePlaceUnders = this.freePlaceUnders.filter(item => {
      return this.placeUnderUnits.findIndex(item1 => item1.subordinate?.id === item.id) == -1;
    })
  }

  currentOrg!: Organization;
  loadOrgTree(event: any){
    console.log('request... : ', event.value.id);
    this.currentOrg = event.value;
    this.unitService.getOrgTree(event.value.id).subscribe( (result) =>{
      console.log('DATAAAAA... : ', result);
      this.dataSource.data = [result];
    });
  }

  refresh = () => this.currentOrg? this.unitService.getOrgTree(this.currentOrg.id!).subscribe( (result) =>{
    console.log('DATAAAAA... : ', result);
    this.dataSource.data = [result];
  }) : null;

}
