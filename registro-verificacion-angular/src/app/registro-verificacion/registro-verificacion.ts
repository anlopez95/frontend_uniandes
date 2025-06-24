import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-registro-verificacion',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './registro-verificacion.html'
})
export class RegistroVerificacionComponent {
  protected registroForm!: FormGroup;
  protected mensaje: string | null = null;
  protected error: string | null = null;
  protected pagos: any = null;
  protected errorConsulta: string | null = null;
  protected errorRegistro: string | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.registroForm = this.fb.group({
      pidm: ['', Validators.required],
      term_code_entry: ['', Validators.required],
      program_1: ['', Validators.required],
      admr_code: ['', Validators.required],
      recieve_date: ['', Validators.required],
      comment: ['']
    });
  }

  protected consultarPagos(): void {
    this.mensaje = null;
    this.error = null;
    this.pagos = null;

    const term = this.registroForm.value.term_code_entry;
    const program = this.registroForm.value.program_1;

    if (!term || !program) {
      this.errorConsulta  = 'Debe ingresar Periodo y Programa para consultar pagos.';
      return;
    }

    const url = `/operaciones-verificacion/consulta-pagos?term_code=${term}&program=${program}`;
    console.log('Consultando pagos en:', url);
    this.http.get<any>(url).subscribe({
      next: (res) =>
        this.pagos = res,
      error: (err) =>
        this.errorConsulta  = err?.error?.mensaje || 'Error al consultar pagos.'
    });
  }

  protected onSubmit(): void {
    this.mensaje = null;
    this.error = null;

    if (this.registroForm.invalid) {
      this.errorRegistro  = 'Debe completar todos los campos requeridos.';
      return;
    }

    const formValue = this.registroForm.value;

    const payload = {
      pidm: formValue.pidm,
      term_code: formValue.term_code_entry,
      appl_no: formValue.program_1,
      amr_code: formValue.admr_code,
      receive_date: formValue.recieve_date,
      comment: formValue.comment
    };

    this.http.post<any>(
      '/operaciones-verificacion/registro-verificacion',
      payload
    ).subscribe({
      next: (res) => this.mensaje = res?.message || 'Registro exitoso',
      error: (err) => this.errorRegistro  = err?.error?.message || 'Error en el proceso'
    });
  }
}
