import { Component, OnInit } from '@angular/core';

interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  }
];


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})

export class PerfilComponent implements OnInit {
  username : string = "YamiYuugi";
  rank : number = 1;
  countries = COUNTRIES;
  constructor() { }
progress = 0.0;
  progressBar = document.querySelector('.progress-bar');
  intervalId;
  color = '#000000';
  ngOnInit() {
    const getDownloadProgress = () => {
      console.log('getDownload', this);
      if (this.progress < 70.0) {
        console.log('inside if', this.progress);
        let value = this.hslToRgb(120.0/255.0*this.progress/100.0, 1, 0.5)
        this.color = this.num2hex(value)
        this.progress = this.progress + 1.0;
        
      }
      else {
        clearInterval(this.intervalId);
      }
    }
    this.intervalId = setInterval(getDownloadProgress, 10);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  hslToRgb(h, s, l) {
    var r, g, b;

    if (s == 0) {
      r = g = b = l; // achromatic
    } else {
      function hue2rgb(p, q, t) {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1/6) return p + (q - p) * 6 * t;
        if (t < 1/2) return q;
        if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
      }

      var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      var p = 2 * l - q;

      r = hue2rgb(p, q, h + 1/3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1/3);
    }

    return [ r * 255, g * 255, b * 255 ];
  }

  num2hex(triplet) {
    var hex_alphabets = "0123456789ABCDEF";
    var hex = "#";
    var int1,int2;
    for(var i=0;i<3;i++) {
      int1 = triplet[i] / 16;
      int2 = triplet[i] % 16;

      hex += hex_alphabets.charAt(int1) + hex_alphabets.charAt(int2); 
    }
    return(hex);
  }

  

}