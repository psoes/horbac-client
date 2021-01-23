import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AdminUnit } from '@modules/unities/models/AdminUnit';
import { UnitService } from '@modules/unities/services/unit.service';

@Component({
  selector: 'sb-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.scss']
})
export class UnitComponent implements OnInit {
  constructor(private unitService: UnitService,  private sanitization: DomSanitizer) { }
  imageSrc! : SafeResourceUrl;
  isUpdate: boolean = false;
  public units!: AdminUnit [];
  adminUnit: AdminUnit = {};
  ngOnInit(): void {
    this.unitService.loadAdminUits().subscribe( (results : AdminUnit[]) =>{
      this.units = results;
    });
  }

  createAdminUnit(){
    this.unitService.createAdminUnit(this.adminUnit).subscribe( (result: AdminUnit) => {
      console.log('REST', result);
      this.units.push(result);
    } )
  }

  updateAdminUnit(){
    this.unitService.updateAdminUnit(this.adminUnit).subscribe((result: AdminUnit) => {
      let index = this.units.findIndex(item => item.id === this.adminUnit.id)
      this.units[index] = result;
    });
    this.isUpdate = false;
    this.adminUnit = {}
  }

  deleteAdminUnit(org: AdminUnit){
    this.unitService.deleteAdminUnit(org).subscribe( result => {
      this.units = this.units.filter( item => {return item.id !== org.id});
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

}
