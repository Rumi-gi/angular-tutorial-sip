import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{ title }}</h1>
    <h2>My Idols</h2>
    <ul class="idols">
      <li *ngFor="let idol of idols" (click)="onSelect(idol)" [class.selected]="idol === selectedIdol">
        <span class="badge">{{idol.id}}</span> {{idol.name}}
      </li>
    </ul>
    <div *ngIf="selectedIdol">
      <h2>{{ selectedIdol.name }} details!</h2>
      <div><label>id: </label>{{ selectedIdol.id }}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedIdol.name" placeholder="name">
      </div>
    </div>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .idols {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .idols li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .idols li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .idols li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em
    }
    .idols .text {
      position: relative;
      top: -3px;
    }
    .idols .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})

export class AppComponent  {
  title = 'School idol project';
  selectedIdol: Idol;
  idols = IDOLS;
  onSelect(idol: Idol): void {
    this.selectedIdol = idol;
  }
}

export class Idol {
  id: number;
  name: string;
}

const IDOLS: Idol[] = [
  { id: 11, name: 'honoka' },
  { id: 12, name: 'umi'},
  { id: 13, name: 'kotori'},
  { id: 14, name: 'maki'},
  { id: 15, name: 'rin'},
  { id: 16, name: 'hanayo'},
  { id: 17, name: 'nico'},
  { id: 18, name: 'eli'},
  { id: 19, name: 'nozomi'}
];


