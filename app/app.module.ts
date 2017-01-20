import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { IdolDetailComponent } from './idol-detail.component';
import { IdolsComponent} from './idols.component';
import { IdolService } from './idol.service';
import { DashboardComponent } from './dashboard.component';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    IdolDetailComponent,
    IdolsComponent,
    DashboardComponent
  ],
  providers: [
    IdolService
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
