import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Comic } from 'src/app/models/comic';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {
  @Input() comic!: Comic; // aqui recibimos el objeto de comic del padre y podemos dibujarlo
  @Input() index!: number;
  public comics : Array<Comic>;
  @Output() seleccionarFavorito: EventEmitter<any> = new EventEmitter();//aqui recibimos la funcion del padre de seleccionar favorito
  @Output() eliminarComic: EventEmitter<any> = new EventEmitter();//aqui recibimos la funcion de eliminar del padre
  @Output() modificarComic: EventEmitter<any> = new EventEmitter();

  modificarComicHijo(): void{
    this.modificarComic.emit(this.index);
  }
  eliminarComicHijo(): void{
    this.eliminarComic.emit(this.index);
  }
  seleccionarFavoritoHijo(): void{
    this.seleccionarFavorito.emit(this.comic);
    //this.seleccionarFavorito.emit({comic : this.comic, saludo: "hola"}); otra opcion para mandar mas datos 
  }

  constructor() { 
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

}
