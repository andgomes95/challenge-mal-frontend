import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RankMalComponent } from './rank-mal.component';

const routes: Routes = [
  {path: '', component: RankMalComponent}
];

@NgModule({
  declarations: [RankMalComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RankMalModule { }
