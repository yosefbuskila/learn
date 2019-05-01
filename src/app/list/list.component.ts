import { Component, OnInit } from '@angular/core';
import { postModel } from '../postModel';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
posts:postModel[];
  constructor() { }

  ngOnInit() {
    this.posts=[
      {
        name:'moshe',
        text:'hi ma nishma',
        like:5
    },
      {
        name:'dani',
        text:'yesh chagiga',
        like:4
    },
      {
        name:'moshe',
        text:'heloooow',
        like:8
    }
    ]
  }


}
