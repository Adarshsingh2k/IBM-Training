import { Component, OnInit } from '@angular/core';
import { ProvideDataService } from '../provide-data.service';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {
  objData:any;
  constructor(service:ProvideDataService) {
    this.objData=service.objArray;
   }

  ngOnInit(): void {
  }
getGreet:any;
}
