import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  constructor(private FB:FormBuilder , private _AuthService:AuthService ){}

  loginForm! : FormGroup;

  ngOnInit(): void {
    this.initLoginForm()
  }

  initLoginForm():void
  {
    this.loginForm = this.FB.group({
      
      userName: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(10)]],
    });
  }

  submitLoginForm():void 
  {
    // debugger
    console.log(this.loginForm);
    if(this.loginForm.valid)
      {
        this.callLoginApi()
      }
  }

  callLoginApi():void
  {
    this._AuthService.login(this.loginForm.value).subscribe({
      next: res=> {
        // debugger
        console.log(res);
        
      }
    })
  }
}
