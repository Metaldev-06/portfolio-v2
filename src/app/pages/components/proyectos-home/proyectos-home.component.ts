import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { PortfolioService } from '../../../services/portfolio.service';
import { Proyectos } from '../../../interfaces/proyectos';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-proyectos-home',
  templateUrl: './proyectos-home.component.html',
  styleUrls: ['./proyectos-home.component.scss'],
})
export class ProyectosHomeComponent implements OnInit {
  public testBrowser!: boolean;
  proyectos!: Proyectos[];

  constructor(
    private portfolioService: PortfolioService,
    @Inject(PLATFORM_ID) platformId: string
  ) {
    this.testBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (this.testBrowser) {
      this.portfolioService.getProyectos().subscribe((resp) => {
        const principal = resp.filter((item) => item.principal === true);
        this.proyectos = principal;
      });
    }
  }
}
