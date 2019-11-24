import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck{
  title = 'curso-angular-avanzado';
  ngDoCheck(){
    console.log('El doCheck se ha ejecutado');
}
}
