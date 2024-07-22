import { Component } from '@angular/core';

@Component({
  selector: 'app-campo-tabuada',
  standalone: true,
  imports: [],
  templateUrl: './campo-tabuada.component.html',
  styleUrl: './campo-tabuada.component.css'
})
export class CampoTabuadaComponent {
  // atribuindo um atributo para que possa se referenciar em botao-tabuada.component
  campo = <HTMLInputElement>document.getElementById('txtTabuada');

}
