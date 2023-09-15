import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(
    private http: HttpClient
  ) { }
  getMapVN(): Observable<any> {
    return this.http.get('assets/mapDataJSON/gadm36_VNM_1.json')
  }

  getMapByCodeDrilldown(provinceCode: string | number | undefined): Observable<any> {
    if (provinceCode) {
      return this.http.get('assets/mapDataJSON/district/' + provinceCode + '.json')
    } else {
      return;
    }
  }

  getMapByCode(provinceCode: string | undefined, districtCode: string | undefined): Observable<any> {
    if (provinceCode && districtCode) {
      return this.http.get('assets/mapDataJSON/district/' + provinceCode + '.json')
    }
    if (provinceCode) {
      return this.http.get('assets/mapDataJSON/gadm36_VNM_2.json')
    }
    return this.http.get('assets/mapDataJSON/gadm36_VNM_1.json')
  }

}
