import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigInitService } from 'src/app/init/config-init.service';
import { SearchObject } from 'src/app/_interfaces/search-object';
import { Observable } from 'rxjs';
import { Regimen } from 'src/app/_models/Regimen.model';

@Injectable({
  providedIn: 'root'
})
export class RegimenService {
  private readonly END_POINT = this.configInitService.apiBaseUrl + '/api/v1/hiv_Regimens';

  constructor(private http: HttpClient, private configInitService: ConfigInitService) { }

  pagingRegimen(searchObject: SearchObject): Observable<any> {
    const url = this.END_POINT + "/paging"
    return this.http.post<any>(url, searchObject, { responseType: "json" });
  };

  getAllRegimen(): Observable<any> {
    const url = this.END_POINT + "/getAll"
    return this.http.get<Array<Regimen>>(url);
  }

  getRegimen(id: number): Observable<Regimen> {
    let url = this.END_POINT + "/" + id
    return this.http.get<Regimen>(url, { responseType: "json" });
  };

  saveRegimen(value: Regimen): Observable<Regimen> {
    var requestHeaders = new HttpHeaders();
    let url = this.END_POINT + "/save"
    return this.http.post<Regimen>(url, value, { headers: requestHeaders, responseType: "json" });
  };

  deleteRegimen(id: string): Observable<any> {
    let url = this.END_POINT + "/" + id
    return this.http.delete<any>(url, { responseType: "json" });
  };
}
