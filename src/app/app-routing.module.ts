import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import the AuthGuard
import { AuthGuard } from './auth/auth.guard';

import { LoginComponent }   from './login/login.component';
import { HomeComponent }   from './home/home.component';
import { ProtectedComponent }   from './protected/protected.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, outlet: 'popup' },
  { path: 'home', component: HomeComponent },
  { path: 'protected', component: ProtectedComponent,
    // Add this to guard this route
    canActivate: [
      AuthGuard
    ]
  },
  //{ path: 'detail/:id', component: HeroDetailComponent },
  //{ path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  // Add AuthGuard to the providers array
  providers: [AuthGuard]
})
export class AppRoutingModule { }
