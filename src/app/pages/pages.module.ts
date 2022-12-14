import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { FormacionComponent } from './formacion/formacion.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { HeroComponent } from './components/hero/hero.component';
import { CardsComponent } from './components/cards/cards.component';
import { SkillComponent } from './components/skill/skill.component';
import { PrimeNGModule } from './prime-ng/prime-ng.module';
import { HobbieHomeComponent } from './components/hobbie-home/hobbie-home.component';
import { ProyectosHomeComponent } from './components/proyectos-home/proyectos-home.component';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    SkillsComponent,
    HobbiesComponent,
    FormacionComponent,
    ProyectosComponent,
    SobreMiComponent,
    HeroComponent,
    CardsComponent,
    SkillComponent,
    HobbieHomeComponent,
    ProyectosHomeComponent,
    FormComponent

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    PrimeNGModule,
    ReactiveFormsModule
    
    
  ],
})
export class PagesModule { }
