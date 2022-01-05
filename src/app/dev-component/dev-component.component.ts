import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Device } from 'src/Device';
import { DeviceServiceService } from '../device-service.service';



@Component({
  selector: 'app-dev-component',
  templateUrl: './dev-component.component.html',
  styleUrls: ['./dev-component.component.css']
})
export class DevComponentComponent implements OnInit {


  displayedColumns: string[] = ['serialNo', 'description', 'type', 'empid', 'actions'];

  device!: Device;

  devices: Device[] = [];

  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();

  showform = false;

  dform = new FormGroup({ 
    
    serialNo: new FormControl("", [Validators.required]),
    description: new FormControl("", [Validators.required, Validators.maxLength(255), Validators.minLength(3)]),
    type: new FormControl("", [Validators.required, Validators.nullValidator])

  });

  constructor(private http: HttpClient, private deviceService: DeviceServiceService) {

  }

  ngOnInit(): void {

    this.deviceService.getDevices().subscribe(onNext => {

      for (let i in onNext) {
        this.devices.push(new Device(i, onNext[i].serialNo, onNext[i].description, onNext[i].type, onNext[i].empid));
      }

      this.dataSource = new MatTableDataSource(this.devices);

    });



  }

  createDevice() {

    this.showform = false;

    this.device = new Device(Math.random().toString(36).substr(2, 5), this.dform.value.serialNo, this.dform.value.description, this.dform.value.type, "0");

    this.deviceService.createDevice(this.device).subscribe(() => {

      console.log(this.device.serial);
      this.devices.push(this.device);
      this.dataSource = new MatTableDataSource(this.devices);

    });

  }



  deleteDevice(serial : any){

    this.deviceService.deleteDevice(serial).subscribe(() => {

      for (let i = 0; i < this.devices.length; i++) {
        if (this.devices[i].serial == serial)
          this.devices.splice(i, 1)
      }

      this.dataSource = new MatTableDataSource(this.devices);
    });

  }

  ngAfterViewInit(): void {


  }

  what(){

    // this.getDevice();

    // this.link = String(this.activatedroute.snapshot.paramMap.get('link'));

  }

}
