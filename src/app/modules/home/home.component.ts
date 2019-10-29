import { Component, OnInit } from '@angular/core';
import { ParallaxModule, ParallaxConfig } from 'ngx-parallax';
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  constructor(public translate: TranslateService) {
    
   }

  ngOnInit() {
    
    
  }



}
