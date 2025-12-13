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
  // Grille 9x9 interactive
  board9 = Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => ''));

  // Grille 8x8 visuelle seulement
  board8 = Array.from({ length: 8 }, () => Array.from({ length: 8 }, () => ''));

  currentPlayer: 'black' | 'white' = 'black';
  scorePlayer1: number = 0; // pion blanc
  scorePlayer2: number = 0; // pion noir

  // Pour gérer les passes consécutifs
  lastActionWasPass: boolean = false;
  gameOver: boolean = false;

  // Mode sombre
  isDarkMode: boolean = false;

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    const appContainer = document.getElementById('app-container');
    if (appContainer) {
      appContainer.classList.toggle('dark-mode', this.isDarkMode);
    }
  }

  // Clic gauche : poser un pion sur la grille 9x9
  onCellClick(row: number, col: number): void {
    if (this.gameOver) return;

    if (this.board9[row][col] === '') {
      this.board9[row][col] = this.currentPlayer;
      // Changement de joueur
      this.togglePlayer();
      this.lastActionWasPass = false;
    }
  }

  // Clic droit : enlever une pierre adverse et augmenter son score
  onRightClick(event: MouseEvent, row: number, col: number): void {
    event.preventDefault();
    if (this.gameOver) return;

    const pion = this.board9[row][col];
    if (pion !== '') {
      this.board9[row][col] = '';

      // Le joueur adverse gagne un point en retirant une pierre
      if (pion === 'white') {
        this.scorePlayer2++; // Le joueur noir gagne un point
      } else if (pion === 'black') {
        this.scorePlayer1++; // Le joueur blanc gagne un point
      }
    }
  }

  getCellClass(row: number, col: number): string {
    const cell = this.board9[row][col];
    if (cell === 'black') return 'stone-black';
    if (cell === 'white') return 'stone-white';
    return '';
  }

  // Réinitialise les deux grilles et les scores
  nouvellepartie(): void {
    this.board9 = Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => ''));
    this.board8 = Array.from({ length: 8 }, () => Array.from({ length: 8 }, () => ''));
    this.currentPlayer = 'black';
    this.scorePlayer1 = 0;
    this.scorePlayer2 = 0;
    this.lastActionWasPass = false;
    this.gameOver = false;
  }

  // Fin de tour : changement de joueur
  finDeTour(): void {
    if (this.gameOver) return;
    this.togglePlayer();
    this.lastActionWasPass = false;
  }

  // Passer : si deux passes, la partie est terminée
  passer(): void {
    if (this.gameOver) return;

    if (this.lastActionWasPass) {
      this.gameOver = true;
      alert('La partie est terminée');
    } else {
      this.lastActionWasPass = true;
      this.togglePlayer();
    }
  }

  // Changement de joueur
  private togglePlayer(): void {
    this.currentPlayer = this.currentPlayer === 'black' ? 'white' : 'black';
  }
}
