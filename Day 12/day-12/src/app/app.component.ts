import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day-12';
  list=['Adarsh','suresh','ramesh'];
  // dis='Adarsh';

  start=Date.now();
}
