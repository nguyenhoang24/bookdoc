import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigInitService {

  private appConfig: any;
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  loadAppConfig() {
    return this.http.get(environment.configFile)
      .toPromise()
      .then(config => {
        this.appConfig = config;
      });
  }

  get apiBaseUrl(): string {
    return this.appConfig.SERVER_URL;
  }
  get baseUrlFacility(): string {
    return this.appConfig.APP_FACILITY_PAGE_ORG_URL;
  }
}
