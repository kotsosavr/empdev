import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Device } from 'src/Device';

@Injectable({
  providedIn: 'root'
})
export class DeviceServiceService {

  @Output() devicesretrieved: EventEmitter<Device[]> = new EventEmitter();

  devices: Device[] = [];




  constructor(private http: HttpClient) {


  }

  createDevice(dev: Device) {

    return this.http.post("https://employeesdevices-default-rtdb.firebaseio.com/Device.json", dev);

  }

  getDevices(): Observable<Device[]>{
    return this.http.get<any>("https://employeesdevices-default-rtdb.firebaseio.com/Device.json");
  }

  getDevice(code: string): Observable<any> {
    return this.http.get<Device>("https://employeesdevices-default-rtdb.firebaseio.com/Device/" + code + ".json");
  }


  updateDevice(link: string, dev: Device) {
    return this.http.put<Device>("https://employeesdevices-default-rtdb.firebaseio.com/Device/" + link + ".json", dev);
  }

  deleteDevice(selectedDevice: Device){
    return this.http.delete<Device>("https://employeesdevices-default-rtdb.firebaseio.com/Device/" + selectedDevice + ".json");
  }


  assignDevices(){
       


  }
}