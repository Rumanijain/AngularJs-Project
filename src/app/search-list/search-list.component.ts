import { Component,OnInit,Input } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
//import {NewsService} from '../service/news.service';
//import  {NewsData} from '../search-list/news';
//import {ExpressService} from '../service/express.service';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {
@Input('ref') ref:any;
  constructor() { }
 
  ngOnInit() {

  }

}
