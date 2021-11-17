import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleempleadosComponent } from './detalleempleados.component';

describe('DetalleempleadosComponent', () => {
  let component: DetalleempleadosComponent;
  let fixture: ComponentFixture<DetalleempleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleempleadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleempleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
