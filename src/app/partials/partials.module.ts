import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  declarations: [PageNotFoundComponent, NavbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    AngularFireModule,
    AngularFireAuthModule
  ],
  exports : [
    NavbarComponent
  ]
})
export class PartialsModule { }
