import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
isUserLogged:boolean;
loginStatus:Subject<any>;
  constructor(private httpClient:HttpClient) { 
this.isUserLogged=false;
this.loginStatus=new Subject();

  }
  //showCustomers
getAllCustomers():any{
return this.httpClient.get('http://localhost:8088/getAllCustomers')
}
//Login
customerLogin(customer:any){
  return this.httpClient.get('http://localhost:4200/login/' + customer.emailId + '/' + customer.password).toPromise();

}
//Register
customerRegistration(customer:any){
  console.log("InService: " + customer.custName);
    return this.httpClient.post('http://localhost:8088/register', customer);

}
getLoginStatus() {
  return this.loginStatus.asObservable();
}
setUserLoggedIn() {
  this.isUserLogged = true;
}
setUserLoggedOut() {
  this.isUserLogged = false;
}
getUserLogged(): any {
  return this.isUserLogged;
}

}
