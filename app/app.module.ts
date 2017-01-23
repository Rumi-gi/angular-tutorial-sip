import './rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { IdolDetailComponent } from './idol-detail.component';
import { IdolsComponent} from './idols.component';
import { IdolService } from './idol.service';
import { DashboardComponent } from './dashboard.component';
import { IdolSearchComponent } from './idol-search.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    IdolDetailComponent,
    IdolsComponent,
    DashboardComponent,
    IdolSearchComponent
  ],
  providers: [
    IdolService
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
