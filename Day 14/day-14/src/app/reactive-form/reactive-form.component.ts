import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  logIn!: FormGroup;
  address!:FormGroup;
  constructor() { }

    ngOnInit(): void {
      this.logIn=new FormGroup({
      'fName': new FormControl('pushpa',[Validators.required,Validators.minLength(5)]),
      'lName':new FormControl(''),
      'age':new FormControl('',Validators.maxLength(2)),
      'address':new FormGroup({
       
        'state':new FormControl('',Validators.maxLength(20)),
         'street':new FormControl('',Validators.maxLength(10)),
      })
    });
  }
  onSubmit(){
    if(this.logIn.invalid){
      alert("invalid entry");
    }
    console.log(this.logIn.value);
  
  }
  get name():any {
    return this.logIn.get('fName');
  }

}
