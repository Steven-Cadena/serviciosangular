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
  public comics: Array<Comic>;
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
    var nuevoComic = {
      nombre:nombre,
      imagen:imagen,
      descripcion:descripcion
    };
    this.comics.push(nuevoComic); 
  }

  eliminarComic(event:number): void{
    
  }

}
