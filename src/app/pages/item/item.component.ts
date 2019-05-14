import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.sass']
})
export class ItemComponent implements OnInit {

  itemId: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('Item');
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.itemId = params.get('id');
    });
  }
}
