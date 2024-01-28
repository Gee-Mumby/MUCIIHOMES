import { NgModule } from '@angular/core';//Where NgModel is located
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { HomesComponent } from './homes/homes.component';
import { HomeDetailComponent } from './homes/home-detail/home-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component'; 

@NgModule({
  declarations: [
    AppComponent,
   HomesComponent,
   HomeDetailComponent,
   MessagesComponent,
   DashboardComponent,
   ],
  imports: [
    BrowserModule,
    FormsModule, //added when we imported the FormsModule symbol
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
