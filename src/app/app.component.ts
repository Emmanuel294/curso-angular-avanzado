import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck, OnInit{
  title = 'curso-angular-avanzado';
  emailContact: string;
  ngOnInit(){
    
  }
  ngDoCheck(){
    this.emailContact = localStorage.getItem('contactMail');
    // console.log('El doCheck se ha ejecutado');
}
}
