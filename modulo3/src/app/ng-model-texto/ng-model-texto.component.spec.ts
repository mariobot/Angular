import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgModelTextoComponent } from './ng-model-texto.component';

describe('NgModelTextoComponent', () => {
  let component: NgModelTextoComponent;
  let fixture: ComponentFixture<NgModelTextoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgModelTextoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgModelTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
