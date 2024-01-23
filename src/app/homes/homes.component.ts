import { Component } from '@angular/core';
import { HOMES } from '../mock-homes';


@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrl: './homes.component.css',
}
)
export class HomesComponent {
homes = HOMES;
}