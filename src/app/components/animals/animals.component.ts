import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'animals',
  templateUrl: './animals.component.html'
})
export class AnimalsComponent implements OnInit{
  title = 'ANIMALS COMPONENT';
  
  ngOnInit(){
      console.log('animals.component loaded');
  }
}