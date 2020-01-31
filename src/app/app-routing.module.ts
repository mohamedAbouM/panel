import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientListComponent } from './client/client-list/client-list.component';
import { ClientCreateComponent } from './client/client-create/client-create.component';
import { PageNotFoundComponent } from './partials/page-not-found/page-not-found.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ClientEditComponent } from './client/client-edit/client-edit.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [

  {path: '', redirectTo : '/clients', pathMatch: 'full',canActivate :[AuthGuard]},
  {
    path: 'clients',
    children: [      
      {path: '', component: ClientListComponent},
      {path: 'create', component: ClientCreateComponent},
      {path: ':id/edit', component: ClientEditComponent},
    ],canActivate :[AuthGuard]
  },
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: PageNotFoundComponent},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
