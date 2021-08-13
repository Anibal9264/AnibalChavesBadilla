import { Component, OnInit, Input } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
declare var $: any;
@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() contenido: any;
  @Input() tipo: any;



  constructor(private modalService: NgbModal) {

  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
      
    });
  }

  ngOnInit(): void {
  }

  setConten(){
    switch (this.tipo) {
      case 'img':
         $("#bodyM").html("<img src='"+this.contenido+"' class='img-fluid' alt='...'>");
        break;
      default:
        break;
    }
  }
}
