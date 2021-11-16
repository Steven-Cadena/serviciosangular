import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ServiceEmpleados2 } from 'src/app/services/empleados2.service';
import { Empleado2 } from 'src/app/models/Empleado2'; 


@Component({
  selector: 'app-empleadosoficio',
  templateUrl: './empleadosoficio.component.html',
  styleUrls: ['./empleadosoficio.component.css']
})
export class EmpleadosoficioComponent implements OnInit {
  public personas! : Array<Empleado2>;
  public oficios! : Array<string>;
  public selectOficio! : string;
  @ViewChild("cajaselect") cajaselect!:ElementRef;
  constructor(private _service:ServiceEmpleados2) { }

  
  cargarSelect(){
    this._service.getEmpleadosOficios().subscribe(response =>{
      this.oficios = response;
    });
  }

  ngOnInit(): void {
    this.cargarSelect();
  }

  mostrarEmpleados(){
    this.selectOficio = this.cajaselect.nativeElement.value;
    
  }
}
