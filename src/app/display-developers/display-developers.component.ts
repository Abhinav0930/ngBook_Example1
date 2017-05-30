import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-developers',
  templateUrl: './display-developers.component.html',
  styleUrls: ['./display-developers.component.css']
})
export class DisplayDevelopersComponent implements OnInit {
  votes: number;
  name:String;
  role:String;
  constructor() { 
    this.votes=0;
    this.name="Abhinav";
    this.role="FED"
  }
  upvote():boolean{
    this.votes+=1;
    return false;
  }
  downvote():boolean{
    this.votes-=1;
    return false;
  }

  ngOnInit() {
  }

}
