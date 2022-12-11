import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/interfaces/proyectos';
import { Repos } from 'src/app/interfaces/repos';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit{

  repos!: Proyectos[]

  constructor( private portfolioService: PortfolioService ) {}


  ngOnInit(): void {
      this.portfolioService.getProyectos().subscribe( resp => {
        this.repos = resp
      })
  }
}
