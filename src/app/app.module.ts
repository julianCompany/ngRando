import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HikeModule} from './hike/hike.module';
import { HttpModule } from '@angular/http';
import { HomeModule } from './home/home.module';
import { RouterModule } from '@angular/router';
import { AppComponent }  from './app.component';
import { HomeComponent} from './home/home.component';
import { HikeListComponent} from './hike/hike-list.component';
import { PageNotFoundComponent} from './page-not-found.component';

@NgModule({
  imports:      [ BrowserModule,
                  HikeModule,
                  HttpModule,
                  HomeModule,
                  RouterModule.forRoot([
                    {path : 'home', component : HomeComponent},
                    {path : 'hikes', component : HikeListComponent},
                    {path : '', redirectTo : 'home', pathMatch :'full'},
                    {path : '**', component : PageNotFoundComponent}
                  ])],
  declarations: [ AppComponent, PageNotFoundComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
