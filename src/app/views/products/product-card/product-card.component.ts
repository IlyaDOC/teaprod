import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ProductsRequestService} from "../../../shared/services/products-request.service";
import {ProductType} from "../../../../types/product.type";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  productItem: ProductType;

  constructor(private activatedRoute: ActivatedRoute, private productsRequestService: ProductsRequestService, private router: Router) {
    this.productItem = {
      description: '',
      id: 0,
      image: '',
      price: 0,
      title: ''
    }
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params): void => {
      if (params['id']) {
        this.productsRequestService.getProduct(+params['id'])
          .subscribe({
            next:(data: ProductType): void => {
              this.productItem = data;
            },
            error: (error): void => {
              console.log(error);
              this.router.navigate(['/'])
            }
          })
      }
    })
  }

}
