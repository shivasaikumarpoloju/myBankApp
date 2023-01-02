import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
 customers:any;

  constructor(private service:CustomerService,private router:Router) { 

  }

  ngOnInit(): void {

  }
  register(regForm:any){
    console.log(regForm);
    this.service.customerRegistration(regForm).subscribe((data:any) => {console.log(data);alert('Registration success')});
    this.router.navigate(['loginpage']);

  }

}
