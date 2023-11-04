import { Component, Input } from '@angular/core';
import { Employee } from './employee.model';
import { EmployeeService } from '../employee-service';
import { LoggingService } from '../logging-service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: []
})
export class EmployeeComponent {
  
  public employees: Employee[] = [];

  constructor(private employeeService: EmployeeService,private loggingService: LoggingService) {}

  ngOnInit(){
    this.employees = this.employeeService.employees;
  }
  
  refrshEmpList(){
    this.employees = this.employeeService.employees;
  }

  addEmployee(emp:Employee){
    this.employees.push(emp);
  }

  editEmployee(Employee){
    this.loggingService.logAdminLogin("edit");
  }

  deleteEmployee(Employee){
    this.employees = this.employees.filter( item => item.id != Employee.id);
    this.loggingService.logAdminLogin("delete");
  }

}
