export class Device{

    serial: string;
    serialNo: string;
    description: string;
    type: number;
    empid: string;


    constructor(serial: string, serialNo: string, description: string, type: number, empid: string){

        this.serial=serial;
        this.serialNo=serialNo;
        this.description=description;
        this.type=type;
        this.empid=empid;
        

    }



}