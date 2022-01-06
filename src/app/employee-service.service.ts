import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  employeesArray: Employee[] = [];

  //@Output() employeesretrieved: EventEmitter<Employee[]> = new EventEmitter();

  constructor(private http: HttpClient) {

  }

  createEmployees(value: Employee) {

    return this.http.post("https://employeesdevices-default-rtdb.firebaseio.com/Employee.json", value);

  }

  getEmployees(): Observable<any[]> {
    return this.http.get<any>("https://employeesdevices-default-rtdb.firebaseio.com/Employee.json");
  }

  getEmployee(code: string): Observable<any> {
    return this.http.get<Employee>("https://employeesdevices-default-rtdb.firebaseio.com/Employee/" + code + ".json");
  }

  delEmployee(code: string): Observable<any> {
    return this.http.delete<Employee>("https://employeesdevices-default-rtdb.firebaseio.com/Employee/" + code + ".json");
  }

  updateEmployee(link: string, emp: Employee): Observable<any> {
    return this.http.put<Employee>("https://employeesdevices-default-rtdb.firebaseio.com/Employee/" + link + ".json", emp);
  }

}