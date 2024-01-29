import { NgModule } from '@angular/core';//Where NgModel is located
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { HomesComponent } from './homes/homes.component';
import { HomeDetailComponent } from './homes/home-detail/home-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component'; 
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HomeSearchComponent } from './home-search/home-search.component';

@NgModule({
  declarations: [
    AppComponent,
   HomesComponent,
   HomeDetailComponent,
   MessagesComponent,
   DashboardComponent,
   HomeSearchComponent,
   ],
  imports: [
    BrowserModule,
    FormsModule, //added when we imported the FormsModule symbol
    AppRoutingModule,
    HttpClientModule,

// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.

    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false })],
  // providers: []
  bootstrap: [AppComponent]
})
export class AppModule { }
