import { Component, OnInit } from '@angular/core';
import { Jsonservice } from "src/app/jason.service";

@Component({
  selector: 'habilidades-blandas',
  templateUrl: './habilidades-blandas.component.html',
  styleUrls: ['./habilidades-blandas.component.css']
})
export class HabilidadesBlandasComponent implements OnInit {

  datos = [];
  constructor(public json: Jsonservice) { }

  ngOnInit(): void {
    this.json.getJson('https://anibalchavesbadilla.000webhostapp.com/HabilidadesBlandas_C.php')
    .subscribe((res: any) =>{
    this.datos  = res;
    })
  }

}
