import { routing, appRoutingProviders} from './app.routing';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { ComicComponent } from './components/comic/comic.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';



//importar para los formularios
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LibreriaComponent,
    ComicComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
