import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
    <div>
      <h1>{{title}}</h1>
      <products-list></products-list>
    </div>
  `
})
export class AppComponent {
// tslint:disable-next-line: no-inferrable-types
  title: string = 'First Page';
}

