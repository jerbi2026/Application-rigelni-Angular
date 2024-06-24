import { Component } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email="";
  password="";
  

  constructor(private authService: AuthServiceService, private router:Router) { }

  signIn() {
    this.authService.signIn(this.email, this.password)
      .then(res => {
        console.log(res);
        this.router.navigate(['/user']);
      })
      .catch(err => {
        console.log(err);
      });
      
  }

  LoginWithGoogle(): void {
    this.authService.loginWithGoogle()
      .then(() => {
        this.router.navigate(['/user']);
      })
      .catch((error) => {
        // Gérer l'erreur de connexion avec Google
        console.error('Erreur lors de la connexion avec Google:', error);
      });
  }



}
