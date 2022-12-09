import { Component, Input } from '@angular/core';


export interface Skills {
  img:         string;
  title:       string;
  description: string;
  category:   string;
}

export interface Hobbies {
  img         : string;
  title       : string;
  description : string;
}

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})


export class CardsComponent {

  @Input() item!: Skills
  @Input() hobbies!: Hobbies

  imagen() {
    if (this.item) {
      return this.item.img
    } else if (this.hobbies) {
      return this.hobbies.img
    }
    return
  }
  title() {
    if (this.item) {
      return this.item.title
    } else if (this.hobbies) {
      return this.hobbies.title
    }
    return
  }
  description() {
    if (this.item) {
      return this.item.description
    } else if (this.hobbies) {
      return this.hobbies.description
    }
    return
  }

}
