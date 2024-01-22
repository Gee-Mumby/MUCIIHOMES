import { Component } from '@angular/core';
import { Home } from '../homes';


@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrl: './homes.component.css'
})

export class HomesComponent {
home: Home = {
  id: 1,
  name: 'Kilifi'

};
}
