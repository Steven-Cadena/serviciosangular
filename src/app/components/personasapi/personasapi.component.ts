import { Component, OnInit } from '@angular/core';
import { ServicePersonas } from 'src/app/services/servicepersonas';
import { Persona } from 'src/app/models/Persona';

@Component({
  selector: 'app-personasapi',
  templateUrl: './personasapi.component.html',
  styleUrls: ['./personasapi.component.css']
})
export class PersonasapiComponent implements OnInit {
  public personas!:Array<Persona>;

  //no inicializamos en el constructor sino en el ngOnInit
  constructor(private _service: ServicePersonas) { }

  ngOnInit(): void {
    //para rellenar el array personas con los datos del servicio
    this._service.getPersonas().subscribe(response =>{
      //como la persona es igual a la respuesta se enlaza automaticamente
      // gracias al Observable y que se llaman igual las propiedades
      this.personas = response;
    });
  }

}
