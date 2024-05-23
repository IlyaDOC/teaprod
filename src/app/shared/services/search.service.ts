import {Injectable, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  search$: Observable<string> = this.searchSubject.asObservable();
  constructor() {

  }
  setSearchQuery(query: string) {
    this.searchSubject.next(query);
  }
}
