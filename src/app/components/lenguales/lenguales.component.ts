import { Component, OnInit } from '@angular/core';
import { Jsonservice } from "src/app/jason.service";

@Component({
  selector: 'lenguales',
  templateUrl: './lenguales.component.html',
  styleUrls: ['./lenguales.component.css']
})
export class LengualesComponent implements OnInit {

 
  datos = [];
  constructor(public json: Jsonservice) { }

  ngOnInit(): void {
    this.json.getJson('https://anibalchavesbadilla.000webhostapp.com/Idiomas_C.php')
    .subscribe((res: any) =>{
    this.datos  = res;
    })
  }

}
