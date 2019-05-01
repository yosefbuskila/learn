import { Component, OnInit } from '@angular/core';
import { postModel } from '../postModel';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(
    public myService:MyServiceService
  ) { }

  ngOnInit() {
    
  }


}
