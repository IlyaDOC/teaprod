import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SearchService} from "../../services/search.service";
import {ProductType} from "../../../../types/product.type";
import {Subject} from "rxjs";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchQuery: Subject<string> = new Subject<string>();


  constructor(public searchService: SearchService, private fb: FormBuilder) {

  }

  searchForm = this.fb.group({
    search: ['']
  })


  ngOnInit(): void {

  }

  get search() {
    return this.searchForm.get('search')?.value;
  }

  test() {
    console.log(this.search);
  }



}
