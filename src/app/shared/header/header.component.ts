import { Component, HostListener } from '@angular/core';

interface MenuItem {
  label: string,
  rute: string
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  headerFixed!: Boolean;

  templateMenu: MenuItem[] = [
    {
      label: "Home",
      rute: "/"
    },
    {
      label: "Skills",
      rute: "./skills"
    },
    {
      label: "Formación",
      rute: "./formacion"
    },
    {
      label: "Proyectos",
      rute: "./proyectos"
    },
  ];


  @HostListener('window:scroll',['$event']) activeHeader() {

    if (window.scrollY >= 300) {
      this.headerFixed = true
    } else {
      this.headerFixed = false
    }
    console.log(window.scrollY);
  }

}
