import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AlunosComponent } from './alunos/alunos.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'link',
    component: AlunosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
