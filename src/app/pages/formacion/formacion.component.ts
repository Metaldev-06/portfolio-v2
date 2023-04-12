import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { PrimeIcons } from 'primeng/api';
import { PortfolioService } from '../../services/portfolio.service';
import { isPlatformBrowser } from '@angular/common';

export interface Formacion {
  status: string;
  date: string;
  icon: string;
  color: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.scss'],
})
export class FormacionComponent implements OnInit {
  public testBrowser: boolean;
  events1!: Formacion[];

  constructor(
    private portfolioService: PortfolioService,
    @Inject(PLATFORM_ID) platformId: string
  ) {
    this.testBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (this.testBrowser) {
      this.portfolioService.getFormacion().subscribe((formacion) => {
        this.events1 = formacion;
      });
    }
  }
}
