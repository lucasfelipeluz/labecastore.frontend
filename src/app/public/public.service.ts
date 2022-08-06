import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PublicService {
  public urlAPI: String = 'http://54.207.251.62:4545';

  constructor(private http: HttpClient) {}

  public getAllProduct() {
    return this.http.get(`${this.urlAPI}/products`);
  }
}
