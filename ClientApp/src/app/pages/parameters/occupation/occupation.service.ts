import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigInitService } from 'src/app/init/config-init.service';
import { SearchObject } from 'src/app/_interfaces/search-object';
import { Occupation } from 'src/app/_models/occupation.model';

@Injectable({
  providedIn: 'root'
})
export class OccupationService {
  private readonly END_POINT = this.configInitService.apiBaseUrl + '/api/v1/occupations';

  constructor(private http: HttpClient, private configInitService: ConfigInitService) { }

  pagingOccupation(searchObject: SearchObject): Observable<any> {
    const url = this.END_POINT + "/paging"
    return this.http.post<any>(url, searchObject, { responseType: "json" });
  };

  getAllOccupation(): Observable<Occupation[]> {
    const url = this.END_POINT + "/getAll"
    return this.http.get<Array<Occupation>>(url);
  }

  getOccupation(id: string): Observable<Occupation> {
    let url = this.END_POINT + "/" + id
    return this.http.get<Occupation>(url, { responseType: "json" });
  };

  saveOccupation(value: Occupation): Observable<Occupation> {
    var requestHeaders = new HttpHeaders();
    let url = this.END_POINT + "/save"
    return this.http.post<Occupation>(url, value, { headers: requestHeaders, responseType: "json" });
  };

  deleteOccupation(id: string): Observable<any> {
    let url = this.END_POINT + "/" + id
    return this.http.delete<any>(url, { responseType: "json" });
  };
}
