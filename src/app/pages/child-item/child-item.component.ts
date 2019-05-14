import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-item',
  templateUrl: './child-item.component.html',
  styleUrls: ['./child-item.component.sass']
})
export class ChildItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('Child Item');
  }

}
