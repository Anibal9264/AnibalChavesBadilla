import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { Carousel } from './components/Carousel/Carousel';
import { Inicio } from './components/Inicio/Inicio';
import { PerfilComponent } from './components/perfil/perfil.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ExperienciaLaboralComponent } from './components/experiencia-laboral/experiencia-laboral.component';
import { HabilidadesBlandasComponent } from './components/habilidades-blandas/habilidades-blandas.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { LengualesComponent } from './components/lenguales/lenguales.component';
import { ReferenciasComponent } from './components/referencias/referencias.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Routes, RouterModule } from '@angular/router';
import { ModalComponent } from './components/modal/modal.component';
import { FooterComponent } from './components/footer/footer.component';

const rutas: Routes = [
  { path: '', component: EstudiosComponent },
  { path: 'estudios', component: EstudiosComponent },
  { path: 'experiencia', component: ExperienciaLaboralComponent }
];



@NgModule({
  declarations: [ // aqui van todos los coponentes de la app
    AppComponent,
    Inicio,
    Carousel,
    PerfilComponent,
    ExperienciaLaboralComponent,
    HabilidadesBlandasComponent,
    EstudiosComponent,
    LengualesComponent,
    ReferenciasComponent,
    NavbarComponent,
    ModalComponent,
    FooterComponent
  ], 
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule,
    BrowserModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent] // componente principal
})
export class AppModule { }
