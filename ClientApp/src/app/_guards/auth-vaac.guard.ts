import {Injectable} from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";
import {TokenStorageService} from "../_services/token-storage.service";
import {Observable} from "rxjs";

@Injectable()
export class AuthGuardVaac implements CanActivate,CanActivateChild {
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.tokenStorage.getToken()) {
      if(this.tokenStorage.getIsVAAC()){
        return true;
      }else if(this.tokenStorage.getIsTTYT()){
        this.router.navigate(['/ttyt/file-management'])
        return false;
      }else{
        return false;
      }
    }
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }

  constructor(private router: Router, private tokenStorage: TokenStorageService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.tokenStorage.getToken()) {
      if(this.tokenStorage.getIsVAAC()){
        return true;
      }else if(this.tokenStorage.getIsTTYT()){
        this.router.navigate(['/ttyt/file-management'])
        return false;
      }else{
        return false;
      }
    }
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
