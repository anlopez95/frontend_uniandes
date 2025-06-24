import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegistroVerificacionComponent } from './registro-verificacion/registro-verificacion';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RegistroVerificacionComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'registro-verificacion-angular';
}
