import { Component, ViewEncapsulation } from '@angular/core';
import { EmployeeService } from './employee-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [EmployeeService]
})
export class AppComponent {
  title = 'AngularEMP';
  selectedTab = "admin";
  
  onSelectedTab(value: string){
    this.selectedTab = value;
  }
  


}
