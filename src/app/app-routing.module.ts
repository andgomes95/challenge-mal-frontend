import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router'

const routes: Routes = [
  {path: '', loadChildren: './modules/home/home.module#HomeModule'},
  {path: 'home', loadChildren: './modules/home/home.module#HomeModule'},
  {path: 'desafios', loadChildren: './modules/desafios/desafios.module#DesafiosModule'},
  {path: 'comunidade', loadChildren: './modules/comunidade/comunidade.module#ComunidadeModule'},
  {path: 'rankMAL', loadChildren: './modules/rank-mal/rank-mal.module#RankMalModule'},
  {path: 'perfil', loadChildren: './modules/perfil/perfil.module#PerfilModule'}


];

export const routing = RouterModule.forRoot(routes)


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
