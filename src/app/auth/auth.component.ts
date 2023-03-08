//This file contains the variables which stores the values entered in the form
//Both users and the doctors

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})


export class AuthComponent implements OnInit {

  showDoctorForm = true;

  //Doctor Form Files
  doctorName: string = '';
  doctorRegNo: string = '';
  doctorRegYear: string = '';
  doctorSMC: string = '';


  //Patient Form Fields
  patientName: string = '';
    ngOnInit(): void {
  }
  //fields to console log in the browser
  //Upadate the ng

  constructor(private router: Router) {}

//DOCTOR FORM SUBMISSION LOGIC
  onDoctorFormSubmit()
  {

    //To verify if all of the fields are entered or not? cause the fields are needed to verify the doctor background
    if (!this.doctorName || !this.doctorRegNo || !this.doctorRegYear || !this.doctorSMC)
    {
      alert('All fields are mandatory');
      return;
    }

    
    console.log('Name:', this.doctorName); //Printing the details of Doctors to the console to cross check
    console.log('Reg.No:', this.doctorRegNo);
    console.log('Reg.Year:', this.doctorRegYear);
    console.log('SMC:', this.doctorSMC);

   
    //On clicking the submit button
    alert('Minting successful! Wait for verification'); // to display the alert minting is successful
    console.log('Doctor form submitted'); //to display it in console
    this.router.navigate(['/doctor']); //redirecting is not need cause we need to mint a NFT.
  }


//PATIENT FORM SUBMISSION LOGIC
  onPatientFormSubmit()
  {
      //Mandatory to enter the username
      if (!this.patientName) 
      {
        alert('All fields are mandatory');
        return;
      }

    
    console.log('Name:', this.patientName); //Printing the Username for the patient to the console to cross check
    alert('Minting successful!'); //to display an alrert
    console.log('New Patient Minted!')
    this.router.navigate(['/patient']); //redirecting is not need cause we need to mint a NFT
  }


//To change the from from user to doctor and vice versa
toggleForm() 
{
    this.showDoctorForm = !this.showDoctorForm;
    console.log("Toggled");
}

}



