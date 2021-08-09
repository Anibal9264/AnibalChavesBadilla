import { Component, OnInit } from '@angular/core';
import { Jsonservice } from "src/app/jason.service";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  foto = "";
  nombreC = "";
  detalle = "";
  detalleT ="";
  email = "";
  telefono ="";
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  constructor(public json: Jsonservice) { }

  ngOnInit(): void {
      this.json.getJson('http://localhost/API/User_C.php').subscribe((res: any) =>{
      this.foto = res['foto'];
      this.nombreC = res['nombreC'];
      this.detalleT = res['detalleT'];
      this.detalle = res['detalle'];
      this.email = res['email'];
      this.telefono = res['telefono'];
  })
  }
}
