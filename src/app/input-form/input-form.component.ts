import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {
  addArticle(name: HTMLInputElement, role:HTMLInputElement):boolean{
    console.log(`Name entered is - ${name.value} and Role entered is - ${role.value}`);
    return false;
  }
  constructor() { }
  
  ngOnInit() {
  }

}
