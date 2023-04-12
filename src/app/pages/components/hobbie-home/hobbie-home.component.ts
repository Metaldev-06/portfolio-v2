import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { PortfolioService } from '../../../services/portfolio.service';
import { Hobbies } from '../cards/cards.component';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-hobbie-home',
  templateUrl: './hobbie-home.component.html',
  styleUrls: ['./hobbie-home.component.scss'],
})
export class HobbieHomeComponent implements OnInit {
  public testBrowser: boolean;
  hobbies!: Hobbies[];

  constructor(
    private portfolioService: PortfolioService,
    @Inject(PLATFORM_ID) platformId: string
  ) {
    this.testBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (this.testBrowser) {
      this.portfolioService.getHobbies().subscribe((resp) => {
        this.hobbies = resp;
      });
    }
  }
}
