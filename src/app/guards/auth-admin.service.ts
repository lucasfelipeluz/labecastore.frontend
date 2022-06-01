import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from '../admin/admin.service';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminService implements CanActivate{

  constructor(
    private adminService: AdminService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.adminService.getStatusAuth()){
      return true;
    }
    this.router.navigate(['/admin/login'])
    return false;
  }

}
