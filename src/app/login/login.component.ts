import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService ) { }

  ngOnInit() {
  }


  login(){
    // username and password send kerna hai 
    this.authService.login('','pass').subscribe(()=>{
    });
  }

  redirectToRegister(){
    this.router.navigate(['/register'])
  }
}
