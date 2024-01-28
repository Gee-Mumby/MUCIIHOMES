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
}

