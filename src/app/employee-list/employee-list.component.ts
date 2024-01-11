import {ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Employee } from '../employee'
import { EmployeeService } from '../employee.service'
import { Router } from '@angular/router';
import { error } from 'console';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  searchText:any;
  employees: Employee[];


  // Properties for pagination
  p: number = 1;
  //itemsPerPage: number = 10; // Number of items to display per page

  // Your employee data
  //employees: any[] = [];

  
  constructor(private employeeService: EmployeeService,
    private refresh: ChangeDetectorRef,
    private router: Router,
    ) {}

  ngOnInit(): void {
    this.getEmployees();


  }

  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
      this.refresh.detectChanges();
    });
  }
  employeeDetails(id:number){
    this.router.navigate(['employee-details', id]);
  }
  updateEmployee(id: number){
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe( data => {
      console.log(data);
      this.router.navigate(['/employees']);
      this.employeeService.getEmployeesList().subscribe(data => {
        this.employees = data;
       
        this.refresh.detectChanges();
      });
      
    }, 
    error => console.log(error));
  }

}