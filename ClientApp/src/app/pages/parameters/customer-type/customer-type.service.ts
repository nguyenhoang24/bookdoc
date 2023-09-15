import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigInitService } from 'src/app/init/config-init.service';
import { Observable } from 'rxjs';
import {ValueCode} from "../../../_models/value_code.model";
import {SearchObject} from "../../../_interfaces/search-object";
import {CustomerTypeCreateUpdateModule} from "./customer-type-create-edit/customer-type-create-edit.module";

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
  private readonly END_POINT = this.configInitService.apiBaseUrl + '/api/v1/value_code';

  constructor(private http: HttpClient, private configInitService: ConfigInitService) { }
  saveCustomerType(value: ValueCode): Observable<ValueCode> {
    var requestHeaders = new HttpHeaders();
    let url = this.END_POINT + "/save"
    return this.http.post<ValueCode>(url, value, { headers: requestHeaders, responseType: "json" });
  };
  pagingCustomerType(searchObject: SearchObject): Observable<any> {
    const url = this.END_POINT + "/paging"
    return this.http.post<any>(url, searchObject, { responseType: "json" });
  };
  deleteCustomerType(id: string): Observable<any> {
    let url = this.END_POINT + "/" + id
    return this.http.delete<any>(url, { responseType: "json" });
  };
}
