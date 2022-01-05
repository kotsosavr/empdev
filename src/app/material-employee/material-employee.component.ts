import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Employee } from 'src/Employee';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-material-employee',
  templateUrl: './material-employee.component.html',
  styleUrls: ['./material-employee.component.css']
})
export class MaterialEmployeeComponent implements OnInit {

  displayedColumns: string[] = ['name', 'email', 'actions'];

  employee!: Employee;

  employees: Employee[] = [];

  empids:string[]=[];

  dataSource = new MatTableDataSource<Employee>([]);

  showform = false;

  eform = new FormGroup({

    name: new FormControl("", [Validators.required, Validators.maxLength(255), Validators.minLength(3)]),
    email: new FormControl("", [Validators.required, Validators.email])
  });
  





  constructor(private http: HttpClient, private employeeService: EmployeeServiceService) {

  }

  ngOnInit(): void {

    this.employeeService.getEmployees().subscribe(onNext => {

      for (let i in onNext) {

        this.employees.push(new Employee(i, onNext[i].name, onNext[i].email));

        this.empids.push(i);
      }

      this.dataSource = new MatTableDataSource(this.employees);

    });

    console.log(this.empids);


  }

  createEmployee() {

    this.showform = false;

    this.employee = new Employee(Math.random().toString(36).substr(2, 5), this.eform.value.name, this.eform.value.email);

    this.employeeService.createEmployees(this.employee).subscribe((response:any) => {

      this.employees.push(this.employee);
      this.dataSource = new MatTableDataSource(this.employees);

    });

  }


  deleteEmployee(id: any) {

    console.log(id);

    this.employeeService.delEmployee(id).subscribe(() => {

      for (let i = 0; i < this.employees.length; i++) {
        if (this.employees[i].id == id)
          this.employees.splice(i, 1)
      }

      this.dataSource = new MatTableDataSource(this.employees);
    });

  }

  ngAfterViewInit(): void {

    
  }


}