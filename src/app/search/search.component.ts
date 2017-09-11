import { Component,EventEmitter,Input,Output, OnInit } from '@angular/core';
import {ChannelService} from '../service/channel.service';
import {NewsService} from '../service/news.service';
import { Headers, Http,Response } from '@angular/http';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() onClick=new EventEmitter<any>();

  constructor(private channelservice: ChannelService, private newsservice: NewsService) {}
  channel="";
  data="";
  temp:any="";
  ref="";
  newsdaily="";
  channellist(a:string){
      this.channelservice.getchannel(a)
      .subscribe(data=>{this.data=data;
      })
   }
   newSearch():void{
    this.newsservice.getnews(this.newsdaily)
    .subscribe(ref=>{
      console.log(ref);
      this.ref=ref;
    this.onClick.emit(this.ref);
    console.log(ref);

 });
   // this.onClick.emit(this.ref);
}

    

  ngOnInit() {
    //this.channellist(this.temp);
  }
 
 setChannel(event:Event){
   this.newsdaily = (<HTMLLIElement>event.target).id;
   this.newSearch();
   console.log((<HTMLLIElement>event.target).id);
    this.temp=(<HTMLLIElement>event.target).id;
    console.log(this.temp);
  this.channellist(this.temp);
  //this.onSelect.emit(this.temp);
  //console.log(this.temp);
 }


}
