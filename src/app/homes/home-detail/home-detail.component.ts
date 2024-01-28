import { Component} from '@angular/core';
import { Home } from '../../homes';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HomeService } from '../../home.service';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrl: './home-detail.component.css'
})


export class HomeDetailComponent {
  // The error has been resolved by: Use the Non-null Assertion Operator: If you're confident that home will always be initialized before being used, you can use the non-null assertion operator (!) to tell TypeScript to trust you:
 
  home!: Home;

  // The ngOnInit and getHome were are also being used to call data in the homes.component 
  
  ngOnInit(): void {
    this.getHome();
  }
  
  getHome(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.homeService.getHome(id)
      .subscribe(home=> this.home = home);
  }

  goBack(): void {
    this.location.back();
  }

  // constructor is always placed inside the export class
  constructor(
    private route: ActivatedRoute,
    private homeService: HomeService,
    private location: Location
  ) {}
}
