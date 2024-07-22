import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivTabuadaComponent } from './div-tabuada.component';

describe('DivTabuadaComponent', () => {
  let component: DivTabuadaComponent;
  let fixture: ComponentFixture<DivTabuadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivTabuadaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivTabuadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
