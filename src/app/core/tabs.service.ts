import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Tab } from './tabs/tabs.component';
const parentUrl = 'items';
@Injectable({
  providedIn: 'root'
})
export class TabsService {
  tabs = [
    { name: 'Item 1', link: [ `${parentUrl}/1`]},
    { name: 'Item 2', link: [ `${parentUrl}/2`]},
    { name: 'Item 3', link: [ `${parentUrl}/3`]},
    { name: 'Admin', link: [ `admin`]},
  ];

  constructor() { }

  load(): Observable<Tab[]> {
    return of(this.tabs);
  }
}
