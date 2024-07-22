import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoTabuadaComponent } from './botao-tabuada.component';

describe('BotaoTabuadaComponent', () => {
  let component: BotaoTabuadaComponent;
  let fixture: ComponentFixture<BotaoTabuadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotaoTabuadaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoTabuadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
