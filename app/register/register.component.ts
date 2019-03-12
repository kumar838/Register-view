import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,FormGroup,FormArray,Validators} from '@angular/forms';
import { DataService} from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerform: FormGroup;

  info : any= {};

  constructor(private fb:FormBuilder,private service:DataService) { }

  ngOnInit() {

    this.registerform = this.fb.group({

        email:['',Validators.required],
        name:['',Validators.required],
        mobile:['',Validators.required]

    })
  }


  postdata(val) {
    
    this.info=val;
    this.service.result.push(val);
    console.log(this.service.result);
    this.registerform.reset();
    
  }
}
