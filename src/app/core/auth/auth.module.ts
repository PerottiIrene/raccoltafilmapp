import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

const routes:Routes=[
  {
    path:'',
    component:LoginComponent
  }
]

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  exports:[
    LoginComponent
  ]
})
export class AuthModule { }
