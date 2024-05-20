import {Component, OnInit} from '@angular/core';
import {ProductType} from "../../../../types/product.type";
import {ProductsRequestService} from "../../../shared/services/products-request.service";
import {Router} from "@angular/router";
import {tap} from "rxjs";

@Component({
  selector: 'products-component',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productRequestService: ProductsRequestService, private router: Router) {
  }
  public isLoading: boolean = false;
  public productItems: ProductType[] = [];

  ngOnInit(): void {
    this.isLoading= true;
    this.productRequestService.getProducts()
      .pipe(
      tap(()=> {
        this.isLoading = false;
      })
      )
      .subscribe(
        {
          next: (data: ProductType[]): void => {
            this.productItems = data;
          },
          error: (error): void => {
            console.log(error);
            this.router.navigate(['/']);
          }
        }
      )
  }
}
