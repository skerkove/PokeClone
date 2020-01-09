import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TitleComponent } from './title/title.component';
import { MapComponent } from './map/map.component';
import { BattleComponent } from './battle/battle.component';
import { ListComponent } from './list/list.component';



const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/title' },
  {path: 'title', component: TitleComponent},
  {path: 'map', component: MapComponent},
  {path: 'battle', component: BattleComponent},
  {path: 'list', component: ListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
