import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { CustomerService } from '../customer.service';
import { Router, TitleStrategy } from '@angular/router';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
loginid:String;
password:String;

customer:any;
customers:any;
  constructor(private service:CustomerService,private router:Router) {
    this.loginid='';
    this.password='';

   }

  ngOnInit(): void {
  }
loginSubmit(){
  if(this.loginid == 'HR' &&  this.password =='HR'){
    alert('Login success');
  }else{
    alert('Login Failed')
  }

}
async submitForm(loginForm:any){
  console.log(loginForm);
  await this.service.customerLogin(loginForm).then((data: any) =>{this.customer=data});
  console.log(this.customer);

  if(this.customer ! =null){
    this.service.setUserLoggedIn();
    this.router.navigate(['homepage']);

  }else{
    alert('Login Failed!!!');
  }
}
}
