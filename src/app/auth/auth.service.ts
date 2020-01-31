import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  register(user: User){
  return this.afAuth.auth.createUserWithEmailAndPassword(user.email,user.password);
  }

  SignIn(user: User){
    return this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password);
  }

  userAuthenticated(){
    return this.afAuth.user;
  }

  logout(){
    return this.afAuth.auth.signOut();
  }
}
