import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-plateau',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plateau.html',
  styleUrls: ['./plateau.css'],
})
export class Plateau {
  board9 = Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => ''));
  board8 = Array.from({ length: 8 }, () => Array.from({ length: 8 }, () => ''));
  currentPlayer: 'black' | 'white' = 'black';

}
