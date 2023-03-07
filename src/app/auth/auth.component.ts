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

  onDoctorFormSubmit()
  {

    //Printing the details of Doctors to the console to cross check
    console.log('Name:', this.doctorName);
    console.log('Reg.No:', this.doctorRegNo);
    console.log('Reg.Year:', this.doctorRegYear);
    console.log('SMC:', this.doctorSMC);

    //On clicking the submit button
    console.log('Doctor form submitted');
    // this.router.navigate(['/doctor']); //redirecting is not need cause we need to mint a NFT.
  }

  onPatientFormSubmit(){

    //Printing the Username for the patient to the console to cross check
    console.log('Name:', this.patientName);

    console.log('New Patient Minted!')
   // this.router.navigate(['/patient']); //redirecting is not need cause we need to mint a NFT
  }


//To change the from from user to doctor and vice versa
toggleForm() 
{
    this.showDoctorForm = !this.showDoctorForm;
    console.log("Toggled");
}

}



