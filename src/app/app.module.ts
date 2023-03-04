import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@NgModule({
  declarations: [AppComponent, HomeComponent, AuthComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatIconModule, MatSlideToggleModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
