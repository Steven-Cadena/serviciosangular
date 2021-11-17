import { Injectable } from "@angular/core";
import { Empleado } from "../models/Empleado";
import { HttpClient } from "@angular/common/http";
import { Global } from "../Global";
import { Observable } from "rxjs";

@Injectable()
export class ServiceEmpleados{

    constructor(private _http:HttpClient){}

    //para component empleadosalario
    getEmpleadosSalario(salario: string): Observable<any>{
        var request = "api/Empleados/EmpleadosSalario/" + salario;
        var url = Global.urlapiempleados + request;
        return this._http.get(url);
    }

    //para component listadoempleados
    getEmpleados():Observable<any>{
        var request = "/api/empleados";
        var url = Global.urlapiempleados + request;
        return this._http.get(url);
    }

    //para component detalle empleado
    findEmpleado(idempleado:string): Observable<any>{
        var request = "/api/empleados/" + idempleado;
        var url = Global.urlapiempleados + request;
        return this._http.get(url);
    }
}