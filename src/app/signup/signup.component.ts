import { Component, OnInit } from '@angular/core';
import {RegisterService} from './signup.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers:[RegisterService]
})
export class SignupComponent implements OnInit {

  constructor(private registerservice:RegisterService , private router:Router) {  }
data={};
ref:any;

addInfo(obj:any){
 	this.registerservice.register(obj);
 	this.login(obj);
 }


login(flag:any){
	console.log(flag);
	if (flag) {
		console.log("you are in if part");
		alert("sucessfully registered");
		this.router.navigateByUrl("/Login");
		// code...
	}
	else{
		console.log("you are in else part");
		alert("enter different email-id");
	}
	console.log("after"+flag);
}

  ngOnInit() {
  }

}

