import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Idol } from './idol';
import { IdolService } from './idol.service';

@Component({
  moduleId: module.id,
  selector: 'my-idols',
  templateUrl: 'idols.component.html',
  styleUrls: [ 'idols.component.css' ]
})

export class IdolsComponent implements OnInit {
  constructor(
    private idolService: IdolService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getIdols();
  }

  selectedIdol: Idol;
  idols: Idol[];

  getIdols(): void {
    this.idolService.getIdols().then(idols => this.idols = idols);
  }
  
  onSelect(idol: Idol): void {
    this.selectedIdol = idol;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedIdol.id]);
  }
}
