import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Home } from '../app/homes';

@Injectable({
  providedIn: 'root',
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
  const homes = [
      {id:12, name:'Kisumu'},
      {id:13,name:'Nairobi'},
      {id:14, name:'Mombasa'},
      {id:15,name:'Nanyuki'},
      {id:16, name:'Narok'},
      {id:17, name:'Kiambu'},
      {id:18,name:'Marsabit'},
      {id:19,name:'Mtwapa'},
      {id:20,name:'Machakos'},
  ];
    return {homes};
  }

  // Overrides the genId method to ensure that a home always has an id.
  // If the homes array is empty,
  // the method below returns the initial number (11).
  // if the homes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(homes: Home[]): number {
    return homes.length > 0 ? 
    Math.max(...homes.map(home => home.id)) + 1 : 11;
  }
}