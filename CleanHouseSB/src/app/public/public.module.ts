import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [HomeComponent, NavbarComponent, CarouselComponent],
  imports: [CommonModule],
  exports: [],
})
export class PublicModule {}
