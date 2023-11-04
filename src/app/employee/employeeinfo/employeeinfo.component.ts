import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { EmployeeService } from 'src/app/employee-service';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employeeinfo',
  templateUrl: './employeeinfo.component.html',
  styleUrls: ['./employeeinfo.component.css']
})
export class EmployeeinfoComponent {
  constructor(private route: ActivatedRoute,private employeeService: EmployeeService){}
  getEmployee: {id: number}
  employee: Employee[] = [];

  ngOnInit(){
    this.getEmployee = {
      id: this.route.snapshot.params['id'],
    }
    
    this.route.params
      .subscribe(
        (params:Params) => {
          this.getEmployee.id = params['id'];
        }
      );

      this.employee = this.employeeService.getEmployeebyID(this.getEmployee.id);
      console.log(this.employee);
  }
}
