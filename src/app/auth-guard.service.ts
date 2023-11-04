import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth-service";
@Injectable()
export class AuthGuardService implements CanActivateFn{
    constructor(private authService: AuthService,private router:Router) {}

    canAdctivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
        ) : Observable<boolean> | Promise<boolean> | boolean{
            return this.authService.isAuthenticated()
                .then(
                    (authentcated : boolean)=>{
                        if(authentcated){
                            return true;
                        }else{
                            return this.router.navigate(['/']);
                        }
                    }
                );
        }
}