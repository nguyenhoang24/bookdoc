import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigInitService } from 'src/app/init/config-init.service';
import { SearchObject } from 'src/app/_interfaces/search-object';
import { Observable } from 'rxjs';
import { TransmissionRoute } from '../../../_models/transmission-route';

@Injectable({
  providedIn: 'root'
})
export class TransmissionRouteService {
  private readonly END_POINT = this.configInitService.apiBaseUrl + '/api/v1/transmission_Routes';

  constructor(private http: HttpClient, private configInitService: ConfigInitService) { }

  pagingTransmissionRoute(searchObject: SearchObject): Observable<any> {
    const url = this.END_POINT + "/paging"
    return this.http.post<any>(url, searchObject, { responseType: "json" });
  };

  getAllTransmissionRoute(): Observable<TransmissionRoute[]> {
    const url = this.END_POINT + "/getAll"
    return this.http.get<Array<TransmissionRoute>>(url);
  }

  getTransmissionRoute(id: string): Observable<TransmissionRoute> {
    let url = this.END_POINT + "/" + id
    return this.http.get<TransmissionRoute>(url, { responseType: "json" });
  };

  saveTransmissionRoute(value: TransmissionRoute): Observable<TransmissionRoute> {
    var requestHeaders = new HttpHeaders();
    let url = this.END_POINT + "/save"
    return this.http.post<TransmissionRoute>(url, value, { headers: requestHeaders, responseType: "json" });
  };

  deleteTransmissionRoute(id: string): Observable<any> {
    let url = this.END_POINT + "/" + id
    return this.http.delete<any>(url, { responseType: "json" });
  };
}
