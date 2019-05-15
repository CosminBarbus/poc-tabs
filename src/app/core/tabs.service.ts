import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Tab } from './tabs/tabs.component';
const parentUrl = 'items';
@Injectable({
  providedIn: 'root'
})
export class TabsService {
  tabs = [
    { id: 1, name: 'Item 1', link: [ `${parentUrl}/1`]},
    { id: 2, name: 'Item 2', link: [ `${parentUrl}/2`]},
    { id: 3, name: 'Item 3', link: [ `${parentUrl}/3`]},
    { id: 4, name: 'Admin', link: [ `admin`]},
  ];

  constructor() { }

  load(): Tab[] {
    return this.tabs;
  }
}
