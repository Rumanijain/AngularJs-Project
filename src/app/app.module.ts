import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SearchListComponent } from './search-list/search-list.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import {ChannelService} from './service/channel.service';
import{ NewsService} from './service/news.service';
import {ExpressService} from './service/express.service';
import { Headers, Http,Response } from '@angular/http';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { FavouritelistComponent } from './favouritelist/favouritelist.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MainnavBarComponent } from './mainnav-bar/mainnav-bar.component';


const appRoutes: Routes = [
{path:'' , redirectTo: '/Main' ,pathMatch:'full'},
{ path: 'favourite', component: FavouritelistComponent },
{path: 'search' , component: SearchDetailComponent},
{path: 'Register', component:SignupComponent},
{path: 'Login', component:LoginComponent},
{path: 'Home', component:HomeComponent},
{path: 'Main', component:MainnavBarComponent}


]
 

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchListComponent,
    SearchDetailComponent,
    FavouritelistComponent,
    FavouriteComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    MainnavBarComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,

        RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [ChannelService,NewsService,ExpressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
