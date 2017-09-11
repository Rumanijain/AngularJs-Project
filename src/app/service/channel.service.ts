import { Injectable }    from '@angular/core';
import { Headers, Http,Response } from '@angular/http';

import 'rxjs/add/operator/map';


@Injectable()
export class ChannelService {
//newsdaily="";
//  private headers = new Headers({'Content-Type': 'application/json'});
   //newsUrl = 'https://newsapi.org/v1/articles?source='+ this.newsdaily +'&apiKey=f92aea304ced4ee9b4d1d92c9bc9126f';  // URL to web api

  constructor(private http: Http) { }
  private url = 'https://newsapi.org/v1/sources?language=en';
  getchannel(channel:any){
    return this.http.get(this.url)
    .map((response:Response)=>response.json());
  }
}
