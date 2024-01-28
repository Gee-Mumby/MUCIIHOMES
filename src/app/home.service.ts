import { Injectable } from '@angular/core';
import{Home} from './homes';
import { HOMES } from './mock-homes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class HomeService {

  constructor(private messageService: MessageService) {}
  
  getHomes():  Observable<Home[]>  {
    const homes = of(HOMES);
    this.messageService.add('HomeService: fetched homes');
    return homes; 
  }

  getHome(id: number): Observable<Home> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const home = HOMES.find(h => h.id === id)!;
    this.messageService.add(`HomeService: fetched home id=${id}`);
    return of(home);
  }
}

