import { Component, OnInit } from '@angular/core';
import { TabsService } from '../tabs.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.sass']
})
export class TabsComponent implements OnInit {
  tabs$: Observable<Tab[]>;
  constructor(private tabService: TabsService) { }

  ngOnInit() {
    this.tabs$ = this.tabService.load();
  }
}

export interface Tab {
  name: string;
  link: any;
}
