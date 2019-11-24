import { Component, Input, Output, EventEmitter , OnChanges, SimpleChanges, OnInit, DoCheck, OnDestroy} from '@angular/core';


@Component({
    selector: 'parques',
    templateUrl: './parques.component.html',
    
})
export class ParquesComponent implements OnChanges,OnInit, OnDestroy{
   @Input() titulo: string;
   @Input('metrosCuadrados') metros: number;
   public vegetacion: string;
   public abierto: boolean;

   @Output() pasarDatos = new EventEmitter();

   constructor(){
       this.titulo = 'Parque natural para caballos';
       this.metros = 450;
       this.vegetacion = 'Alta';
       this.abierto = false;
   }

   ngOnChanges(changes: SimpleChanges){
    //    console.log(changes);
        console.log("Cambios en la aplicación");
   }
   ngOnInit(){
       console.log("Método onInit Lanzado");
   }
   ngOnDestroy(){
       console.log("OnDestroy ejecutado");
   }
   
   emitirEvento(){
       this.pasarDatos.emit({
       'nombre': this.titulo,
        'metros': this.metros,
        'vegetacion': this.vegetacion,
        'abierto':this.abierto
       });
   }
}