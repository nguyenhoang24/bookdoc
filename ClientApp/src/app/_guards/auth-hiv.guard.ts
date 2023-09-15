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
export class AuthGuardHIV implements CanActivate,CanActivateChild {
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.tokenStorage.getToken()) {
      if(this.tokenStorage.getIsHIV()){
        return true;
      }else if(this.tokenStorage.getIsVAAC()){
        this.router.navigate(['ttyt/dashboard'])
        return false;
      }
    }
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }

  constructor(private router: Router, private tokenStorage: TokenStorageService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.tokenStorage.getToken()) {
      if(this.tokenStorage.getIsHIV()){
        return true;
      }else if(this.tokenStorage.getIsVAAC()){
        this.router.navigate(['ttyt/dashboard'])
        return false;
      }
    }
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
