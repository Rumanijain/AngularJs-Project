import { Injectable }    from '@angular/core';
import { Headers, Http,Response } from '@angular/http';

import 'rxjs/add/operator/map';


@Injectable()
export class NewsService{
//newsdaily="";
//  private headers = new Headers({'Content-Type': 'application/json'});
   //newsUrl = 'https://newsapi.org/v1/articles?source='+ this.newsdaily +'&apiKey=f92aea304ced4ee9b4d1d92c9bc9126f';  // URL to web api

  constructor(private http: Http) { }

  getnews(newsdaily:any) {
    if(newsdaily === ""){
      window.alert("please enter valid value");
    } else {
    return this.http.get('https://newsapi.org/v1/articles?source='+ newsdaily +'&apiKey=f92aea304ced4ee9b4d1d92c9bc9126f')
               .map((res:Response) =>res.json());
  }}
}