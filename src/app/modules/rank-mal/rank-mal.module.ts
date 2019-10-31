import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RankMalComponent } from './rank-mal.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {path: '', component: RankMalComponent}
];

@NgModule({
  declarations: [RankMalComponent],
  imports: [
    NgbModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RankMalModule { }
