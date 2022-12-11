import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {

  verCV() {
    window.open("/assets/file/CV-Diaz-Fernando.pdf")
  }

  descargarCV() {
    
  }

}
