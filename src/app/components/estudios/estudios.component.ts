import { Component, OnInit } from '@angular/core';
import { Jsonservice } from "src/app/jason.service";

@Component({
  selector: 'estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  datos = [];
  constructor(public json: Jsonservice) { }

  ngOnInit(): void {
    this.json.getJson('https://anibalchavesbadilla.000webhostapp.com/Educacion_C.php')
    .subscribe((res: any) =>{
    this.datos  = res;
    })
  }

  
}
