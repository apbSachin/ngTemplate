import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template:`
  <div>
    <h2> this is an example for {{name}} </h2>
  </div>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  name:string="Internal template"
}
