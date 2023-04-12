import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { PortfolioService } from '../../../services/portfolio.service';
import { Skills } from '../cards/cards.component';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
})
export class SkillComponent implements OnInit {
  public testBrowser: boolean;
  skills!: Skills[];
  constructor(
    private portfolioService: PortfolioService,
    @Inject(PLATFORM_ID) platformId: string
  ) {
    this.testBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (this.testBrowser) {
      this.portfolioService.getSkills().subscribe((skills) => {
        const item = skills.filter((item) => item.principal === true);
        this.skills = item;
      });
    }
  }
}
