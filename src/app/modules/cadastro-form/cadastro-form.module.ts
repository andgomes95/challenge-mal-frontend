import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroFormComponent } from './cadastro-form.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: CadastroFormComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastroFormComponent],
  exports: [RouterModule]
})
export class CadastroFormModule { }