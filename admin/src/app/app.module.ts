import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './common/nav/nav.component';
import { FooterComponent } from './common/footer/footer.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ShellComponent } from './shell/shell.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SanctumInterceptor } from './services/sanctum.interceptor';
import { IconComponent } from './common/icon/icon.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    SidebarComponent,
    LoginComponent,
    ShellComponent,
    IconComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SanctumInterceptor, multi: true }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
