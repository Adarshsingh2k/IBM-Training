import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent  {


  count:number=0;
  incCt(){
    // console.log(this.count++);
    this.count++

  }
  decCt(){
    // console.log(this.count--);
    this.count--
  }

  retCnt(){
    if(this.count<0) {this.count=0; alert("Count Reset");}
    return this.count;
  }

  // Task 2


 state:boolean=false;
  stateChange(){
    // let state=document.getElementById("state");
    // state?.setAttribute("readonly",'false');
    this.state=true;
  }

  // task 3
  col='fill';
}
