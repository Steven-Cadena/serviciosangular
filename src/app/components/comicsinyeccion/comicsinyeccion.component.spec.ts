import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicsinyeccionComponent } from './comicsinyeccion.component';

describe('ComicsinyeccionComponent', () => {
  let component: ComicsinyeccionComponent;
  let fixture: ComponentFixture<ComicsinyeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComicsinyeccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicsinyeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
