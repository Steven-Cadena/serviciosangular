import { Injectable } from "@angular/core";
import { Empleado2 } from "../models/Empleado2";
import { Global } from "../Global";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ServiceEmpleados2{

    constructor(private _http:HttpClient){}

    getEmpleadosOficios(): Observable<any>{
        var request = "api/Empleados/oficios";
        var url = Global.urlapiempleados + request;
        return this._http.get(url);
    }

    getEmpleados(oficio: string): Observable<any>{
        var request = "";
        var url = Global.urlapiempleados + request;
        return this._http.get(url);
    }
}