import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ConfigInitService } from 'src/app/init/config-init.service';
import { SearchObject } from 'src/app/_interfaces/search-object';
import { User } from 'src/app/_models/user.model';
import { UserHealthOrg } from 'src/app/_models/user-healthorg.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient, private configInitService: ConfigInitService) { }

  private readonly END_POINT = this.configInitService.apiBaseUrl + '/api/users';

  private readonly END_POINT_ROLE = this.configInitService.apiBaseUrl + '/api/roles';

  private readonly END_POINT_USER_HEALTHORG =  this.configInitService.apiBaseUrl + '/api/userHealthOrg';

  // phan trang method post
  pagingUsers(searchObject: any): Observable<any> {
    let url = this.END_POINT + `/search/${searchObject?.pageIndex}/${searchObject?.pageSize}`;
    return this.http.post<any>(url, searchObject, { responseType: "json" });
  }

  getUser(id: string): Observable<any> {
    let url = this.END_POINT + "/" + id
    return this.http.get<User>(url, { responseType: "json" });
  }

  getCurrentUser(): Observable<any> {
    let url = this.END_POINT + "/getCurrentUser"
    return this.http.get<User>(url, { responseType: "json" });
  }

  saveOrUpdateUser(User: User): Observable<User> {
    var requestHeaders = new HttpHeaders();
    return this.http.post<User>(this.END_POINT, User, { headers: requestHeaders, responseType: "json" });
  }

  updateUser(User: User): Observable<User> {
    var requestHeaders = new HttpHeaders();
    return this.http.put<User>(this.END_POINT, User, { headers: requestHeaders, responseType: "json" });
  }

  deleteUser(id: string): Observable<User> {
    let url = this.END_POINT + "/" + id
    return this.http.delete<User>(url, { responseType: "json" });
  }

  getRole(): Observable<any> {
    let url = this.END_POINT_ROLE + "/all";
    return this.http.get<any>(url, { responseType: "json" });
  }
  checkExitsUsername(username: string){
    return this.http.get(this.END_POINT+"/exist-username/"+username)
  }
  //
  getListUserHealthOrg(id: string): Observable<any> {
    let url = this.END_POINT_USER_HEALTHORG + "/findByUserId/" + id
    return this.http.get<any>(url, { responseType: "json" });
  }

  saveListUserHealOrg(userHealthOrg: any){
    var requestHeaders = new HttpHeaders();
    let url = this.END_POINT_USER_HEALTHORG + "/saveList"
    return this.http.post<any>(url, userHealthOrg, { headers: requestHeaders, responseType: "json" });
  }

  deleteUserHealOrg(id: string) {
    let url = this.END_POINT_USER_HEALTHORG + "/delete/" + id
    return this.http.delete<any>(url, { responseType: "json" });
  }
}
