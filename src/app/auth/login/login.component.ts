import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  userForm = new FormGroup({
    email: new FormControl(null,[Validators.required,Validators.email]),
    password: new FormControl(null,[Validators.required])
  })
  constructor(private authServicce: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.authServicce.SignIn(this.userForm.value)
        .then((res)=>this.router.navigate(['/clients'])).catch()
  }
}
