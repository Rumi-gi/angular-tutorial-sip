import { Component, Input } from '@angular/core';
import { Idol } from './idol';

@Component({
  selector: 'my-idol-detail',
  template: `
    <div *ngIf="idol">
      <h2>{{idol.name}} details!</h2>
      <div><label>id: </label>{{idol.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="idol.name" placeholder="name"/>
      </div>
    </div>
  `
})

export class IdolDetailComponent {
    @Input()
    idol: Idol;
}
