import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigInitService } from 'src/app/init/config-init.service';
import { SearchObject } from 'src/app/_interfaces/search-object';
import { PermanentAddressStatus } from 'src/app/_models/permanent-address-status.model';

@Injectable({
  providedIn: 'root'
})
export class PermanentAddressStatusService {
  private readonly END_POINT = this.configInitService.apiBaseUrl + '/api/v1/value_set';

  constructor(private http: HttpClient, private configInitService: ConfigInitService) { }

  pagingPermanentAddressStatus(searchObject: SearchObject): Observable<any> {
    const url = this.END_POINT + "/paging"
    return this.http.post<any>(url, searchObject, { responseType: "json" });
  };

  getAllPermanentAddressStatus(): Observable<any> {
    const url = this.END_POINT + "/getListValue"
    return this.http.get<Array<PermanentAddressStatus>>(url);
  }

  getPermanentAddressStatus(id: string): Observable<PermanentAddressStatus> {
    let url = this.END_POINT + "/" + id
    return this.http.get<PermanentAddressStatus>(url, { responseType: "json" });
  };

  savePermanentAddressStatus(value: PermanentAddressStatus): Observable<PermanentAddressStatus> {
    var requestHeaders = new HttpHeaders();
    let url = this.END_POINT + "/save"
    return this.http.post<PermanentAddressStatus>(url, value, { headers: requestHeaders, responseType: "json" });
  };

  deletePermanentAddressStatus(id: string): Observable<any> {
    let url = this.END_POINT + "/" + id
    return this.http.delete<any>(url, { responseType: "json" });
  };
}
