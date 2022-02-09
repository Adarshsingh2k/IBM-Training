import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProvideDataService {

  constructor() { }
  greet(){
    return 'hello';
  }
  
  objArray=[{
    fName:'Adarsh',
    school:'BCS',
    yop:2018
  },{
    fName:'Rajesh',
    school:'SJC',
    yop:2017
  },{
    fName:'Ramesh',
    school:'SMC',
    yop:2021
  }]
}
