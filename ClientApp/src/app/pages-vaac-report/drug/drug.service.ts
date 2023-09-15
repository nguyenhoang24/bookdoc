import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ConfigInitService} from 'src/app/init/config-init.service';
import {formatDate as format, formatDate} from '@angular/common';
import {map} from "rxjs/operators";
import {SearchObject} from 'src/app/_interfaces/search-object';
import { PagePaging } from 'src/app/_models/paging-page';
import { Drug } from 'src/app/_models/drug.model';

@Injectable({
  providedIn: 'root'
})

export class DrugService {

  constructor(private http: HttpClient, private configInitService: ConfigInitService) {
  }

  private readonly END_POINT = this.configInitService.apiBaseUrl + '/api/drug';

  pagingDrug(searchDto: SearchObject): Observable<any> {
    const url = this.END_POINT + "/searchByDto"
    return this.http.post<any>(url, searchDto,
      {responseType: "json"}
    );
  };

  saveDrug(drug: Drug): Observable<Drug> {
    var requestHeaders = new HttpHeaders();
    let url = this.END_POINT + "/add"
    return this.http.post<Drug>(url, drug, { headers: requestHeaders, responseType: "json" });
  }

  updateDrug(drug: Drug, id: String): Observable<Drug> {
    var requestHeaders = new HttpHeaders();
    let url = this.END_POINT + "/update/"+id
    return this.http.put<Drug>(url, drug, { headers: requestHeaders, responseType: "json" });
  }

  getOne(id: string): Observable<Drug>{
    let url = this.END_POINT + "/" + id;
    return this.http.get<Drug>(url, { responseType: "json" });
  }

  deleteDrug(id: string): Observable<Drug> {
    let url = this.END_POINT + "/delete/" + id
    return this.http.delete<Drug>(url, { responseType: "json" });
  }

  uploadExel(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('upload', file);
    return this.http.post(this.END_POINT + "/import", formData);
  }
}
