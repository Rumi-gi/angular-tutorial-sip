import { NgModule }      from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { IdolDetailComponent } from './idol-detail.component';
import { IdolsComponent} from './idols.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: IdolDetailComponent },
  { path: 'idols', component: IdolsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
