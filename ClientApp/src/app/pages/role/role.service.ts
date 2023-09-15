import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchObject } from 'src/app/_interfaces/search-object';
import { ConfigInitService } from 'src/app/init/config-init.service';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient, private configInitService: ConfigInitService) { }

  private readonly END_POINT = this.configInitService.apiBaseUrl + '/api/roles';

  pagingRoles(): Observable<any> {
    var requestHeaders = new HttpHeaders();

    const url = this.END_POINT + '/all'
    return this.http.get<any>(url);
  }

  getRoles(searchObject: SearchObject): Observable<any> {
    var requestHeaders = new HttpHeaders();

    const url = this.END_POINT
    return this.http.post<any>(url,searchObject, {  responseType: "json" });
  }
}
