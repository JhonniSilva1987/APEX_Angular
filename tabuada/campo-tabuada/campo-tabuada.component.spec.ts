import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoTabuadaComponent } from './campo-tabuada.component';

describe('CampoTabuadaComponent', () => {
  let component: CampoTabuadaComponent;
  let fixture: ComponentFixture<CampoTabuadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampoTabuadaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampoTabuadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
