import { Component } from '@angular/core';
import { BotaoTabuadaComponent } from './botao-tabuada/botao-tabuada.component';
import { CampoTabuadaComponent } from './campo-tabuada/campo-tabuada.component';
import { DivTabuadaComponent } from './div-tabuada/div-tabuada.component';

@Component({
  selector: 'app-tabuada',
  standalone: true,
  imports: [BotaoTabuadaComponent, CampoTabuadaComponent, DivTabuadaComponent],
  templateUrl: './tabuada.component.html',
  styleUrl: './tabuada.component.css'
})
export class TabuadaComponent {
  gera() : void{
    var campo = <HTMLInputElement>document.getElementById('txtTabuada')
    alert(campo.value);
  }
}
