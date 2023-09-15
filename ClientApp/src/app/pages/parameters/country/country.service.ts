import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigInitService } from 'src/app/init/config-init.service';
import { SearchObject } from 'src/app/_interfaces/search-object';
import { Country } from 'src/app/_models/country.model';
@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private readonly END_POINT = this.configInitService.apiBaseUrl + '/api/v1/country_ext';

  constructor(private http: HttpClient, private configInitService: ConfigInitService) { }

  pagingCountry(searchObject: SearchObject): Observable<any> {
    const url = this.END_POINT + "/paging"
    return this.http.post<any>(url, searchObject, { responseType: "json" });
  };

  getAllCountry(): Observable<any> {
    const url = this.END_POINT + "/paging"
    return this.http.post<Array<Country>>(url, { pageIndex: 1, pageSize: 1000 }, { responseType: "json" });
  }

  getCountry(id: string): Observable<Country> {
    let url = this.END_POINT + "/" + id
    return this.http.get<Country>(url, { responseType: "json" });
  };

  saveCountry(value: Country): Observable<Country> {
    var requestHeaders = new HttpHeaders();
    let url = this.END_POINT + "/save"
    return this.http.post<Country>(url, value, { headers: requestHeaders, responseType: "json" });
  };

  deleteCountry(id: string): Observable<any> {
    let url = this.END_POINT + "/" + id
    return this.http.delete<any>(url, { responseType: "json" });
  };
}
