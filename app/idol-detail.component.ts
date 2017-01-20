import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { IdolService } from './idol.service';
import { Idol } from './idol';

@Component({
  moduleId: module.id,
  selector: 'my-idol-detail',
  templateUrl: 'idol-detail.component.html',
  styleUrls: [ 'idol-detail.component.css' ]
})

export class IdolDetailComponent implements OnInit {
  constructor(
    private idolService: IdolService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.idolService.getIdol(+params['id']))
      .subscribe(idol => this.idol = idol);
  }

  @Input()
  idol: Idol;

  goBack(): void {
    this.location.back();
  }
}
