import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../shared/services/usuario.service';
import { Usuario } from '../../shared/models/usuario.model';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})

export class PerfilComponent implements OnInit {
  userID = 1;
  usuario: Usuario;
  constructor(private service: UsuarioService,
   private router: Router,
   private location: Location) { }
  progress = 0.0;
  progressBar = document.querySelector('.progress-bar');
  intervalId;
  color = '#000000';
  ngOnInit() {
    this.userID = parseInt(this.router.parseUrl(this.location.path()).queryParams['id']) || 1;
    this.getUserData();
    const getDownloadProgress = () => {
      let progress = 0.0;
      if (this.progress && progress < this.progress) {
        let value = this.hslToRgb(120.0/255.0*this.progress/100.0, 1, 0.5)
        this.color = this.num2hex(value)
        progress = progress + 1.0;
        
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

  getUserData(){
    console.log("TEST1 "+this.userID);
    this.service.loadByID(this.userID).subscribe(usuarios => {
      this.usuario = usuarios;
      this.progress = (this.usuario.desafio[0].list.length)/55.0*100.0;
      console.log("TEST2 "+this.userID);
    }
)}

  

}