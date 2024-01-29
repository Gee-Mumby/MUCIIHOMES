import { Injectable } from '@angular/core';
import{Home} from './homes';
import { HOMES } from './mock-homes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class HomeService {
 private homesUrl = 'api/homes';  // URL to web api

 httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

constructor(
  private http: HttpClient,
  private messageService: MessageService){}

  // get homes from the server
  getHomes():  Observable<Home[]>  {
      return this.http.get<Home []> (this.homesUrl).pipe(
        tap(_ => this.log('fetched homes')),
        catchError(this.handleError<Home[]>('getHomes',
        []))
      );
      }
  

  getHome(id: number): Observable<Home> {
    const url = `${this.homesUrl}/${id}`;
  return this.http.get<Home>(url).pipe(
    tap(_ => this.log(`fetched home id=${id}`)),
    catchError(this.handleError<Home>(`getHome id=${id}`))
  );
  }

/** PUT: update the home on the server */
updateHome(home: Home): Observable<any> {
  return this.http.put(this.homesUrl, home, this.httpOptions).pipe(
    tap(_ => this.log(`updated home id=${home.id}`)),
    catchError(this.handleError<any>('updateHome'))
  );
}

/** POST: add a new home to the server */
addHome(home: Home): Observable<Home> {
  return this.http.post<Home>(this.homesUrl, home, this.httpOptions).pipe(
    tap((newHome: Home) => this.log(`added home w/ id=${newHome.id}`)),
    catchError(this.handleError<Home>('addHome'))
  );
}

/** DELETE: delete the home from the server */
deleteHome(id: number): Observable<Home> {
  const url = `${this.homesUrl}/${id}`;

  return this.http.delete<Home>(url, this.httpOptions).pipe(
    tap(_ => this.log(`deleted home id=${id}`)),
    catchError(this.handleError<Home>('deleteHome'))
  );
}


/**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

/* GET homes whose name contains search term */
searchHomes(term: string): Observable<Home[]> {
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  return this.http.get<Home[]>(`${this.homesUrl}/?name=${term}`).pipe(
    tap(x => x.length ?
       this.log(`found homes matching "${term}"`) :
       this.log(`no homes matching "${term}"`)),
    catchError(this.handleError<Home[]>('searchHomes', []))
  );
}

  

  /** Log a HeroService message with the MessageService */
private log(message: string) {
  this.messageService.add(`HeroService: ${message}`);
}

}

