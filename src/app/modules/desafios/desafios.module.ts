import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesafiosComponent } from './desafios.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: DesafiosComponent}
];

@NgModule({
  declarations: [DesafiosComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DesafiosModule { }
