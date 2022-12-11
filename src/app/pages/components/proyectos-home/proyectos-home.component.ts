import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../../services/portfolio.service';
import { Proyectos } from '../../../interfaces/proyectos';

@Component({
  selector: 'app-proyectos-home',
  templateUrl: './proyectos-home.component.html',
  styleUrls: ['./proyectos-home.component.scss']
})
export class ProyectosHomeComponent implements OnInit {

  proyectos!: Proyectos[]

  constructor( private portfolioService: PortfolioService ){}


  ngOnInit(): void {
      this.portfolioService.getProyectos().subscribe( resp => {
        const principal = resp.filter( item => item.principal === true )
        this.proyectos = principal;
      })
  }

}
