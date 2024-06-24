import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Auth, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  

  constructor(private afAuth: AngularFireAuth, private http:HttpClient) { }

  signUp(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  signIn(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  signOut() {
    return this.afAuth.signOut();
  }

  async loginWithGoogle(): Promise<void> {
    try {
      const auth: Auth = getAuth(); 
      const provider = new GoogleAuthProvider(); 

      const result = await signInWithPopup(auth, provider); 

     
      console.log('Connexion réussie avec Google:', result.user);
    } catch (error) {
      console.error('Erreur lors de la connexion avec Google:', error);
      throw error; 
    }
  }

  async signUpWithGoogle(): Promise<void> {
    try {
      const auth: Auth = getAuth();
      const provider = new GoogleAuthProvider();

      const result = await signInWithPopup(auth, provider);

      console.log('Inscription réussie avec Google:', result.user);
    } catch (error) {
      console.error('Erreur lors de l\'inscription avec Google:', error);
      throw error; // Propage l'erreur pour la gérer à un niveau supérieur si nécessaire
    }
  }


  predict(data: object): Observable<object> {
    return this.http.post<object>("http://localhost:5000/predict", data);
  }

  private apiUrl = 'https://medlineplus.gov/api/search';
 searchDisease(query: string): Observable<any> {
  const url = `${this.apiUrl}?max=1&format=json&q=${encodeURIComponent(query)}`;
  return this.http.get(url);
}
}
