export class Employee{
    public id:number;
    public name: string;
    public email:string;
    public department: string;

    constructor(id:number,name:string, email:string, depart:string){
        this.id = id;
        this.name = name;
        this.email = email;
        this.department = depart;
    }
}