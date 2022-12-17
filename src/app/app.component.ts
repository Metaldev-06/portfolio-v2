import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio-v2';

  ngOnInit() {
    let msg = `%cBienvenido a mi Portfolio Personal`

    let styles = [
      'padding: 2rem 5rem',
      'background: linear-gradient(to top right, #504DF9 0%, #E80397 61%);',
      'color: white',
      'display: block',
      'text-align: center',
      'font-weight: 900',
      'font-size: 2rem',

    ].join(';')
    console.log(msg, styles);

  }
  
}
