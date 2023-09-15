import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigInitService } from 'src/app/init/config-init.service';
import { SearchObject } from 'src/app/_interfaces/search-object';
import { Observable } from 'rxjs';
import { Project } from 'src/app/_models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private readonly END_POINT = this.configInitService.apiBaseUrl + '/api/v1/projects';

  constructor(private http: HttpClient, private configInitService: ConfigInitService) { }

  pagingProject(searchObject: SearchObject): Observable<any> {
    const url = this.END_POINT + "/paging"
    return this.http.post<any>(url, searchObject, { responseType: "json" });
  };

  getAllProject(): Observable<any> {
    const url = this.END_POINT + "/getAll"
    return this.http.get<Array<Project>>(url);
  }

  getProject(id: string): Observable<Project> {
    let url = this.END_POINT + "/" + id
    return this.http.get<Project>(url, { responseType: "json" });
  };

  saveProject(value: Project): Observable<Project> {
    var requestHeaders = new HttpHeaders();
    let url = this.END_POINT + "/save"
    return this.http.post<Project>(url, value, { headers: requestHeaders, responseType: "json" });
  };

  deleteProject(id: string): Observable<any> {
    let url = this.END_POINT + "/" + id
    return this.http.delete<any>(url, { responseType: "json" });
  };
}
