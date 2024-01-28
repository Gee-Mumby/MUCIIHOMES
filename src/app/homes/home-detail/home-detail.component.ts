import { Component, Input } from '@angular/core';
import { Home } from '../../homes';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrl: './home-detail.component.css'
})


export class HomeDetailComponent {
  @Input() home?: Home;
}
