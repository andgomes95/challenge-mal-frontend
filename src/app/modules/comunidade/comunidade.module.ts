import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComunidadeComponent } from './comunidade.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: ComunidadeComponent}
];

@NgModule({
  declarations: [ComunidadeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ComunidadeModule { }
