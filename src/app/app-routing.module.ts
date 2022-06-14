import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './link/envio/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  // {
  //   path: 'link',
  //   component: AlunosComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
