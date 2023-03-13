import { Component } from '@angular/core';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})

//We need to fetch these from the blockchain and these will be render to the front end


export class PatientComponent {
  //timeline data
  timelineData = [
    { date: 'Jan 2022', title: 'Diagnosis', description: 'Lorem ipsum dolor sit amet.' },
    { date: 'Feb 2022', title: 'Treatment', description: 'Lorem ipsum dolor sit amet.' },
    { date: 'Mar 2022', title: 'Recovery', description: 'Lorem ipsum dolor sit amet.' },
    { date: 'Jan 2022', title: 'Diagnosis', description: 'Lorem ipsum dolor sit amet.' },
    { date: 'Feb 2022', title: 'Treatment', description: 'Lorem ipsum dolor sit amet.' },
    { date: 'Mar 2022', title: 'Recovery', description: 'Lorem ipsum dolor sit amet.' },
    { date: 'Jan 2022', title: 'Diagnosis', description: 'Lorem ipsum dolor sit amet.' },
    { date: 'Feb 2022', title: 'Treatment', description: 'Lorem ipsum dolor sit amet.' },
    { date: 'Mar 2022', title: 'Recovery', description: 'Lorem ipsum dolor sit amet.' }
  ];

  //userprofile data
  //Get the address from the blockchain
  account_address = [
    'Account Address',
  ];

  //Display the top 3 recent approvals provided by the user.
  recent_approvals = [
    'Recent Address 1......',
    'Recent Address 2......',
    'Recent Address 3......',
    'Recent Address 4......',
    'Recent Address 5......', 
  ];

  addressToGrantOrRevoke: string = '';

  validateAddress(): boolean {
    const regex = /^0x[a-fA-F0-9]{40}$/;
    return regex.test(this.addressToGrantOrRevoke);
  }

  grantPermission() {
    if (this.validateAddress()) 
    {
      console.log('grannted for '+this.addressToGrantOrRevoke);
      alert('Permisson granted for the address Provide');
    } 
    else 
    {
      console.log('invalid address');
       alert('Invalid address');
    }
  }

  revokePermission() {
    if (this.validateAddress())
    {
      console.log('Revoked from '+this.addressToGrantOrRevoke);
      alert('Permisson revoked for the address Provide');
    } 
    else 
    {
      console.log('invalid address');
       alert('Invalid address');
    }
  }

}
