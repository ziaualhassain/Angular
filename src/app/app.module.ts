import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar'; //added for the custom scrollbar
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'doctor', component: DoctorComponent },
  { path: 'patient', component: PatientComponent }
];

@NgModule({
  declarations: [AppComponent, HomeComponent, AuthComponent, DoctorComponent, PatientComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatIconModule, MatSlideToggleModule, FormsModule, RouterModule.forRoot(routes),PerfectScrollbarModule],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
