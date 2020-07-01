import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, MinLengthValidator, Validators } from '@angular/forms';
import { LoginService } from '../shared/services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  message: string=""

  constructor(private loginService: LoginService,private router:Router) { }
  registerForm = new FormGroup({
    UserName: new FormControl('',[Validators.required,Validators.email]),
    Password: new FormControl('',[Validators.required,Validators.minLength(6)]),
    PasswordAuthentication: new FormControl('',[Validators.required])
  });
  ngOnInit(): void {
  }
  onSubmit() {
    this.message="הבקשה נשלחת...";
    this.loginService.register(this.registerForm.controls.UserName.value,
      this.registerForm.controls.Password.value).subscribe(
        success=>{this.message="Register succes!"
    },
        error=>{console.log(error),this.message=error.error.message }
      )
  }
  goLogin(){
    this.router.navigate(['/login']);
  }
}