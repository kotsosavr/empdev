import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Device } from 'src/Device';
import { DeviceServiceService } from '../device-service.service';
import { Location } from '@angular/common';
import { Employee } from 'src/Employee';
import { EmployeeServiceService } from '../employee-service.service';
import { MaterialEmployeeComponent } from '../material-employee/material-employee.component';

@Component({
  selector: 'app-dev-edit',
  templateUrl: './dev-edit.component.html',
  styleUrls: ['./dev-edit.component.css']
})
export class DevEditComponent implements OnInit {

  form!: FormGroup;

  serial!: string;
  device!: Device;

  employees:Employee[] = [];

  empids: string[]=[];

  employeeService: any;

  constructor(private fb: FormBuilder, private activatedroute: ActivatedRoute, private devService: DeviceServiceService, private location: Location) { }

  ngOnInit(): void {

    this.getDevice();

    this.serial = String(this.activatedroute.snapshot.paramMap.get('serial'));

    console.log(this.serial);

    this.form = this.fb.group({
      serial: [""],
      serialNo: ["", Validators.required, Validators.maxLength(255), Validators.minLength(1)],
      description: ["", Validators.required, Validators.maxLength(255), Validators.minLength(1)],
      type: ["", Validators.required, Validators.nullValidator]
    });


    this.devService.getDevice(this.serial).subscribe((device: Device) => {
      this.device = device;
      this.form = new FormGroup({
        serialNo: new FormControl(this.device.serialNo),
        description: new FormControl(this.device.description),
        type: new FormControl(this.device.type)
      })

    });


    


    
  }


  getDevice() {

    this.devService.getDevice(this.serial).subscribe(device => this.device = device);
  }

  goBack(): void {
    
    this.location.back();
  }

  updateDevice() {

    this.device.serialNo = this.form.value.serialNo;
    this.device.description = this.form.value.description;
    this.device.type = this.form.value.type;
    
    this.devService.updateDevice(this.serial, this.device).subscribe(device => {
      this.device = device;
      this.goBack();
    });
    
  }

  ngAfterViewInit(){


  }


}
