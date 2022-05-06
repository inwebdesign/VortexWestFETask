import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { bookSubmitionSuccess } from 'src/app/store/actions/shared.actions';
import { isBookSubmited } from 'src/app/store/selectors/shared.selectors';
import { sharedAppState } from 'src/app/store/state';
import { ProgressService } from './progress.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate, CanActivateChild, CanLoad {
  isBookSubmited = false
  constructor(private progressService: ProgressService, private route: Router, private store: Store<sharedAppState>){
    this.store.select(isBookSubmited).subscribe(res => this.isBookSubmited = res)
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.progressService.step > 0 || this.progressService.step > 1 || this.progressService.step >= 2 || this.isBookSubmited) {
        return true;
      }
    this.route.navigateByUrl('home')
    return false;
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return true;

  }
}
