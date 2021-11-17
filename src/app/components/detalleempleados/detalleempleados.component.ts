import { Component, OnInit } from '@angular/core';
import { ServiceEmpleados } from 'src/app/services/empleado.service';
import { Empleado } from 'src/app/models/Empleado';
//importante para recibir los datos por la cabecera de la url del padre
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-detalleempleados',
  templateUrl: './detalleempleados.component.html',
  styleUrls: ['./detalleempleados.component.css']
})
export class DetalleempleadosComponent implements OnInit {
  public empleado!: Empleado;

  //pasamos alconstructor por parametro el servicio y otro los elementos
  //para capturar las rutas
  constructor(
    private _service:ServiceEmpleados,
    private _route:ActivatedRoute
  ) { }

  findEmpleado(idempleado:string): void {
    this._service.findEmpleado(idempleado).subscribe(response=>{
      this.empleado = response;
    });
  }
  ngOnInit(): void {
    //para capturar el parametro enviado por la url 
    this._route.params.subscribe((params: Params) => {
      //capturamos su parametro por su name el de routing
      var id = params['idempleado'];
      this.findEmpleado(id);
    })
  }

}
