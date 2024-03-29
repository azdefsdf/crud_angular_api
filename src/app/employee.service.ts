import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8080/api/v1/employees";

  constructor(private httpClient: HttpClient) { }
  
  getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  createEmployee(employee: Employee): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, employee);
  }

  getEmployeeById(id: number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  }

  updateEmployee(id: number, employee: Employee): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<any>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  detailsEmployee(id: number): Observable<Employee> {
    const url = `${this.baseURL}/employees/${id}`;
    return this.httpClient.get<Employee>(url);
  }

  searchEmployee(id: number): Observable<Employee> {
    const url = `${this.baseURL}/employees/${id}`;
    return this.httpClient.get<Employee>(url);
  }
}