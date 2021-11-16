//importar viewchild y elementRef para los formularios, poder coger los valores
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Comic } from 'src/app/models/comic';
import { ComicsService } from 'src/app/services/comics.service';
@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrls: ['./libreria.component.css']
})
export class LibreriaComponent implements OnInit {
  //esto es para poder coger los datos del formulario
  @ViewChild("cajatitulo") cajatitulo:ElementRef;
  @ViewChild("cajaimagen") cajaimagen:ElementRef;
  @ViewChild("cajadescripcion") cajadescripcion:ElementRef;
  // @ViewChild("cajadescripcion") cajadescripcion!:ElementRef;
  // esto se hace si no haces en el constructor con la !
  
  public comics!: Array<Comic>; //array para meter cada comic 
  public favorito!: Comic;
  constructor(private _servicecomics:ComicsService) { //se pone en el constructor para obtener el servicio
    this.cajatitulo = new ElementRef("");
    this.cajaimagen = new ElementRef("");
    this.cajadescripcion = new ElementRef("");
  }

  ngOnInit(): void {
    //aqui asociamos los comics con lo que obtenemos del servicio
    this.comics = this._servicecomics.getComics();
  }

  insertarComic(): void{
    var nombre = this.cajatitulo.nativeElement.value;
    var imagen = this.cajaimagen.nativeElement.value;
    var descripcion = this.cajadescripcion.nativeElement.value;
    var newcomic = new Comic(nombre,imagen,descripcion); // creamos un nuevo comic para insertar a comics
    // var newcomic = {
    //   nombre:nombre,
    //   imagen:imagen,
    //   descripcion:descripcion
    // };
    this.comics.push(newcomic); 
  }

  eliminarComic(event:number): void{
    console.log(event);
    this.comics.splice(event,1);
    // if(this.favorito.nombre == this.comics[event].nombre){
      
    // }
  }

  seleccionarFavorito(event:Comic): void{
    this.favorito = event;
  }

  modificarComic(event:number): void{
    var nombre = this.cajatitulo.nativeElement.value;
    var imagen = this.cajaimagen.nativeElement.value;
    var descripcion = this.cajadescripcion.nativeElement.value;
    //modificamos comics ya que en event ponemos el indice que recibimos
    this.comics[event] = new Comic(nombre,imagen,descripcion);
  }
}
