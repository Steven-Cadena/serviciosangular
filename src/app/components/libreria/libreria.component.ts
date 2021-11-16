//importar viewchild y elementRef para los formularios, poder coger los valores
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Comic } from 'src/app/models/comic';
@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrls: ['./libreria.component.css']
})
export class LibreriaComponent implements OnInit {
  //esto es para poder coger los datos del formulario
  @ViewChild("cajanombre") cajanombre:ElementRef;
  @ViewChild("cajaimagen") cajaimagen:ElementRef;
  @ViewChild("cajadescripcion") cajadescripcion:ElementRef;
  // @ViewChild("cajadescripcion") cajadescripcion!:ElementRef;
  // esto se hace si no haces en el constructor con la !
  
  public comics: Array<Comic>; //array para meter cada comic 
  public favorito!: Comic;
  constructor() { 
    this.cajanombre = new ElementRef("");
    this.cajaimagen = new ElementRef("");
    this.cajadescripcion = new ElementRef("");

    this.comics = [
      new Comic(
        "Spiderman",
        "https://images-na.ssl-images-amazon.com/images/I/61AYfL5069L.jpg",
        "Hombre araña"
      ),
      new Comic(
        "Wolverine",
        "https://i.etsystatic.com/9340224/r/il/42f0e1/1667448004/il_570xN.1667448004_sqy0.jpg",
        "Lobezno"
      ),
      new Comic(
        "Guardianes de la Galaxia",
        "https://cdn.normacomics.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/g/u/guardianes_galaxia_guadianes_infinito.jpg",
        "Yo soy Groot"
      ),
      new Comic(
      "Avengers",
      "https://d26lpennugtm8s.cloudfront.net/stores/057/977/products/ma_avengers_01_01-891178138c020318f315132687055371-640-0.jpg",
      "Los Vengadores"
      ),
      new Comic(
      "Spawn",
      "https://i.pinimg.com/originals/e1/d8/ff/e1d8ff4aeab5e567798635008fe98ee1.png",
      "Todd MacFarlane"
      )
    ];
  }

  ngOnInit(): void {

  }

  insertarComic(): void{
    var nombre = this.cajanombre.nativeElement.value;
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
    var nombre = this.cajanombre.nativeElement.value;
    var imagen = this.cajaimagen.nativeElement.value;
    var descripcion = this.cajadescripcion.nativeElement.value;
    //modificamos comics ya que en event ponemos el indice que recibimos
    this.comics[event] = new Comic(nombre,imagen,descripcion);
  }
}
