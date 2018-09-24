//Other
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//Cosmetics
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module'; //Angular Material
import { BootstrapModule } from './modules/bootstrap.module'; // NG-Bootstrap

//Components
import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

//Directives
import { ExampleDirectiveDirective } from './directives/example/example-directive.directive';

//Pipes
import { ExamplePipe } from './pipes/example/example.pipe';

//Services
import { AuthService } from './services/auth/auth.service';
import { UserService } from './services/user/user.service';

//Routes
const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];


@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ExampleDirectiveDirective,
    ExamplePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    MaterialModule,
    BootstrapModule
  ],
  providers: [
    AuthService,
    UserService
  ]
})
export class AppModule { }
