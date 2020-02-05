import { Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import {AuthServiceService} from './auth-service.service';
import {LoginComponent} from './views/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardServiceService {
  isLoged: Boolean = false;
  constructor(public auth: AuthServiceService,public  router: Router, public login : LoginComponent) {

  }


  canActivate(): boolean {
    let ion = this;
    if(ion.auth.authenticated === false){
      ion.router.navigate(['login']);
      console.log("no 2 ",ion.auth.authenticated);
      return false;
    }
     console.log("si 2",ion.auth.authenticated);
    return true;

  }
}
