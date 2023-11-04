import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EmployeeinfoComponent } from './employee/employeeinfo/employeeinfo.component';
import { EmployeeAddComponent } from './admin/employee-add/employee-add.component';
import { WelcomeComponent } from './admin/welcome/welcome.component';
import { InfoComponent } from './info/info.component';
import { EmployeeComponent } from './employee/employee.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
  { path: '',component:AdminComponent},
  { path: 'admin', component : AdminComponent},
  { path: 'employee', component: EmployeeComponent},
  { path: 'info', component: InfoComponent},
  { path : 'admin/add/employee', component: EmployeeAddComponent},
  { path : 'home', component: WelcomeComponent},
  { path : 'employee/:id', component: EmployeeinfoComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
