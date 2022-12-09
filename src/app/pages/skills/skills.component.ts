import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { Skills } from '../components/cards/cards.component';
import { Github } from '../../interfaces/github';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit{

  skillsFront!: Skills[]
  skillsBack!: Skills[]
  skillsDatabase!: Skills[]

  perfilGit!: Github

  constructor( private portfolioService: PortfolioService ){}

  ngOnInit(): void {
      this.portfolioService.getSkills().subscribe( resp => {
        const front = resp.filter( front => front.category === "front" );
        const back = resp.filter( front => front.category === "back" );
        const database = resp.filter( front => front.category === "database" );

        this.skillsFront = front
        this.skillsBack = back
        this.skillsDatabase = database
      })

      this.portfolioService.getGithubPage().subscribe( resp => {

        this.perfilGit = resp
      } )
  }
}
