import { Injectable } from '@angular/core';
import {ConfigInitService} from "../init/config-init.service";
import {HttpClient} from "@angular/common/http";
import {NgxSpinnerService} from "ngx-spinner";
import {ToastrService} from "ngx-toastr";
import {VisualizationSearch} from "../_interfaces/visualization";
import {catchError, map, of} from "rxjs";
import {DashboardSearch} from "../_interfaces/dashboard-hivinfo";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private BASE_URL = this.configInitService.apiBaseUrl + "/api/v1/dashboards"
  constructor(
    private configInitService: ConfigInitService,
    private http: HttpClient,
    private loading: NgxSpinnerService,
    private toast: ToastrService
  ) { }
  dashboardCommunityTest(){
    this.loading.show();
    return this.http.get(this.BASE_URL+"/community-test").pipe(
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
  dashboardScreeningTest(search: DashboardSearch){
    this.loading.show();
    return this.http.post(this.BASE_URL+"/screening-test",search).pipe(
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
  dashboardHivPersonIndex(){
    this.loading.show();
    return this.http.get(this.BASE_URL+"/hiv-person-index").pipe(
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
  dashboardHivPersonMap(search: DashboardSearch){
    this.loading.show();
    return this.http.post(this.BASE_URL+"/hiv-person-map",search).pipe(
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
  dashboardOverviewScreeningTest(search: DashboardSearch,type:number){
    let url = this.BASE_URL;
    if(type==1){
      url += "/overview-screening-test";
    }else if(type==2){
      url += "/screening-test-and-result"
    }else if(type==3){
      url += "/screening-positive-and-result"
    }else if(type==4){
      url += "/screening-transfer"
    }else if(type==5){
      url += "/confirmation-recent"
    }else if(type==6){
      url += "/confirmation-recent-diagnosis"
    }
    else{
      url += "/overview-screening-test";
    }
    this.loading.show();
    return this.http.post(url,search).pipe(
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
  dashboardConfirmation(search: DashboardSearch){
    this.loading.show();
    return this.http.post(this.BASE_URL+"/confirmation-test",search).pipe(
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
  dashboardHivPersonOverview(search: DashboardSearch,type:number){
    let url = this.BASE_URL;
    if(type==1){
      url += "/hiv-person-overview";
    }else if(type==2){
      url += "/hiv-person-overview-positive"
    }else if(type==3){
      url += "/hiv-person-overview-new"
    }else if(type==4){
      url += "/hiv-person-overview-alive"
    }else if(type==5){
      url += "/hiv-person-overview-dead"
    }
    this.loading.show();
    return this.http.post(url,search).pipe(
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
