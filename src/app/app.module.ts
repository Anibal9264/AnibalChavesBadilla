import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { Navbar } from './components/Navbar/Navbar';
import { Carousel } from './components/Carousel/Carousel';
import { Inicio } from './components/Inicio/Inicio';
import { PerfilComponent } from './components/perfil/perfil.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ExperienceComponent } from './components/experience/experience.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ // aqui van todos los coponentes de la app
    AppComponent,
    Inicio,
    Navbar,
    Carousel,
    PerfilComponent,
    ExperienceComponent
  ], 
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent] // componente principal
})
export class AppModule { }
