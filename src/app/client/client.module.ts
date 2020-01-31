import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientCreateComponent } from './client-create/client-create.component';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'
import { ResumePipe } from '../pipes/resume.pipe';

@NgModule({
  declarations: [ClientListComponent, ClientCreateComponent, ClientEditComponent, ResumePipe],
  imports: [
    CommonModule,
    AngularFireModule,
    AngularFirestoreModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports:[
    ClientListComponent
  ]
})
export class ClientModule { }
