import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Proyectos } from 'src/app/interfaces/proyectos';
import { Repos } from 'src/app/interfaces/repos';
import { PortfolioService } from '../../services/portfolio.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss'],
})
export class ProyectosComponent implements OnInit {
  public testBrowser: boolean;
  repos!: Proyectos[];

  constructor(
    private portfolioService: PortfolioService,
    @Inject(PLATFORM_ID) platformId: string
  ) {
    this.testBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (this.testBrowser) {
      this.portfolioService.getProyectos().subscribe((resp) => {
        this.repos = resp;
      });
    }
  }
}
