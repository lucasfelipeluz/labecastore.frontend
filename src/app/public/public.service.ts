import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PublicService {
  public urlAPI: String = environment.url;

  constructor(private http: HttpClient) {}

  public getAllProduct() {
    return this.http.get(`${this.urlAPI}/products?images=true&active=true`);
  }

  public getProductById(id: string) {
    return this.http.get(`${this.urlAPI}/products?id=${id}&images=true`);
  }
}
