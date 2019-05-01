import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
profileForm=new FormGroup({
  name:new FormControl(''),
  text:new FormControl(''),
  like:new FormControl('')
})
  constructor(
    public myServic:MyServiceService
  ) { }

  ngOnInit() {
  }
  onSubmit(){
    console.log(this.profileForm)
    this.myServic.add(this.profileForm.value)
  }

}
