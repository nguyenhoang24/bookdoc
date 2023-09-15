import {Injectable} from '@angular/core';
import {ConfigInitService} from "../init/config-init.service";
import {HttpClient} from "@angular/common/http";
import {NgxSpinnerService} from "ngx-spinner";
import {ToastrService} from "ngx-toastr";
import {catchError, map, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductManualService {
  private BASE_URL = this.configInitService.apiBaseUrl + "/api/v1/product-manuals"
  constructor(
    private configInitService: ConfigInitService,
    private http: HttpClient,
    private loading: NgxSpinnerService,
    private toast: ToastrService
  ) { }
  documentTT05(url: string){
    this.loading.show();
    return this.http.get(this.BASE_URL+url,{ responseType: 'blob' }).pipe(
      map(value => {
        this.loading.hide();
        return value;
      }),catchError(error => {
        this.loading.hide();
        this.toast.error("Có lỗi xảy ra vui lòng thử lại sau","Thông báo!")
        return of(false);
      })
    );
  }
}
