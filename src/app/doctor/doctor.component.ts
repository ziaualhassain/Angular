import { Component, OnInit } from '@angular/core';

interface Doctor {
  name: string;
  address: string;
  approved: boolean;
}

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})

export class DoctorComponent implements OnInit {

  // list of doctors
  doctors: Doctor[] = [
    { name: 'Doctor 1', address: '0x1234567890abcdef', approved: false },
    { name: 'Doctor 2', address: '0xabcdef1234567890', approved: false },
    { name: 'Doctor 3', address: '0x9876543210fedcba', approved: false },
    { name: 'Doctor 4', address: '0x9876543210fedcba', approved: false }
  ];

  account_address = [
    'Account Address',
  ];
  
  // selected doctor
  selectedDoctor: Doctor | null = null;

  // form data
  formData = {
    name: '',
    address: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  // approve or deny doctor
  approveOrDenyDoctor(doctor: Doctor, approved: boolean) {
    doctor.approved = approved;
    console.log(approved);
  // update the doctor's approval status in the database
  }

  // select doctor
  selectDoctor(doctor: Doctor) {
    this.selectedDoctor = doctor;
  }

  // clear selected doctor
  clearSelectedDoctor() {
    this.selectedDoctor = null;
  }

  patientAddress: string = '';

  validateAddress(): boolean {
    const regex = /^0x[a-fA-F0-9]{40}$/;
    return regex.test(this.patientAddress);
  }

  writePermission() {
    if (this.validateAddress()) 
    {
      console.log('requested for write '+this.patientAddress);
      alert('Write permission requested');
    } 
    else 
    {
      console.log('invalid address');
       alert('Invalid address');
    }
  }

  readPermission() {
    if (this.validateAddress()) 
    {
      console.log('requested for read '+this.patientAddress);
      alert('Read permission requested');
    } 
    else 
    {
      console.log('invalid address');
       alert('Invalid address');
    }
  }
  
  files: File[] = []; //To store the files uploaded by the doctors

  patientUpdateInfo: string = ''; //To store the details entered by the doctor as a string


  onFileSelected(event: any) {   // The onFileSelected() method is called when the user selects one or more files
    const selectedFiles = <FileList>event.target.files;
    for (let i = 0; i < selectedFiles.length; i++) 
    {
        this.files.push(selectedFiles[i]);
    }
 }

  //use the above data patient upadte info (or) files and push them to ipfs
  updatePatientData(){
    alert('data has been added to patient timeline');
    console.log(this.patientUpdateInfo);
    console.log('Files:', this.files);
  }
}
