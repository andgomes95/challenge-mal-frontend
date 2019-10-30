import { Component, OnInit } from '@angular/core';
import { Desafio } from '../../shared/models/desafio.model';
import { DesafiosService } from '../../shared/services/desafios.service';

@Component({
  selector: 'app-desafios',
  templateUrl: './desafios.component.html',
  styleUrls: ['./desafios.component.css']
})
export class DesafiosComponent implements OnInit {

  constructor(private service: DesafiosService) { }
  usuario = [];
  ngOnInit() {
   this.usuario =  this.service.list().subscribe(console.log('ok'));
   console.log(this.usuario[0].username);
  }

}
