import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HealthOrganization } from 'src/app/_models/health-organization.model';
import { ConfigInitService } from 'src/app/init/config-init.service';

@Injectable({
  providedIn: 'root'
})
export class HealthOrgService {

  constructor(private http: HttpClient, private configInitService: ConfigInitService) { }

  private readonly END_POINT = this.configInitService.apiBaseUrl + '/api/healthOrg';

  // Lấy ra tất cả danh sách các tổ chức y tế
  getAllHealthOrg(): Observable<any> {
    let url = this.END_POINT + "/getAll";
    return this.http.get<HealthOrganization>(url, { responseType: "json" });
  }

}
