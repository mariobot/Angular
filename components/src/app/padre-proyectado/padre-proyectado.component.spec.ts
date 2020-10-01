import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreProyectadoComponent } from './padre-proyectado.component';

describe('PadreProyectadoComponent', () => {
  let component: PadreProyectadoComponent;
  let fixture: ComponentFixture<PadreProyectadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadreProyectadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PadreProyectadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
