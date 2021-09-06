import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 menuItems = [
   {linkId:1, linkName: 'Estudios', linkUrl:'estudios'},
   {linkId:2, linkName: 'Experiencia', linkUrl:'experiencia'},
 ]
  constructor() { }

  ngOnInit(): void {
  }

}
