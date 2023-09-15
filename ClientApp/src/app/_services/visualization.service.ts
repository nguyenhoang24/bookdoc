import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgxSpinnerService} from "ngx-spinner";
import {ToastrService} from "ngx-toastr";
import {ConfigInitService} from "../init/config-init.service";
import {catchError, map, of} from 'rxjs';
import {VisualizationSearch} from "../_interfaces/visualization";

@Injectable({
  providedIn: 'root'
})
export class VisualizationService {
  private BASE_FACILITY_URL= this.configInitService.baseUrlFacility;

  private BASE_URL = this.configInitService.apiBaseUrl + "/api/v1/visualizations"
  constructor(
    private configInitService: ConfigInitService,
    private http: HttpClient,
    private loading: NgxSpinnerService,
    private toast: ToastrService
  ) { }
  dashboardTotal(search: VisualizationSearch){
    this.loading.show();
    return this.http.post(this.BASE_URL+"/dashboard",search).pipe(
      map(value => {
        this.loading.hide();
        return value;
      }),catchError(error => {
        this.loading.hide();
        this.toast.error("Có lỗi xảy ra vui lòng thử lại","Thông báo!")
        return of(false);
      })
    );
  }
  dashboardDead(search: VisualizationSearch){
    this.loading.show();
    return this.http.post(this.BASE_URL+"/dashboard-dead",search).pipe(
      map(value => {
        this.loading.hide();
        return value;
      }),catchError(error => {
        this.loading.hide();
        this.toast.error("Có lỗi xảy ra vui lòng thử lại","Thông báo!")
        return of(false);
      })
    );
  }
  dashboardNew(search: VisualizationSearch){
    this.loading.show();
    return this.http.post(this.BASE_URL+"/dashboard-new",search).pipe(
      map(value => {
        this.loading.hide();
        return value;
      }),catchError(error => {
        this.loading.hide();
        this.toast.error("Có lỗi xảy ra vui lòng thử lại","Thông báo!")
        return of(false);
      })
    );
  }
  dashboardNewAge(search: VisualizationSearch){
    this.loading.show();
    return this.http.post(this.BASE_URL+"/dashboard-new-gender-old",search).pipe(
      map(value => {
        this.loading.hide();
        return value;
      }),catchError(error => {
        this.loading.hide();
        this.toast.error("Có lỗi xảy ra vui lòng thử lại","Thông báo!")
        return of(false);
      })
    );
  }
  dashboardNewPopulation(search: VisualizationSearch){
    this.loading.show();
    return this.http.post(this.BASE_URL+"/dashboard-new-population-transmission",search).pipe(
      map(value => {
        this.loading.hide();
        return value;
      }),catchError(error => {
        this.loading.hide();
        this.toast.error("Có lỗi xảy ra vui lòng thử lại","Thông báo!")
        return of(false);
      })
    );
  }
  dashboardAlive(search: VisualizationSearch){
    this.loading.show();
    return this.http.post(this.BASE_URL+"/dashboard-alive",search).pipe(
      map(value => {
        this.loading.hide();
        return value;
      }),catchError(error => {
        this.loading.hide();
        this.toast.error("Có lỗi xảy ra vui lòng thử lại","Thông báo!")
        return of(false);
      })
    );
  }
  dashboardRecentAge(search: VisualizationSearch){
    this.loading.show();
    return this.http.post(this.BASE_URL+"/dashboard-recency-by-age-and-gender",search).pipe(
      map(value => {
        this.loading.hide();
        return value;
      }),catchError(error => {
        this.loading.hide();
        this.toast.error("Có lỗi xảy ra vui lòng thử lại","Thông báo!")
        return of(false);
      })
    );
  }
  dashboardRecentPopulation(search: VisualizationSearch){
    this.loading.show();
    return this.http.post(this.BASE_URL+"/dashboard-recency-by-population-and-transmission",search).pipe(
      map(value => {
        this.loading.hide();
        return value;
      }),catchError(error => {
        this.loading.hide();
        this.toast.error("Có lỗi xảy ra vui lòng thử lại","Thông báo!")
        return of(false);
      })
    );
  }
  dashboardRecent(search: VisualizationSearch){
    this.loading.show();
    return this.http.post(this.BASE_URL+"/dashboard-recency",search).pipe(
      map(value => {
        this.loading.hide();
        return value;
      }),catchError(error => {
        this.loading.hide();
        this.toast.error("Có lỗi xảy ra vui lòng thử lại","Thông báo!")
        return of(false);
      })
    );
  }
  dashboardTreatment(search: VisualizationSearch){
    this.loading.show();
    return this.http.post(this.BASE_URL+"/dashboard-arv",search).pipe(
      map(value => {
        this.loading.hide();
        return value;
      }),catchError(error => {
        this.loading.hide();
        this.toast.error("Có lỗi xảy ra vui lòng thử lại","Thông báo!")
        return of(false);
      })
    );
  }
  dashboardTreatmentNew(search: VisualizationSearch){
    this.loading.show();
    return this.http.post(this.BASE_URL+"/nrc-Arv",search).pipe(
      map(value => {
        this.loading.hide();
        return value;
      }),catchError(error => {
        this.loading.hide();
        this.toast.error("Có lỗi xảy ra vui lòng thử lại","Thông báo!")
        return of(false);
      })
    );
  }
  dashboardTreatmentRecent(search: VisualizationSearch){
    this.loading.show();
    return this.http.post(this.BASE_URL+"/recent-Arv",search).pipe(
      map(value => {
        this.loading.hide();
        return value;
      }),catchError(error => {
        this.loading.hide();
        this.toast.error("Có lỗi xảy ra vui lòng thử lại","Thông báo!")
        return of(false);
      })
    );
  }
  dashboardCoInTB(search: VisualizationSearch){
    this.loading.show();
    return this.http.post(this.BASE_URL+"/dashboard-tb",search).pipe(
      map(value => {
        this.loading.hide();
        return value;
      }),catchError(error => {
        this.loading.hide();
        this.toast.error("Có lỗi xảy ra vui lòng thử lại","Thông báo!")
        return of(false);
      })
    );
  }
  dashboardCoInBC(search: VisualizationSearch){
    this.loading.show();
    return this.http.post(this.BASE_URL+"/dashboard-co-infection-bc",search).pipe(
      map(value => {
        this.loading.hide();
        return value;
      }),catchError(error => {
        this.loading.hide();
        this.toast.error("Có lỗi xảy ra vui lòng thử lại","Thông báo!")
        return of(false);
      })
    );
  }
  pageFacility(search: any){
    this.loading.show();
    return this.http.post(this.BASE_FACILITY_URL+"/public/service/organizations/search-by-page",search).pipe(
      map(value => {
        this.loading.hide();
        return value;
      }),catchError(error => {
        this.loading.hide();
        this.toast.error("Có lỗi xảy ra vui lòng thử lại","Thông báo!")
        return of(false);
      })
    );
  }
}
