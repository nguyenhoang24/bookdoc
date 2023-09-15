import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ConfigInitService } from 'src/app/init/config-init.service';
import { User} from 'src/app/_models/user.model'
import {HealthOrganization} from "../../_models/health-organization.model";
import {Profile} from "../../_models/profile-model";
import {ResponseObjectModel} from "../../_models/response-object-model";

@Injectable({
  providedIn: 'root'
})

export class ProfileService{

  constructor(private http: HttpClient, private configInitService: ConfigInitService) { }

  private readonly END_POINT = this.configInitService.apiBaseUrl + '/api/v1/user-accounts';

  getCurrentUser(): Observable<User> {
    let url = this.END_POINT + "/getCurrentUser"
    return this.http.get<User>(url, { responseType: "json" });
  }
  saveConfig(profile: Profile): Observable<ResponseObjectModel> {
    var requestHeaders = new HttpHeaders();
    let url = this.END_POINT + "/profile/save-config"
    return this.http.post<ResponseObjectModel>(url, profile, { headers: requestHeaders, responseType: "json" });
  }
  getConfig(): Observable<Profile> {
    var requestHeaders = new HttpHeaders();
    let url = this.END_POINT + "/profile/get-config"
    return this.http.get<Profile>(url, { headers: requestHeaders, responseType: "json" });
  }

}
