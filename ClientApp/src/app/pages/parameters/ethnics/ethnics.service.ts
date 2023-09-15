import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigInitService } from 'src/app/init/config-init.service';
import { SearchObject } from 'src/app/_interfaces/search-object';
import { Ethnics } from 'src/app/_models/ethnics.model';

@Injectable({
  providedIn: 'root'
})
export class EthnicsService {
  private readonly END_POINT = this.configInitService.apiBaseUrl + '/api/v1/ethnics_ext';

  constructor(private http: HttpClient, private configInitService: ConfigInitService) { }

  pagingEthnics(searchObject: SearchObject): Observable<any> {
    const url = this.END_POINT + "/paging"
    return this.http.post<any>(url, searchObject, { responseType: "json" });
  };

  getAllEthnics(): Observable<Ethnics[]> {
    const url = this.END_POINT + "/getAll"
    return this.http.get<Array<Ethnics>>(url);
  }

  getEthnics(id: string): Observable<Ethnics> {
    let url = this.END_POINT + "/" + id
    return this.http.get<Ethnics>(url, { responseType: "json" });
  };

  saveEthnics(value: Ethnics): Observable<Ethnics> {
    var requestHeaders = new HttpHeaders();
    let url = this.END_POINT + "/save"
    return this.http.post<Ethnics>(url, value, { headers: requestHeaders, responseType: "json" });
  };

  deleteEthnics(id: string): Observable<any> {
    let url = this.END_POINT + "/" + id
    return this.http.delete<any>(url, { responseType: "json" });
  };
}
