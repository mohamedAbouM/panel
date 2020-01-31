import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userForm = new FormGroup({
    email: new FormControl(null,[Validators.required,Validators.email]),
    password: new FormControl(null,[Validators.required])
  })
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  createAccount(){
    this.authService.register(this.userForm.value)
    .then(res=> console.log(res))
    .catch(err=> console.error(err))
  }
}
