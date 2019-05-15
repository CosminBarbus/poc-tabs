import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { Tab } from '../tabs/tabs.component';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.sass']
})
export class TabComponent implements OnInit {
  @Input() tab: Tab;
  @Output() removeCurrentTab: EventEmitter<Tab> = new EventEmitter();
  @Output() removeTab: EventEmitter<Tab> = new EventEmitter();
  @ViewChild(RouterLinkActive) private routerLinkActive: RouterLinkActive;
  constructor() { }

  ngOnInit() {
  }

  onTabClose(tabToRemove: Tab, event: Event) {
    event.stopPropagation();
    event.preventDefault();

    if (this.routerLinkActive.isActive) {
      this.removeCurrentTab.emit(tabToRemove);
    } else {
      this.removeTab.emit(tabToRemove);
    }
  }
}
