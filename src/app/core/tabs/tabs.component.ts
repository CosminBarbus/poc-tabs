import { Component, OnInit } from '@angular/core';
import { TabsService } from '../tabs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.sass']
})
export class TabsComponent implements OnInit {
  tabs$: Tab[];
  constructor(private tabService: TabsService,
              private router: Router) { }

  ngOnInit() {
    this.tabs$ = this.tabService.load();
  }

  onRemoveCurrentTab(tabToRemove: Tab) {
    this.removeTab(tabToRemove);
    this.router.navigate(['items']);
  }

  onRemoveTab(tabToRemove: Tab) {
    this.removeTab(tabToRemove);
  }

  trackByFunction(index, tab: Tab) {
    return tab.id;
  }

  private removeTab(tabToRemove: Tab) {
    this.tabs$.forEach((tab, index) => {
      if (tab.id === tabToRemove.id) {
        this.tabs$.splice(index, 1);
      }
    });
  }
}

export interface Tab {
  id: number;
  name: string;
  link: any;
}
