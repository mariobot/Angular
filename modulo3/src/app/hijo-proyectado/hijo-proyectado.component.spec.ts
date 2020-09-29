import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoProyectadoComponent } from './hijo-proyectado.component';

describe('HijoProyectadoComponent', () => {
  let component: HijoProyectadoComponent;
  let fixture: ComponentFixture<HijoProyectadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijoProyectadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HijoProyectadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
