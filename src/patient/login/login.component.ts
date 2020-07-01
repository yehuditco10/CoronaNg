import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, MinLengthValidator } from '@angular/forms';
import { LoginService } from '../shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string=""

  constructor(private loginService: LoginService) { }
  loginForm = new FormGroup({
    UserName: new FormControl(''),
    Password: new FormControl('')
  });
  ngOnInit(): void {
  }
  onSubmit() {
    this.message="הבקשה נשלחת...";
    this.loginService.login(this.loginForm.controls.UserName.value,
      this.loginForm.controls.Password.value).subscribe(
        success=>{this.message="!זיהוי הצליח",
      sessionStorage.setItem("currentPatient",success.id)
    },
        error=>{console.log(error),this.message=error.error.message }
      )
  }
}
