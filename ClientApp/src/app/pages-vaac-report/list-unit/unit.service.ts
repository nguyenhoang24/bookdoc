import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ConfigInitService} from 'src/app/init/config-init.service';
import {formatDate as format, formatDate} from '@angular/common';
import {map} from "rxjs/operators";
import {SearchObject} from 'src/app/_interfaces/search-object';
import { PagePaging } from 'src/app/_models/paging-page';
import { AdministrativeUnit } from 'src/app/_models/administrative-unit.model';
import { HealthOrganization } from 'src/app/_models/health-organization.model';

@Injectable({
  providedIn: 'root'
})

export class UnitService {

  constructor(private http: HttpClient, private configInitService: ConfigInitService) {
  }

  private readonly END_POINT = this.configInitService.apiBaseUrl + '/api/healthOrg';

  private readonly END_POINT_ADMIN_UNIT = this.configInitService.apiBaseUrl + '/api/administrativeunit';

  formatDate(val, type: string = 'hh:mm:ss - dd/MM/yyyy') {
    return val ? formatDate(new Date(val), type, 'en-US') : ''
  }

  pagingOrg(searchDto: SearchObject): Observable<any> {
    const url = this.END_POINT + "/searchByDto"
    return this.http.post<any>(url, searchDto,
      {responseType: "json"}
    );
  };

  getAll(){
    let url = this.END_POINT + "/getAll"
    return this.http.get<any>(url, {responseType: "json" });
  }

  getOne(id: string){
    let url = this.END_POINT + "/" +id
    return this.http.get<any>(url, {responseType: "json" });
  }

  save(healOrg: HealthOrganization): Observable<HealthOrganization> {
    var requestHeaders = new HttpHeaders();
    let url = this.END_POINT + "/saveOrUpdate"
    return this.http.post<HealthOrganization>(url, healOrg, { headers: requestHeaders, responseType: "json" });
  }

  delete(id: string){
    const url = this.END_POINT + "/delete/" + id;
    return this.http.delete<any>(url,
      {responseType: "json"}
    );
  }

  getAllOrgWithoutSeft(id: string){
    let url = this.END_POINT + "/getAllWithoutSelf/"+id
    return this.http.get<any>(url, {responseType: "json" });
  }

  // admin unit
  //listProvince/{pageIndex}/{pageSize}"
  getAllParent(pageIndex:number, pageSize: number): Observable<PagePaging<AdministrativeUnit>> {
    let url = this.END_POINT_ADMIN_UNIT + "/listProvince/"+pageIndex+"/"+pageSize;
    return this.http.get<any>(url, { responseType: "json" });
  }
  getAllChildrenByParentId(id: number, pageIndex: number, pageSize: number): Observable<PagePaging<AdministrativeUnit>> {
    let url = this.END_POINT_ADMIN_UNIT + "/listCity"+"/"+id+"/"+pageIndex+"/"+pageSize;
    return this.http.get<any>(url, { responseType: "json" });
  }

}
