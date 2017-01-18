import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{ title }}</h1>
    <h2>{{ idol.name }} details!</h2>
    <div><label>id: </label>{{ idol.id }}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="idol.name" placeholder="name">
    </div>
  `,
})
export class AppComponent  {
  title = 'School idol project';
  idol: Idol = {
    id: 1,
    name: 'honoka'
  };
}

export class Idol {
  id: number;
  name: string;
}
