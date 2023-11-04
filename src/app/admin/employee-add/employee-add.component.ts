import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { EmployeeService } from 'src/app/employee-service';
import { Employee } from 'src/app/employee/employee.model';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css'],
  providers: [EmployeeService]
})
export class EmployeeAddComponent {
  
  @ViewChild('nameInput') name: ElementRef;
  @ViewChild('emailInput') email: ElementRef;
  @ViewChild('departmentInput') department: ElementRef;

  constructor(private employeeService:EmployeeService){}
  addEmployeeItem(){
    const ingName = this.name.nativeElement.value;
    const ingEmail = this.email.nativeElement.value;
    const ingDepartment = this.department.nativeElement.value;
    const newEmployee = new Employee(0,ingName,ingEmail,ingDepartment);
    this.employeeService.addEmployee(newEmployee);
  }
}
