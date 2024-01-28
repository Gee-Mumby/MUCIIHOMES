import { Component, OnInit } from '@angular/core';
import { Home } from '../homes';
import { HomeService } from '../home.service';
import { MessageService } from '../message.service'; //can't remember at what step i needed to add this.

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.css'] 
})

export class HomesComponent implements OnInit{

homes: Home[] = [];

constructor(private homeService: HomeService,private messageService: MessageService) {} //we've added private msg service???

ngOnInit(): void{
  this.getHomes();
  }

getHomes(): void {
    this.homeService.getHomes()
        .subscribe(homes => this.homes = homes)

  }
}



