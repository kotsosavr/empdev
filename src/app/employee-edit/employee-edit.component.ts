import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/Employee';
import { EmployeeServiceService } from '../employee-service.service';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';


@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  employee!: Employee;

  form!: FormGroup;

  id!: string;

  constructor(private fb: FormBuilder, private activatedroute: ActivatedRoute, private employeeService: EmployeeServiceService, private location: Location) { }

  ngOnInit(): void {

    this.getEmployee();

    this.id = String(this.activatedroute.snapshot.paramMap.get('id'));

    console.log(this.id);


    this.form = this.fb.group({
      id: [""],
      name: ["", Validators.required, Validators.maxLength(255), Validators.minLength(3)],
      email: ["", Validators.required, Validators.email]
    });


    this.employeeService.getEmployee(this.id).subscribe((employee: Employee) => {
      this.employee = employee;
      this.form = new FormGroup({
        name: new FormControl(this.employee.name),
        email: new FormControl(this.employee.email)
      })

    });


  }

  updateEmployee() {

    this.employee.name = this.form.value.name;
    this.employee.email = this.form.value.email;
    
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(employee => {
      this.employee = employee;
      this.goBack();
    });
    
  }

  getEmployee() {

    this.employeeService.getEmployee(this.id).subscribe(employee => this.employee = employee);
  }

  goBack(): void {
    
    this.location.back();
  }

}