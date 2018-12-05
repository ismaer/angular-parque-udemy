import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parques',
  templateUrl: './parques.component.html',
  styleUrls: ['./parques.component.sass']
})
export class ParquesComponent implements OnInit {

	//para acceder a la propiedad nombre usamos <app-parques>[nombre]</app-parques>
	
	@Input() nombre: string;
	//para acceder a la propiedad metros(desde otro componente ) usamos <app-parques [metros_re]></app-parques>
	@Input('metros_re') metros: number;
	public vegetacion: string;
	public abierto: boolean;

	@Output() pasameLosDatos = new EventEmitter();

  constructor() {

  	this.nombre = 'Parque Natural para los caballos';
	this.metros = 450;
	this.vegetacion = 'Alta';
	this.abierto = true;

   }

   emitirEvento(){
   	 this.pasameLosDatos.emit({
   	 	'nombre' : this.nombre,
		'metros' : this.metros,
		'vegetacion' : this.vegetacion,
		'abierto' : this.abierto

   	 });
   }

  ngOnInit() {
  }
}
