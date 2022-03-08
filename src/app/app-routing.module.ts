import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { SkillsComponent } from './skills/skills.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { ClientComponent } from './client/client.component';

const routes: Routes = [
  {
    path: 'competences',
    component: SkillsComponent
  },
  {
    path: 'clients',
    children: [
      {
        path: '',
        component: ClientsComponent
      },
      {
        path: 'nouveau',
        component: ClientFormComponent
      },
      {
        path: ':id',  
        component: ClientComponent
      },
      {
        path: ':id/edit',
        component: ClientFormComponent,
        data: {
          edit: true
        }
      }
    ]
  },
  {
    path: 'dashboard',
    canActivate: [AuthenticationGuard],
    component: DashboardComponent
  },
  {
    path: 'connexion',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
