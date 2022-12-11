import { NgModule } from '@angular/core';

import {TimelineModule} from 'primeng/timeline';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';


@NgModule({
  exports: [
    TimelineModule,
    CardModule,
    ButtonModule,

    
  ]
})
export class PrimeNGModule { }
