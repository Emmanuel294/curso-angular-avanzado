import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'keepers',
  templateUrl: './keepers.component.html'
})
export class KeepersComponent implements OnInit{
  title = 'KEEPERS COMPONENT';
  
  ngOnInit(){
      console.log('keepers.component loaded');
  }
}