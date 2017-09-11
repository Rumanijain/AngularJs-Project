import { Component,Input, OnInit } from '@angular/core';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ExpressService} from '../service/express.service';

@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.css']
})
export class SearchDetailComponent implements OnInit {
@Input('new') new:any;
  constructor(private expressservice: ExpressService) { }
  
addcontent(obj:any){
 	this.expressservice.addfavNews(obj);
 }
  ngOnInit() {
  }

}


