import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroVerificacion } from './registro-verificacion';

describe('RegistroVerificacion', () => {
  let component: RegistroVerificacion;
  let fixture: ComponentFixture<RegistroVerificacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroVerificacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroVerificacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
