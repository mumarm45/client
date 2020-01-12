import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private cust:Customer) { }
 
getcustomer(cust:Customer){
  console.log(cust);
}



  
}
