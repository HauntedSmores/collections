import {Routes,RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {LandingComponentComponent} from './landing-component/landing-component.component';
import {DashboardComponent} from './dashboard/dashboard.component'

 const routes:Routes = [
     {path:'login',component:LoginComponent},     
     {path:'',component: LandingComponentComponent},
     {path:'dashboard',component: DashboardComponent}

 ];
 export const routing = RouterModule.forRoot(routes);


