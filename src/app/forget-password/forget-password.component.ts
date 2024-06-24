import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
  email="";
  message="";
  constructor(private afAuth: AngularFireAuth, private router:Router) { }
 
  resetPassword() {
    this.afAuth.sendPasswordResetEmail(this.email)
      .then(() => {
        this.message = "Un e-mail de réinitialisation de mot de passe a été envoyé à votre adresse e-mail.";
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        console.error(error);
        this.message = "Une erreur s'est produite lors de l'envoi de l'e-mail de réinitialisation de mot de passe. Veuillez réessayer plus tard.";
      });
  }

  go_back(){
    this.router.navigate(['/login']);
  }

}
