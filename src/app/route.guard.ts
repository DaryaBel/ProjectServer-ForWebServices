import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class RouteGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    console.log(route.url[0].path);
    console.log(localStorage.getItem("id"));
    let path = route.url[0].path;
    if (
      (path == "registration" || path == "login") &&
      localStorage.getItem("id") != null
    ) {
      this.router.navigate(["/"]);
      // return false;
    } else if (
      (localStorage.getItem("role") == null ||
      localStorage.getItem("role") == "3") &&
      (path == "add" ||
      path == "add-role" ||
      path == "list-user" ||
      path == "dashboard" ||
      path == "admin-comment" ||
      path == "archive"
           )) {
             this.router.navigate(["/"]);
             return true;
           } else if (
             (path == "add-role" ||
               path == "list-user" ||
               path == "dashboard" ||
               path == "admin-comment") &&
             localStorage.getItem("role") == "2"
           ) {
             this.router.navigate(["/"]);
            //  return false;
           } else return true;
  }
}
