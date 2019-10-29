import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-home-regras',
  templateUrl: './carousel-home-regras.component.html',
  styleUrls: ['./carousel-home-regras.component.css']
})
export class CarouselHomeRegrasComponent implements OnInit {

  images = ['../../../assets/img/kawaii.png','../../../assets/img/shounen.png','../../../assets/img/otaku.png','../../../assets/img/2d.png','../../../assets/img/hikikomori.png'];

  constructor() { }

  ngOnInit() {

  }

}
