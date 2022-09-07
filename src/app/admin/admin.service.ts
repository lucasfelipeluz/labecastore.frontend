import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from './login/User';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  public urlAPI: String = environment.url;

  public userLogged: boolean = false;
  private token: any;

  constructor(private http: HttpClient) {}

  getToken() {
    this.token = localStorage.getItem('token');
  }

  public setToken(token: string) {
    this.userLogged = true;
    localStorage.setItem('token', token);
  }

  public async checkUser(): Promise<boolean> {
    this.token = localStorage.getItem('token');
    const response: any = await this.http
      .post(`${this.urlAPI}/admin/checkuser`, { token: this.token }, {})
      .toPromise();

    const { valid, role } = response.data;

    if (valid && role > 0) {
      return true;
    }
    localStorage.removeItem('token');
    return false;
  }

  public login(user: User) {
    return this.http.post(`${this.urlAPI}/admin/login`, {
      nickname: user.nickname,
      password: user.password,
    });
  }

  getAllProducts() {
    this.getToken();
    const headers = new HttpHeaders().append('authorization', `${this.token}`);
    const token: string = this.token;
    return this.http.get(`${this.urlAPI}/admin/products`, { headers: headers });
  }
}
