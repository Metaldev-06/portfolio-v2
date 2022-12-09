import { Component } from '@angular/core';

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

}
