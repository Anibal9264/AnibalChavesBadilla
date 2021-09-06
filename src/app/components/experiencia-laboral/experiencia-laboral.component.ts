import { Component, OnInit } from '@angular/core';
import { Jsonservice } from "src/app/jason.service";

@Component({
  selector: 'experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {
  datos = null;
  constructor(public json: Jsonservice) { }

  ngOnInit(): void {
    this.json.getJson('https://anibalchavesbadilla.000webhostapp.com/Experiencia_C.php')
    .subscribe((res: any) =>{
    this.datos  = res;
    })
  }

}
