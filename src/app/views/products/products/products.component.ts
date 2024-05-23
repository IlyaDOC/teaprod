import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductType} from "../../../../types/product.type";
import {ProductsRequestService} from "../../../shared/services/products-request.service";
import { Subscription, switchMap, tap} from "rxjs";
import {SearchService} from "../../../shared/services/search.service";


@Component({
  selector: 'products-component',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  public isLoading: boolean = false;
  public productItems: ProductType[] = [];
  private data!: string;
  searchQuery: string = '';
  private productItems$!: Subscription;
  private searchQuery$!: Subscription;

  constructor(private productRequestService: ProductsRequestService,
              private searchService: SearchService) {
  }


  ngOnInit(): void {
    this.isLoading = true;
    this.productItems$ = this.searchService.search$
      .pipe(
        switchMap((query: string) => this.productRequestService.getProducts(query)),
        tap(()=> {
          this.isLoading= false;

        })
      )
      .subscribe((data: ProductType[]): void => {
        this.productItems = data;
      })

    this.searchQuery$ = this.searchService.search$.subscribe((query: string): void => {
      this.searchQuery = query;
    });
  }

  ngOnDestroy() {
    this.productItems$.unsubscribe();
    this.searchQuery$.unsubscribe();
  }


}
