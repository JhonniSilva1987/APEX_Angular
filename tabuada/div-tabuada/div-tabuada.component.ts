import { Component } from '@angular/core';

@Component({
  selector: 'app-div-tabuada',
  standalone: true,
  imports: [],
  templateUrl: './div-tabuada.component.html',
  styleUrl: './div-tabuada.component.css'
})
export class DivTabuadaComponent {
  // atribuindo um atributo para que possa se referenciar em botao-tabuada.component
  tabuada = <HTMLDivElement>document.getElementById('tabuada')
}
