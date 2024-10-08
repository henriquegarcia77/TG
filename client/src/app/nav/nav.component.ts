import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NgIf],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  isMenuToggled = false;

  toggleMenu() {
    console.log(this.isMenuToggled)
    this.isMenuToggled = !this.isMenuToggled;
  }

}
