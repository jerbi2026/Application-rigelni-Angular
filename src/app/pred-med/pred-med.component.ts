import { Component } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pred-med',
  templateUrl: './pred-med.component.html',
  styleUrls: ['./pred-med.component.css']
})
export class PredMedComponent {
  constructor(private auth : AuthServiceService, private router : Router){}
  result="";
   createNewDataFromCheckboxes() {
    const newData = [];
    for (let i = 1; i <= 33; i++) {
      const checkbox = document.getElementById(`checkbox${i}`) as HTMLInputElement;
      
     
      if (checkbox) {
        newData.push(checkbox.checked ? 1 : 0);
      }
    }
   
  
    return [newData]; 
  }

  predict(){
    const data = this.createNewDataFromCheckboxes();
    const requestData = { "newdata": data };
    console.log(requestData);
    this.auth.predict(requestData).subscribe(
      (response:any)=>{
        
        this.result=response.prediction[0];
        let form = document.getElementById('form');
        let result = document.getElementById('result');
        if (form && result) {
          form.style.display = 'none';
          result.style.display = 'block';
        }
        
      }
    )
    
  }

  go_home(){
    this.router.navigate(['/user']);
  }

}
