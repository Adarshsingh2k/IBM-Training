import { identifierName } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day11-Ass';
  showDiv:boolean=true;
  // di=document.getElementById("tool");
  toggleDiv(){
    // this.di.style.display="flex";
    if(this.showDiv==true) this.showDiv=false;
    else this.showDiv=true;
  }

}
