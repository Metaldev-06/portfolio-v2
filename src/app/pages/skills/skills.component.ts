import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { Skills } from '../components/cards/cards.component';
import { Github } from '../../interfaces/github';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  public testBrowser: boolean;
  skillsFront!: Skills[];
  skillsBack!: Skills[];
  skillsDatabase!: Skills[];
  skillLibreria!: Skills[];

  perfilGit!: Github;

  constructor(
    private portfolioService: PortfolioService,
    @Inject(PLATFORM_ID) platformId: string
  ) {
    this.testBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (this.testBrowser) {
      this.portfolioService.getSkills().subscribe((resp) => {
        const front = resp.filter((front) => front.category === 'front');
        const back = resp.filter((front) => front.category === 'back');
        const database = resp.filter((front) => front.category === 'database');
        const libreria = resp.filter((front) => front.category === 'libreria');

        this.skillsFront = front;
        this.skillsBack = back;
        this.skillsDatabase = database;
        this.skillLibreria = libreria;
      });

      this.portfolioService.getGithubPage().subscribe((resp) => {
        this.perfilGit = resp;
      });
    }
  }
}
