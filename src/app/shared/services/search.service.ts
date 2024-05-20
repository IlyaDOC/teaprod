import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ProductType} from "../../../types/product.type";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private apiURL: string = 'https://testologia.ru/tea'
  constructor(private http: HttpClient) {}

  searchProducts(query: string): Observable<ProductType[]> {
    return this.http.get<ProductType[]>(`${this.apiURL}?search=${query}`);
  }
}
