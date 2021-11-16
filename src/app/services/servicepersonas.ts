//importante para los servicios
import { Injectable } from "@angular/core";
import { Global } from "../Global";
//importante para la peticion al hacer el private en el constructor
import { HttpClient } from "@angular/common/http";
//import para devolver en getpersonas
import { Observable } from "rxjs";
@Injectable()
export class ServicePersonas{
    constructor(private _http: HttpClient){}

    //EN LOS METODOS SE SUELE DEVOLVER DIRECTAMENTE LA PROMESA
    //AUNQUE PODEMOS CREARNOS UNA PROMESA COMO EN VUE 
    getPersonas(): Observable<any>{
        var url = Global.urlpersonas;
        return this._http.get(url);//se devulve directamente la promesa
    }
}