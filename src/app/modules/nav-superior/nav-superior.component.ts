import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-superior',
  templateUrl: './nav-superior.component.html',
  styleUrls: ['./nav-superior.component.css']
})
export class NavSuperiorComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit() {
  }

}
