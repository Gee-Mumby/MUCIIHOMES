import { Component, OnInit } from '@angular/core';
import { Observable, Subject} from 'rxjs';
import { Subscribable } from 'rxjs/internal/types';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import { Home } from '../homes';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home-search',
  templateUrl: '../home-search/home-search.component.html',
  styleUrl: './home-search.component.css'
})
export class HomeSearchComponent implements OnInit{
  home$!: Observable<Home[]>;
  private searchTerms = new Subject<string>();
  homes$: any;
  
  constructor(private homeService: HomeService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.homes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.homeService.searchHomes(term)),
    );
  }
}
