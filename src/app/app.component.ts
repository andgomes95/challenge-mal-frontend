import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {TranslateService} from '@ngx-translate/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ChallengeMAL';

  items: MenuItem[];

  constructor(public translate: TranslateService){
      translate.addLangs(['pt','en']);
      translate.setDefaultLang('pt');
      const browserLang = translate.getBrowserLang();
      translate.use(browserLang.match(/en|pt_br/) ? browserLang : 'pt');
  }

    ngOnInit() {
       
    }
}
