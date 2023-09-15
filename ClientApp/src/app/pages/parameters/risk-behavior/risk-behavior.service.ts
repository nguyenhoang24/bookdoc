import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigInitService } from 'src/app/init/config-init.service';
import { SearchObject } from 'src/app/_interfaces/search-object';
import { Observable } from 'rxjs';
import { RiskBehavior } from 'src/app/_models/risk-behavior.model';

@Injectable({
  providedIn: 'root'
})
export class RiskBehaviorService {
  private readonly END_POINT = this.configInitService.apiBaseUrl + '/api/v1/risk_behaviors';

  constructor(private http: HttpClient, private configInitService: ConfigInitService) { }

  pagingRiskBehavior(searchObject: SearchObject): Observable<any> {
    const url = this.END_POINT + "/paging"
    return this.http.post<any>(url, searchObject, { responseType: "json" });
  };

  getAllRiskBehavior(): Observable<RiskBehavior[]> {
    const url = this.END_POINT + "/getAll"
    return this.http.get<Array<RiskBehavior>>(url);
  }

  getRiskBehavior(id: string): Observable<RiskBehavior> {
    let url = this.END_POINT + "/" + id
    return this.http.get<RiskBehavior>(url, { responseType: "json" });
  };

  saveRiskBehavior(value: RiskBehavior): Observable<RiskBehavior> {
    var requestHeaders = new HttpHeaders();
    let url = this.END_POINT + "/save"
    return this.http.post<RiskBehavior>(url, value, { headers: requestHeaders, responseType: "json" });
  };

  deleteRiskBehavior(id: string): Observable<any> {
    let url = this.END_POINT + "/" + id
    return this.http.delete<any>(url, { responseType: "json" });
  };
}
