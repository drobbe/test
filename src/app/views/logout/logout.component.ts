import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from '../../services/auth-service.service';
import {Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(public  router: Router,public auth: AuthServiceService) { 
		this.auth.signOut();
		this.router.navigate(['/login']);
    	console.log(this.auth.currentUserId);
  }

  ngOnInit() {
  }

}
