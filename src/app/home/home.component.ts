import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <div class="hero min-h-screen">
      <div class="hero-content text-center">
        <div class="max-w-md ">
          <h1 class="text-5xl font-bold">Shopping List 🛒 </h1>
          <p class="py-6">La Tua Lista della Spesa Smart! Pianifica, Organizza, Risparmia! 
            Benvenuto nella tua nuova compagna di shopping: la Shopping List Smart! 
            Dimentica i vecchi foglietti volanti e le note sul telefono disordinate. 
            Con la nostra app, fare la spesa diventa un'esperienza semplice, efficiente e piacevole.</p>
        </div>
      </div>
    </div>
  `,
  styles: ``
})
export class HomeComponent {

}
