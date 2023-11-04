import {Component, ElementRef, ViewChild} from '@angular/core'
import { NgModel } from '@angular/forms';
import { Employee } from '../employee/employee.model';
import { LoggingService } from '../logging-service';
import { AdminService } from '../admin-service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css'],
    providers: []
})
export class AdminComponent {
    username: string;
    password: string;

    constructor(private loggingService: LoggingService,private adminSerivce:AdminService, private router:Router) {}

    isAdmin : boolean = false;

    validateAdmin() {
        this.isAdmin = this.adminSerivce.validateAdmin(this.username,this.password);
        if(this.isAdmin){
            this.router.navigate(['/home']);
        }
    }

    
}