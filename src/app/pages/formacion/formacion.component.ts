import { Component, OnInit } from '@angular/core';
import {PrimeIcons} from 'primeng/api';
import { PortfolioService } from '../../services/portfolio.service';

export interface Formacion {
  status: string;
  date:   string;
  icon:   string;
  color:  string;
  image:  string;
  description:  string;
}


@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.scss']
})
export class FormacionComponent implements OnInit {
  events1!: Formacion[];
  

  constructor( private portfolioService: PortfolioService ) {}

  ngOnInit() {
    this.portfolioService.getFormacion().subscribe(formacion => {
      this.events1 = formacion
    })


  }
}
