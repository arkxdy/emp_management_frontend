import { EventEmitter, Injectable } from "@angular/core";
import { Employee } from "./employee/employee.model";
@Injectable()
export class EmployeeService {

    employees: Employee[] = [
        new Employee(1,"Aditya","adi@example.com","SDE1"),
        new Employee(2,"Priyanka","pri@example.com","HR"),
        new Employee(3,"Shaurya","sha@example.com","Finance"),
        new Employee(4,"Jane Smith","janesmith@example.com","Finance"),
        new Employee(5,"John Doe","johndoe@example.com","HR"),
        new Employee(6,"Shivang","shivang@example.com","SDE2"),
    ];

    addEmployee(emp:Employee){
        this.employees.push(emp);
        console.log(this.employees);
    }
     
    getEmployee(employeeList:Employee[]){
        return (this.employees.slice());
    }
    getEmployeebyID(id:number){
        return (this.employees.filter(x=>x.id==id));
    }
}
