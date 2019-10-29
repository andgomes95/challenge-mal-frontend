import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../shared/models/usuario.model';

@Component({
  selector: 'app-cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.css']
})
export class CadastroFormComponent implements OnInit {
  powers = ['Devorador de temporadas + Cinefilo Otaku','Devorador de temporadas + Forever Young', 'Cinefilo Otaku + Forever Young','Anime de A a Z'];

  model = new Usuario('PaperBeel','Curupira',1);

  submitted = false;

  onSubmit() { this.submitted = true;}

  get diagnostic() { return JSON.stringify(this.model); }
  ngOnInit() {
  }

}