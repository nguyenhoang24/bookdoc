import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ConfigInitService } from 'src/app/init/config-init.service';
import { SearchObject } from 'src/app/_interfaces/search-object';
import { AdministrativeUnit } from 'src/app/_models/administrative-unit.model';
import { PagePaging } from 'src/app/_models/paging-page';

@Injectable({
  providedIn: 'root'
})

export class AdministrativeUnitService {

  constructor(private http: HttpClient, private configInitService: ConfigInitService) { }

  private readonly END_POINT = this.configInitService.apiBaseUrl + '/api/administrativeUnitExt';
// phan trang method post
pagingAdministrativeUnits(searchObject: SearchObject): Observable<any> {
  const url = this.END_POINT + "/paging"
  return this.http.post<any>(url, searchObject,
    { responseType: "json" }
  );
}

getAdministrativeUnit(id: string): Observable<AdministrativeUnit> {
  let url = this.END_POINT + "/" + id
  return this.http.get<AdministrativeUnit>(url, { responseType: "json" });
}

saveOrUpdateAdministrativeUnit(AdministrativeUnit: AdministrativeUnit): Observable<AdministrativeUnit> {
  var requestHeaders = new HttpHeaders();
  let url = this.END_POINT + "/save"
  return this.http.post<AdministrativeUnit>(url, AdministrativeUnit, { headers: requestHeaders, responseType: "json" });
}

saveOrUpdateAdministrativeUnitByParentId(AdministrativeUnit: AdministrativeUnit, parentId: string): Observable<AdministrativeUnit> {
  var requestHeaders = new HttpHeaders();
  let url = this.END_POINT + "/save/" + parentId;
  return this.http.post<AdministrativeUnit>(url, AdministrativeUnit, { headers: requestHeaders, responseType: "json" });
}

// updateAdministrativeUnit(AdministrativeUnit: AdministrativeUnit): Observable<AdministrativeUnit> {
//   var requestHeaders = new HttpHeaders();
//   let url = this.END_POINT + "/" + AdministrativeUnit.id
//   return this.http.put<AdministrativeUnit>(url + "/", AdministrativeUnit, { headers: requestHeaders, responseType: "json" });
// }

deleteAdministrativeUnit(id: string): Observable<AdministrativeUnit> {
  let url = this.END_POINT + "/" + id
  return this.http.delete<AdministrativeUnit>(url, { responseType: "json" });
}

getListChildren(id: string, searchObject: SearchObject): Observable<PagePaging<AdministrativeUnit>> {
  let url = this.END_POINT + "/getChildren/" + id
  return this.http.post<PagePaging<AdministrativeUnit>>(url, searchObject, { responseType: "json" });
}

getAll(): Observable<any> {
  let url = this.END_POINT + "/1/100000";
  return this.http.get<any>(url, { responseType: "json" });
}

getAllParent(searchObject: SearchObject): Observable<PagePaging<AdministrativeUnit>> {
  let url = this.END_POINT + "/getAllParent";
  return this.http.post<any>(url, searchObject, { responseType: "json" });
}
getAllParentNew() {
  return this.http.get(this.END_POINT + "/get-all-parent")
}
getAllForArea() {
  return this.http.get(this.END_POINT + "/get-all-for-area")
}
getAllForAreaById(id: string) {
  return this.http.get(this.END_POINT + "/get-all-for-area/"+id)
}
getAllByParent(id: string) {
  return this.http.get(this.END_POINT + "/get-all-by-parent/" + id);
}
uploadExel(file: File): Observable<any> {
  const formData: FormData = new FormData();
  formData.append('upload', file);
  return this.http.post(this.END_POINT + "/import", formData);
}

getAllByListParent(object: any): Observable<any> {
  let url = this.END_POINT + "/get-all-by-parent"
  return this.http.post<any>(url, object, { responseType: "json" });
}
}
