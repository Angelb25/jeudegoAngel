import { Component } from '@angular/core';

@Component({
  selector: 'app-plateau',
  imports: [],
  templateUrl: './plateau.html',
  styleUrl: './plateau.css',
})
export class Plateau {
  onCellClick(row: number, col: number): void {
    console.log(`Coup joué à : ligne ${row}, colonne ${col}`);
  }
}
