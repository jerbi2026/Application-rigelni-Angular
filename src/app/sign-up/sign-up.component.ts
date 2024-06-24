import { Component } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  email="";
  password="";
  rep_password="";

  constructor(private authService: AuthServiceService,private router: Router) { }

  signUp() {
    if(this.rep_password==this.password && this.password.length>6){
      this.authService.signUp(this.email, this.password)
      .then(res => {
        console.log(res);
        this.router.navigate(['/user']);
      })
      .catch(err => {
        console.log(err);
      });

    }
    
  }

  Sign_upWithGoogle(){
    this.authService.signUpWithGoogle()
      .then(() => {
        this.router.navigate(['/user']);
      })
      .catch((error) => {
        // Gérer l'erreur de connexion avec Google
        console.error('Erreur lors de la connexion avec Google:', error);
      });
  }

}
