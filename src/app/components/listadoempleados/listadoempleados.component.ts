import { Component, OnInit } from '@angular/core';
import { ServiceEmpleados } from 'src/app/services/empleado.service';
import { Empleado } from 'src/app/models/Empleado';

@Component({
  selector: 'app-listadoempleados',
  templateUrl: './listadoempleados.component.html',
  styleUrls: ['./listadoempleados.component.css']
})
export class ListadoempleadosComponent implements OnInit {
  public empleados!: Array<Empleado>;
  constructor(private _service: ServiceEmpleados) { }

  ngOnInit(): void {
    this._service.getEmpleados().subscribe(response => {
      this.empleados = response;
    });
  }

}
