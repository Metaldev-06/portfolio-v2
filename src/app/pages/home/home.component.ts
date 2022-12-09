import { Component } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  

  constructor( private portfolioService: PortfolioService ) {}

  // translate() {
  //   this.portfolioService.translate().subscribe( resp => console.log(resp));
  // }
}
