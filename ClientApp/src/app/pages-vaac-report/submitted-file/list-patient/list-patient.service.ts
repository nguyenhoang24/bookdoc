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


export class ListPatientService {

  constructor(private http: HttpClient, private configInitService: ConfigInitService) {
  }

  private readonly END_POINT = this.configInitService.apiBaseUrl + '/api/patient';

  private readonly END_POINT_FILE = this.configInitService.apiBaseUrl + '/api/insuranceAssesmentFile';

  formatDate(val, type: string = 'dd/MM/yyyy') {
    return val ? formatDate(new Date(val), type, 'en-US') : ''
  }

  sendInsuranceApplication(file: any, token: string, idToken: string, username: string, password: string,
    soLuongHoSo: string, maTinh: string, maCSKCB: string): Observable<any> {

      const url = this.END_POINT + '/egw/guiHoSoGiamDinh'; // Replace with the actual API endpoint

      const headers = new HttpHeaders();
      return this.http.post(url, file, {params: {token: token, id_token: idToken,username: username,password: password,soLuongHoSo: soLuongHoSo, maTinh: maTinh,maCSKCB: maCSKCB}});
    }

  pagingPatient(searchDto: SearchObject): Observable<any> {
    const url = this.END_POINT + "/searchByInsuranceAssessmentReport"
    return this.http.post<any>(url, searchDto,
      {responseType: "json"}
    );
  }

}
