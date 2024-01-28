import { Component, OnInit} from '@angular/core';
import { Home } from '../homes';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  homes: Home[] = [];

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.getHomes();
  }

  getHomes(): void {
    this.homeService.getHomes()
      .subscribe(homes => this.homes = homes.slice(1, 5));
  }
}
