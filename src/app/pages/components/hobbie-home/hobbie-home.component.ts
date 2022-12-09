import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../../services/portfolio.service';
import { Hobbies } from '../cards/cards.component';

@Component({
  selector: 'app-hobbie-home',
  templateUrl: './hobbie-home.component.html',
  styleUrls: ['./hobbie-home.component.scss']
})
export class HobbieHomeComponent implements OnInit {

  hobbies!: Hobbies[]

  constructor( private portfolioService: PortfolioService){}

  ngOnInit(): void {
      this.portfolioService.getHobbies().subscribe( resp => {
        this.hobbies = resp;
      })
  }

}
