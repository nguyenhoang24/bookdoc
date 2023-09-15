import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ConfigInitService} from 'src/app/init/config-init.service';
import {formatDate as format, formatDate} from '@angular/common';
import {map} from "rxjs/operators";
import {SearchObject} from 'src/app/_interfaces/search-object';
import { PagePaging } from 'src/app/_models/paging-page';
import { Regimen } from 'src/app/_models/Regimen.model';

@Injectable({
  providedIn: 'root'
})

export class RegimenService {

  constructor(private http: HttpClient, private configInitService: ConfigInitService) {
  }

  private readonly END_POINT = this.configInitService.apiBaseUrl + '/api/regimen';

  pagingRegimen(searchDto: SearchObject): Observable<any> {
    const url = this.END_POINT + "/searchByDto"
    return this.http.post<any>(url, searchDto,
      {responseType: "json"}
    );
  };

  saveRegimen(drug: Regimen): Observable<Regimen> {
    var requestHeaders = new HttpHeaders();
    let url = this.END_POINT + "/add"
    return this.http.post<Regimen>(url, drug, { headers: requestHeaders, responseType: "json" });
  }

  updateRegimen(drug: Regimen, id: String): Observable<Regimen> {
    var requestHeaders = new HttpHeaders();
    let url = this.END_POINT + "/update/"+id
    return this.http.put<Regimen>(url, drug, { headers: requestHeaders, responseType: "json" });
  }

  getOne(id: string): Observable<Regimen>{
    let url = this.END_POINT + "/" + id;
    return this.http.get<Regimen>(url, { responseType: "json" });
  }

  deleteRegimen(id: string): Observable<Regimen> {
    let url = this.END_POINT + "/delete/" + id
    return this.http.delete<Regimen>(url, { responseType: "json" });
  }
}
