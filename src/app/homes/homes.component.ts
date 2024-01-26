import { Component } from '@angular/core';
import { HOMES } from '../mock-homes';
import { Home } from '../homes';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.css'] 
})

export class HomesComponent {
homes=HOMES;
selectedHome?: Home;
onSelect(home: Home): void {
  this.selectedHome = home;
}
}