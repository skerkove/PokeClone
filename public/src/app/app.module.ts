import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { HttpService } from './http.service';
import { TitleComponent } from './title/title.component';
import { MapComponent } from './map/map.component';
import { BattleComponent } from './battle/battle.component';
import { AttacksComponent } from './attacks/attacks.component';
import { ToppyModule } from 'toppy';
import { NewComponent } from './new/new.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    MapComponent,
    BattleComponent,
    AttacksComponent,
    NewComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToppyModule
  ],
  entryComponents:[
    AttacksComponent
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
