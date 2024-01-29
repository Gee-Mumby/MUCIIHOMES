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
homeName: any;

constructor(private homeService: HomeService,private messageService: MessageService) {} //we've added private msg service???

ngOnInit(): void{
  this.getHomes();
  }

getHomes(): void {
    this.homeService.getHomes()
        .subscribe(homes => this.homes = homes)

  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.homeService.addHome({ name } as Home)
      .subscribe(home => {
        this.homes.push(home);
      });
  }

  delete(home: Home): void {
    this.homes = this.homes.filter(h => h !== home);
    this.homeService.deleteHome(home.id).subscribe();
  }
}



