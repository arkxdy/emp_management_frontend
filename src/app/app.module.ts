import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent} from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { HeaderComponent } from './header/header.component';
import { EmployeeAddComponent } from './admin/employee-add/employee-add.component';
import { InfoComponent } from './info/info.component';
import { DirectivesDirective } from './directives.directive';
import { LoggingService } from './logging-service';
import { EmployeeService } from './employee-service';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './admin/welcome/welcome.component';
import { EmployeeinfoComponent } from './employee/employeeinfo/employeeinfo.component';
import { AccessdeniedComponent } from './accessdenied/accessdenied.component';
import { AdminService } from './admin-service';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AdminComponent,
    AppComponent,
    EmployeeComponent,
    HeaderComponent,
    EmployeeAddComponent,
    InfoComponent,
    DirectivesDirective,
    WelcomeComponent,
    EmployeeinfoComponent,
    AccessdeniedComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [LoggingService, EmployeeService, AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
