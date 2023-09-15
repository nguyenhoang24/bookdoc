import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ConfigInitService} from "../init/config-init.service";
import {catchError, Observable, of} from "rxjs";
import {ToastrService} from "ngx-toastr";
import {map} from "rxjs/operators";
import {NgxSpinnerService} from "ngx-spinner";

@Injectable({
  providedIn: 'root'
})
export class HivInfoLogService {
  private readonly API_URL = this.configInitService.apiBaseUrl + '/api/v1/hiv-info-log';
  constructor(private http: HttpClient, private configInitService: ConfigInitService,
              private toast : ToastrService) { }
  getByHivId(id : string): Observable<any> {
    return this.http.get(this.API_URL+"/"+id).pipe(
      map(value => {
        return value;
      }),catchError(error => {
        this.toast.error("Có lỗi xảy ra vui lòng thử lại","Thông báo!")
        return of(false);
      })
    );
  }
  save(object: any): Observable<any> {
    return this.http.post(this.API_URL,object).pipe(
      map(value => {
        return value;
      }),catchError(error => {
        this.toast.error("Có lỗi xảy ra vui lòng thử lại","Thông báo!")
        return of(false);
      })
    );
  }
}
