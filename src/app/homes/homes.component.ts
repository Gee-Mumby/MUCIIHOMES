import { Component } from '@angular/core';
import { HOMES } from '../mock-homes';
import{
/*...*/
NgFor,
/*...*/
} from '@angular/common';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrl: './homes.component.css',
  standalone:true,
  imports:[
    NgFor,
  ],
})

export class HomesComponent {
homes = HOMES;
}