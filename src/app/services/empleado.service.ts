import { Injectable } from "@angular/core";
import { Empleado } from "../models/Empleado";
import { HttpClient } from "@angular/common/http";
import { Global } from "../Global";
import { Observable } from "rxjs";

@Injectable()
export class ServiceEmpleados{

    constructor(private _http:HttpClient){}

    getEmpleadosSalario(salario: string): Observable<any>{
        var request = "api/Empleados/EmpleadosSalario/" + salario;
        var url = Global.urlapiempleados + request;
        return this._http.get(url);
    }
}