import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { FormacionComponent } from './formacion/formacion.component';
import { ProyectosComponent } from './proyectos/proyectos.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'skills', component: SkillsComponent},
      {path: 'hobbies', component: HobbiesComponent},
      {path: 'formacion', component: FormacionComponent},
      {path: 'proyectos', component: ProyectosComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
