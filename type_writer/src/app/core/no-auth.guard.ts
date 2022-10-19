import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './services/user.service';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem('accessToken')) {
      // this.router.navigate(['/home']);
      return false;
    }

    return true;
  }
}