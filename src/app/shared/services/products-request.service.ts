import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductType} from "../../../types/product.type";
import {OrderType} from "../../../types/order.type";

@Injectable({
  providedIn: 'root'
})
export class ProductsRequestService {
  private apiURLProducts: string = 'https://testologia.ru/tea';
  private apiURLOrder: string = 'https://testologia.ru/order-tea';


  constructor(private http: HttpClient) { }

  getProduct(id: number): Observable<ProductType> {
    return this.http.get<ProductType>(`${this.apiURLProducts}?id=${id}`)
  }

  createOrder(data: OrderType): Observable<{success: boolean, message?: string}> {
    return this.http.post<{success: boolean, message?: string}>(this.apiURLOrder, data);
  }
  getProducts(queryParams: string = ''): Observable<ProductType[]> {
    return this.http.get<ProductType[]>(this.apiURLProducts + (queryParams ? ('?search=' + queryParams) : ''));
  }
}
