import {Routes,RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {LandingComponentComponent} from './landing-component/landing-component.component';

 const routes:Routes = [
     {path:'login',component:LoginComponent},     
     {path:'',component: LandingComponentComponent}

 ];
 export const routing = RouterModule.forRoot(routes);


