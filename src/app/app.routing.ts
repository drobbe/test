import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { LogoutComponent } from './views/logout/logout.component';
import { RegisterComponent } from './views/register/register.component';
import { RoleGuardServiceService as RoleGuard } from './role-guard-service.service';
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',

  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },  
  {
    path: 'logout',
    component: LogoutComponent,
    data: {
      title: 'logout'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home',
      //canActivate: [RoleGuard] 
    },
    children: [
      {
        path: 'base',
        loadChildren: './views/base/base.module#BaseModule',
         //canActivate: [RoleGuard] ,
      },
      {
        path: 'buttons',
        //canActivate: [RoleGuard] ,
        loadChildren: './views/buttons/buttons.module#ButtonsModule'
      },
      {
        path: 'charts',
        //canActivate: [RoleGuard] ,
        loadChildren: './views/chartjs/chartjs.module#ChartJSModule'
      },
      {
        path: 'dashboard',
        //canActivate: [RoleGuard] ,
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'icons',
        //canActivate: [RoleGuard] ,
        loadChildren: './views/icons/icons.module#IconsModule'
      },
      {
        path: 'notifications',
        //canActivate: [RoleGuard] ,
        loadChildren: './views/notifications/notifications.module#NotificationsModule'
      },
      {
        path: 'theme',
        //canActivate: [RoleGuard] ,
        loadChildren: './views/theme/theme.module#ThemeModule'
      },
      {
        path: 'widgets',
        //canActivate: [RoleGuard] ,
        loadChildren: './views/widgets/widgets.module#WidgetsModule'
      },
      // {
      //   path: 'botones',
      //   //canActivate: [RoleGuard] ,
      //   loadChildren: './views/botones/botones.module#BotonesModule'
      // }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
