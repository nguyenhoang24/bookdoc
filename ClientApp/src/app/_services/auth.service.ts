import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {catchError, Observable, of} from 'rxjs';
import { ConfigInitService } from '../init/config-init.service';
import { Router } from '@angular/router';
import {map} from "rxjs/operators";
import {ToastrService} from "ngx-toastr";
import jwtDecode from 'jwt-decode';
import { JwtResponse } from 'src/app/_interfaces/jwt-response';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private configInitService: ConfigInitService,
    private toast : ToastrService,
    private router: Router) { }

  private AUTH_API = `${this.configInitService.apiBaseUrl}api/v1/user/sign-in`;


//   client_id:core_client
// grant_type:password
// username:admin
// password:admin
// client_secret:password
  login(credentials: any): Observable<any> {
    // let requestBody = "username=" + credentials.username + "&password=" + credentials.password;
    // // let requestBody = "client_id=core_client&grant_type=password&username=" + credentials.username + "&password=" + credentials.password + "&client_secret=password";

    // return this.http.post(this.AUTH_API, requestBody, httpOptions);
    const requestBody = {
    username: credentials.username,
    password: credentials.password
  };

  return this.http.post<any>(this.AUTH_API, requestBody, httpOptions).pipe(
    catchError((error) => {
      this.toast.error('Đăng nhập thất bại', 'Lỗi!');
      return of(false);
    })
  );
  }

  validateToken(token: string): Observable<boolean> {
    const validateUrl = `${this.configInitService.apiBaseUrl}validate-token`; // Thay đổi đường dẫn thành endpoint xác minh trên máy chủ
    const requestBody = { token: token };

    return this.http.post<boolean>(validateUrl, requestBody);
  }

  logout() {
    window.localStorage.removeItem("auth-token");
    localStorage.removeItem("auth-token");
    this.router.navigate(['/login']);
  }
  resetPassword(object: any){
    return this.http.post(this.configInitService.apiBaseUrl + '/oauth/reset-password',object).pipe(
      map(value => {
        return value;
      }),catchError(error => {
        this.toast.error("Có lỗi xảy ra vui lòng thử lại","Thông báo!")
        return of(false);
      })
    );
  }
}
