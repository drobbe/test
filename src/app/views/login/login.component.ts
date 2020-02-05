import { Component, Injectable} from '@angular/core';
import {AuthServiceService} from '../../services/auth-service.service';
import {Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';


@Injectable({
	providedIn: 'root'
})


@Component({
	selector: 'app-dashboard',
	templateUrl: 'login.component.html'
})
export class LoginComponent { 


	private usuario = {
		email: null,
		password: null	
	}

	public email;
	
	constructor(public auth: AuthServiceService,public  router: Router){
		if(this.auth.authenticated==true){
			this.router.navigate(['/dashboard']);
		}
	}

	public login(){	
		let ion = this;
		let autorizacion = this.auth.emailLogin(this.usuario.email, this.usuario.password);


	}
}
