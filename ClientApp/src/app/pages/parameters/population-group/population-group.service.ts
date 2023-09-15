import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigInitService } from 'src/app/init/config-init.service';
import { SearchObject } from 'src/app/_interfaces/search-object';
import { Observable } from 'rxjs';
import { PopulationGroup } from 'src/app/_models/population-group.model';

@Injectable({
  providedIn: 'root'
})
export class PopulationGroupService {
  private readonly END_POINT = this.configInitService.apiBaseUrl + '/api/v1/population_group';

  constructor(private http: HttpClient, private configInitService: ConfigInitService) { }

  pagingPopulationGroup(searchObject: SearchObject): Observable<any> {
    const url = this.END_POINT + "/paging"
    return this.http.post<any>(url, searchObject, { responseType: "json" });
  };

  getAllPopulationGroup(): Observable<any> {
    const url = this.END_POINT + "/getAll"
    return this.http.get<Array<PopulationGroup>>(url);
  }
  getAllByConfigPopulationGroup(): Observable<any> {
    const url = this.END_POINT + "/get-group-by-config"
    return this.http.get<Array<PopulationGroup>>(url);
  }

  getPopulationGroup(id: string): Observable<PopulationGroup> {
    let url = this.END_POINT + "/" + id
    return this.http.get<PopulationGroup>(url, { responseType: "json" });
  };

  savePopulationGroup(value: PopulationGroup): Observable<PopulationGroup> {
    var requestHeaders = new HttpHeaders();
    let url = this.END_POINT + "/save"
    return this.http.post<PopulationGroup>(url, value, { headers: requestHeaders, responseType: "json" });
  };

  deletePopulationGroup(id: string): Observable<any> {
    let url = this.END_POINT + "/" + id
    return this.http.delete<any>(url, { responseType: "json" });
  };
}
