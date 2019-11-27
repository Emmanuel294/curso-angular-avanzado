import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit{
  title = 'CONTACT COMPONENT';
  emailContact: string;
  ngOnInit(){
      console.log('contact.component loaded');
  }

  saveEmail(){
    localStorage.setItem('contactMail',this.emailContact);
    
  }
}