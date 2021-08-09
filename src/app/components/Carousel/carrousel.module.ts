import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

import { Carousel } from './Carousel';

@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [Carousel],
  exports: [Carousel],
  bootstrap: [Carousel]
})
export class NgbdCarouselModule {}