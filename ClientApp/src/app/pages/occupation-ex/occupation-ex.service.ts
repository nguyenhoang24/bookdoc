import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Occupation } from 'src/app/_models/occupation.model';
import { ConfigInitService } from 'src/app/init/config-init.service';
import { SearchObject } from 'src/app/_interfaces/search-object';

@Injectable({
  providedIn: 'root'
})

export class OccupationExService {

  constructor(private http: HttpClient, private configInitService: ConfigInitService) { }

  private readonly END_POINT = this.configInitService.apiBaseUrl + '/api/v1/occupations';

  // phan trang method post
  pagingOccupations(searchObject: SearchObject): Observable<any> {
    const url = this.END_POINT + "/paging"
    return this.http.post<any>(url, searchObject,
      { responseType: "json" }
    );
  }

  getOccupation(id: string): Observable<Occupation> {
    let url = this.END_POINT + "/" + id
    return this.http.get<Occupation>(url, { responseType: "json" });
  }

  saveOrUpdateOccupation(occupation: Occupation): Observable<Occupation> {
    var requestHeaders = new HttpHeaders();
    let url = this.END_POINT
    return this.http.post<Occupation>(url, occupation, { headers: requestHeaders, responseType: "json" });
  }

  // updateOccupation(occupation: Occupation): Observable<Occupation> {
  //   var requestHeaders = new HttpHeaders();
  //   let url = this.END_POINT + "/" + occupation.id
  //   return this.http.put<Occupation>(url + "/", occupation, { headers: requestHeaders, responseType: "json" });
  // }

  deleteOccupation(id: string): Observable<Occupation> {
    let url = this.END_POINT + "/" + id
    return this.http.delete<Occupation>(url, { responseType: "json" });
  }

}