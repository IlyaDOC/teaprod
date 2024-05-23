import {Component, OnInit} from '@angular/core';

import {FormBuilder} from "@angular/forms";
import {SearchService} from "../../services/search.service";


@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor(private fb: FormBuilder,
              private searchService: SearchService) {

  }

  searchForm = this.fb.group({
    search: ['']
  })


  ngOnInit(): void {

  }


  get search() {
    return this.searchForm.get('search');
  }

  onSearch(query: string) {
    this.searchService.setSearchQuery(query);
  }

  onReset() {
    if (!this.search?.value) {
      this.searchService.setSearchQuery('');
    }
  }




}
