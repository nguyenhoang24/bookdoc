import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ConfigInitService} from 'src/app/init/config-init.service';
import {formatDate as format, formatDate} from '@angular/common';
import {map} from "rxjs/operators";
import {SearchObject} from 'src/app/_interfaces/search-object';

@Injectable({
  providedIn: 'root'
})

export class FileManagementService {

  constructor(private http: HttpClient, private configInitService: ConfigInitService) {
  }

  private readonly END_POINT = this.configInitService.apiBaseUrl + '/api/insuranceAssessmentReport';

  private readonly END_POINT_FILE = this.configInitService.apiBaseUrl + '/api/insuranceAssesmentFile';
  formatDate(val, type: string = 'hh:mm:ss - dd/MM/yyyy') {
    return val ? formatDate(new Date(val), type, 'en-US') : ''
  }

  sendInsuranceApplication(file: any, token: string, idToken: string, username: string, password: string,
    soLuongHoSo: string, maTinh: string, maCSKCB: string): Observable<any> {

      const url = this.END_POINT + '/egw/guiHoSoGiamDinh'; // Replace with the actual API endpoint

      const headers = new HttpHeaders();
      return this.http.post(url, file, {params: {token: token, id_token: idToken,username: username,password: password,soLuongHoSo: soLuongHoSo, maTinh: maTinh,maCSKCB: maCSKCB}});
    }

  pagingFile(searchDto: SearchObject): Observable<any> {
    const url = this.END_POINT + "/searchByDto"
    return this.http.post<any>(url, searchDto,
      {responseType: "json"}
    );
  };

  searchHealthOrgBySucsess(searchDto: SearchObject): Observable<any> {
    const url = this.END_POINT + "/searchUploadedHealthOrg"
    return this.http.post<any>(url, searchDto,
      {responseType: "json"}
    );
  };


  downloadFile(id: string){
    const url = this.END_POINT + "/downloadFile/" + id;
    return this.http.get(url,
      {responseType: 'blob'}
    );
  }

  delete(id: string){
    const url = this.END_POINT + "/" + id;
    return this.http.delete<any>(url,
      {responseType: "json"}
    );
  }
  //download file
  //api/insuranceassesmentfile/downloadFile/{id}
  downloadFileAssesment(id: string){
    const url = this.END_POINT_FILE + "/downloadFile/" + id;
    return this.http.get(url,
      {responseType: 'blob'}
    );
  }
}
