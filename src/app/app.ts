import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Plateau } from './plateau/plateau';
@Component({
  selector: 'app-root',
  imports: [Plateau],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('jeudegoAngel');
}