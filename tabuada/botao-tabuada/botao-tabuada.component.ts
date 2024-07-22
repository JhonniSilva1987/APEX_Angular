import { Component, ViewChild } from '@angular/core';
import { CampoTabuadaComponent } from '../campo-tabuada/campo-tabuada.component';
import { DivTabuadaComponent } from '../div-tabuada/div-tabuada.component';

@Component({
  selector: 'app-botao-tabuada',
  standalone: true,
  imports: [CampoTabuadaComponent, DivTabuadaComponent],
  templateUrl: './botao-tabuada.component.html',
  styleUrl: './botao-tabuada.component.css'
})

export class BotaoTabuadaComponent {
  // Usando o decorator ViewChild para que possa vincular com o elemento HTML
  @ViewChild(CampoTabuadaComponent) campoTabuada?: CampoTabuadaComponent;
  @ViewChild(DivTabuadaComponent) divTabuada?: DivTabuadaComponent

  // Utilizando o método ngAfterViewInit para verificar se os elementos já existem ou caso contrário serão instanciados
  ngAfterViewInit(): void{
    if (!this.campoTabuada)
      this.campoTabuada = new CampoTabuadaComponent
    if (!this.divTabuada)
      this.divTabuada = new DivTabuadaComponent
  }
  // Utilizando a variável apenas para ficar mais fácil a impressão na página web
  valor_tabuada : string = ''

  gera(): void{
    // Tratativas para que a aplicação rode de acordo com o esperado
    if (this.campoTabuada)
    {
      if (this.campoTabuada.campo.value.trim() != '')
      {
        this.valor_tabuada = ''
        for (let i = 1; i <= 10; i++)
          this.valor_tabuada += `${i} x ${this.campoTabuada.campo.value} = ${i * parseInt(this.campoTabuada.campo.value)}<br>`

        if (this.divTabuada)
          this.divTabuada.tabuada.innerHTML = `Tabuada de ${this.campoTabuada.campo.value} <br> ${this.valor_tabuada}`
        this.campoTabuada.campo.value = ''
        this.campoTabuada.campo.focus()
      }
      else
      {
        alert('Necessário informar o valor da tabuada!')
        this.campoTabuada.campo.focus()
      }
    }
  }
}
