import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ConfigInitService } from 'src/app/init/config-init.service';
import { SearchObject } from 'src/app/_interfaces/search-object';
import { Organization } from 'src/app/_models/organization.model';

@Injectable({
  providedIn: 'root'
})

export class OrganizationService {

  constructor(private http: HttpClient, private configInitService: ConfigInitService) { }

  private readonly END_POINT = this.configInitService.apiBaseUrl + '/api/v1/health_Organization';

  // phan trang method post
  pagingOrganization(searchObject: SearchObject): Observable<any> {
    const url = this.END_POINT + "/paging"
    return this.http.post<any>(url, searchObject,
      { responseType: "json" }
    );
  }
  getAllOrganization(pageIndex: number, pageSize: number): Observable<any> {
    const url = this.END_POINT + "/paging"
    return this.http.post<Organization>(url, { pageIndex, pageSize }, { responseType: "json" });
  }
  getOrganization(id: string): Observable<Organization> {
    let url = this.END_POINT + "/" + id
    return this.http.get<Organization>(url, { responseType: "json" });
  }

  saveOrUpdateOrganization(organization: Organization): Observable<Organization> {
    var requestHeaders = new HttpHeaders();
    let url = this.END_POINT + "/save"
    return this.http.post<Organization>(url, organization, { headers: requestHeaders, responseType: "json" });
  }

  deleteOrganization(id: string): Observable<Organization> {
    let url = this.END_POINT + "/" + id
    return this.http.delete<Organization>(url, { responseType: "json" });
  }

  getChildrenOrganization(id: string, searchObject: SearchObject): Observable<any> {
    var requestHeaders = new HttpHeaders();
    let url = this.END_POINT + "/getChildren/" + id
    return this.http.post<Organization>(url, searchObject, { headers: requestHeaders, responseType: "json" });
  }

  getAllParentOrganization(): Observable<any> {
    var requestHeaders = new HttpHeaders();
    let url = this.END_POINT + "/getAllParent"
    return this.http.get<Organization>(url, { responseType: "json" });
  }

}
