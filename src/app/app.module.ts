import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //Where NgModel is located
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomesComponent } from './homes/homes.component'; //declaration of the HomesComponent removed because it is "unused"

@NgModule({
  declarations: [
    AppComponent,
   HomesComponent,//deleted HomesComponent since it cannot be part of the NgModule
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
