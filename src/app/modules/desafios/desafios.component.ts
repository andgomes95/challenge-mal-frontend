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
  rank1: Desafio[] = [];
  rank2: Desafio[] = [];
  rank3: Desafio[] = [];
  rank4: Desafio[] = [];
  rank5: Desafio[] = [];
  ngOnInit() {
   this.getDesafios();
  }

  getDesafios(){
    this.service.list().subscribe(desafios=> {
      for(let value of desafios){
        if(value.rank ==1){
          this.rank1.push(value);
        }else if(value.rank ==2){
          this.rank2.push(value);
        }else if(value.rank ==3){
          this.rank3.push(value);
        }else if(value.rank ==4){
          this.rank4.push(value);
        }else if(value.rank ==5){
          this.rank5.push(value);
        }
      }
    });
  }

}
