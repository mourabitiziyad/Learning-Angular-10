import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Learning-Angular10';
  clickCounter = 0;

  incrementCounter = () => {
    this.clickCounter++;
  };
}
