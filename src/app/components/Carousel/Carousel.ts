import { Component, ViewChild } from "@angular/core";
import { Jsonservice } from "src/app/jason.service";
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'carousel-Component',
    templateUrl: './view.html',
    styleUrls: ['./style.css'],
})

export class Carousel{
    images = [];
    constructor(public json: Jsonservice) { }

    ngOnInit(): void {
    this.json.getJson('https://anibalchavesbadilla.000webhostapp.com/Carousel_C.php').subscribe((res: any) =>{
    this.images  = res;
    })
    }
}



