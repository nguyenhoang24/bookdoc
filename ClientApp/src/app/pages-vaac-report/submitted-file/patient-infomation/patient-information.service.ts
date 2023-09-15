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


export class PatientService {

  constructor(private http: HttpClient, private configInitService: ConfigInitService) {
  }

  private readonly END_POINT = this.configInitService.apiBaseUrl + '/api/patient';

  private readonly END_POINT_XML1 = this.configInitService.apiBaseUrl + '/api/xml1';

    private readonly END_POINT_XML2 = this.configInitService.apiBaseUrl + '/api/xml2';

    private readonly END_POINT_XML3 = this.configInitService.apiBaseUrl + '/api/xml3';

    private readonly END_POINT_XML4 = this.configInitService.apiBaseUrl + '/api/xml4';

    private readonly END_POINT_XML5 = this.configInitService.apiBaseUrl + '/api/xml5';

    private readonly END_POINT_XML6 = this.configInitService.apiBaseUrl + '/api/xml6';

  private readonly END_POINT_CLINICAL = this.configInitService.apiBaseUrl + '/api/clinicalservices';

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
  findById(id: string){
    const url = this.END_POINT + "/" + id;
    return this.http.get<any>(url,
      {responseType: "json"}
    );
  }

  findClinicalById(searchDto: SearchObject): Observable<any> {
    const url = this.END_POINT_CLINICAL + "/searchByPatient"
    return this.http.post<any>(url, searchDto,
      {responseType: "json"}
    );
  }

  findByXML1(id: string){
    const url = this.END_POINT_XML1 + "/getByInsuranceAssessmentFile/" + id;
    return this.http.get<any>(url,
      {responseType: "json"}
    );
  }

  findByXML2(id: string){
    const url = this.END_POINT_XML2 + "/getByInsuranceAssessmentFile/" + id;
    return this.http.get<any>(url,
      {responseType: "json"}
    );
  }

  findByXML3(id: string){
    const url = this.END_POINT_XML3 + "/getByInsuranceAssessmentFile/" + id;
    return this.http.get<any>(url,
      {responseType: "json"}
    );
  }

  findByXML4(id: string){
    const url = this.END_POINT_XML4 + "/getByInsuranceAssessmentFile/" + id;
    return this.http.get<any>(url,
      {responseType: "json"}
    );
  }

  findByXML5(id: string){
    const url = this.END_POINT_XML5 + "/getByInsuranceAssessmentFile/" + id;
    return this.http.get<any>(url,
      {responseType: "json"}
    );
  }

  findByXML6(id: string){
    const url = this.END_POINT_XML6 + "/getByInsuranceAssessmentFile/" + id;
    return this.http.get<any>(url,
      {responseType: "json"}
    );
  }
}
