import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../../services/portfolio.service';
import { Skills } from '../cards/cards.component';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  skills!: Skills[]

  constructor( private portfolioService: PortfolioService ){}

  ngOnInit(): void {
    this.portfolioService.getSkills().subscribe(skills => {
      this.skills = skills
    })
  }
}
