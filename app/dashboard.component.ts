import { Component, OnInit } from '@angular/core';

import { Idol } from './idol';
import { IdolService } from './idol.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: [ 'dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {
  idols: Idol[] = [];
  constructor(private idolService: IdolService) {}

  ngOnInit(): void {
      this.idolService.getIdols().then(idols => this.idols = idols.slice(1, 5));
  }
}