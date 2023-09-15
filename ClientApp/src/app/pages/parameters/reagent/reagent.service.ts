import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigInitService } from 'src/app/init/config-init.service';
import { SearchObject } from 'src/app/_interfaces/search-object';
import { Observable } from 'rxjs';
import { Reagent } from 'src/app/_models/reagent.model';

@Injectable({
  providedIn: 'root'
})
export class ReagentService {
  private readonly END_POINT = this.configInitService.apiBaseUrl + '/api/v1/reagents';

  constructor(private http: HttpClient, private configInitService: ConfigInitService) { }

  pagingReagent(searchObject: SearchObject): Observable<any> {
    const url = this.END_POINT + "/paging"
    return this.http.post<any>(url, searchObject, { responseType: "json" });
  };

  getAllReagent(): Observable<Reagent[]> {
    const url = this.END_POINT + "/getAll"
    return this.http.get<Array<Reagent>>(url);
  }

  getReagent(id: string): Observable<Reagent> {
    let url = this.END_POINT + "/" + id
    return this.http.get<Reagent>(url, { responseType: "json" });
  };

  saveReagent(value: Reagent): Observable<Reagent> {
    var requestHeaders = new HttpHeaders();
    let url = this.END_POINT + "/save"
    return this.http.post<Reagent>(url, value, { headers: requestHeaders, responseType: "json" });
  };

  deleteReagent(id: string): Observable<any> {
    let url = this.END_POINT + "/" + id
    return this.http.delete<any>(url, { responseType: "json" });
  };
}
