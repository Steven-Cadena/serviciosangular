//importante importar para el router menu
import { routing, appRoutingProviders} from './app.routing';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { ComicComponent } from './components/comic/comic.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { ComicsinyeccionComponent } from './components/comicsinyeccion/comicsinyeccion.component';


//importamos esto para el servicio y lo ponemos dentro de los imports
import {HttpClientModule} from '@angular/common/http';

//importar comicservice para ponerlo en providers
import { ComicsService } from './services/comics.service';
import { ServicePersonas } from './services/servicepersonas';
import { ServiceEmpleados } from './services/empleado.service';
import { ServiceEmpleados2 } from './services/empleados2.service';

//importar para los formularios para ponerlo en los imports
import { FormsModule } from '@angular/forms';
import { PersonasapiComponent } from './components/personasapi/personasapi.component';
import { EmpleadossalarioComponent } from './components/empleadossalario/empleadossalario.component';
import { EmpleadosoficioComponent } from './components/empleadosoficio/empleadosoficio.component';
import { ListadoempleadosComponent } from './components/listadoempleados/listadoempleados.component';
import { DetalleempleadosComponent } from './components/detalleempleados/detalleempleados.component';


@NgModule({
  declarations: [
    AppComponent,
    LibreriaComponent,
    ComicComponent,
    HomeComponent,
    MenuComponent,
    ComicsinyeccionComponent,
    PersonasapiComponent,
    EmpleadossalarioComponent,
    EmpleadosoficioComponent,
    ListadoempleadosComponent,
    DetalleempleadosComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,FormsModule,
    routing
  ],
  providers: [appRoutingProviders,
    ComicsService,
    ServicePersonas,
    ServiceEmpleados,
    ServiceEmpleados2], //inyectamos el service para que funcione ne todos los component
  bootstrap: [AppComponent]
})
export class AppModule { }
