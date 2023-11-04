import { Admin } from "./admin/admin.model";
import { Injectable } from "@angular/core";
@Injectable()
export class AdminService{
    validAdmin: boolean = false;

    admins: Admin[] = [
        new Admin('Aditya','123','adi@example.com')
    ]
    
    validateAdmin(username:string, password:string):boolean{
        if(this.admins.filter(item => (item.username == username) && (item.password == password)).length>0){
            this.validAdmin = true;
            return true;
        }
        this.validAdmin = false;
        return false;

    }

}