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

  add(name: string): void {
    name = name.trim();
    if (!name) return;
    this.idolService.create(name)
      .then(idol => {
        this.idols.push(idol);
        this.selectedIdol = null;
      });
  }

  delete(idol: Idol): void {
    this.idolService.delete(idol.id)
      .then(() => {
        this.idols = this.idols.filter(i => i !== idol);
        if (this.selectedIdol === idol) this.selectedIdol = null;
      });
  }
}
