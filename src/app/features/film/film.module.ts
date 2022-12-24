import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmCreateComponent } from './film-create/film-create.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { FormsModule } from '@angular/forms';
import { FilmService } from './film.service';

const routes:Routes=[
  {
    path:'list',
    component:FilmListComponent
  },
  {
    path:'create',
    component:FilmCreateComponent
  },
  {
    path:'edit/:id',
    component:FilmCreateComponent
  },
  {
    path:'detail/:id',
    component:FilmDetailComponent
  },
  {
    path:'',
    redirectTo:'list',
    pathMatch:'full'
  },
]

@NgModule({
  declarations: [
    FilmCreateComponent,
    FilmDetailComponent,
    FilmListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
  ],
  providers:[
    FilmService
  ]
})
export class FilmModule { }
