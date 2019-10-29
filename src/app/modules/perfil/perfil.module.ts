import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule  } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';
import { PerfilComponent } from './perfil.component';
import { AddAnimeDropdownComponent } from '../add-anime-dropdown/add-anime-dropdown.component';
import { NgCircleProgressModule } from 'ng-circle-progress';


const routes: Routes = [
  {path: '', component: PerfilComponent}
];

@NgModule({
  declarations: [PerfilComponent,
  AddAnimeDropdownComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule,
    NgCircleProgressModule.forRoot({})
  ],
  exports: [RouterModule]
})
export class PerfilModule { }
