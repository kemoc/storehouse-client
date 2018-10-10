import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse, HttpUrlEncodingCodec} from '@angular/common/http';
import {from, Observable, of} from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import {endpoint, httpOptions} from '../remoteapis/remoteapi';

@Injectable({
  providedIn: 'root'
})

export class RestService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getProducts(): Observable<any> {
    return this.http.get(endpoint + '/item/list/').pipe(
      map(this.extractData));
  }
  getNoAmountProducts(): Observable<any> {
    return this.http.get(endpoint + '/item/list/withNoAmount/').pipe(
      map(this.extractData));
  }
  getMinimumAmountProducts(minAmount: number): Observable<any> {
    return this.http.get(endpoint + '/item/list/withMinAmount/'+minAmount).pipe(
      map(this.extractData));
  }

  getProduct(id): Observable<any> {
    return this.http.get(endpoint + '/item/' + id).pipe(
      map(this.extractData));
  }

  addProduct (product): Observable<any> {
    //console.log(product);
    return this.http.post<any>(endpoint + '/item/', JSON.stringify(product), httpOptions).pipe(
      tap((product) => console.log(`added product w/ id=${product.id}`)),
      catchError(this.handleError<any>('addProduct'))
    );
  }

  updateProduct (id, product): Observable<any> {
    //console.log(product);
    return this.http.patch(endpoint + '/item/' + id, JSON.stringify(product), httpOptions).pipe(
      tap(_ => console.log(`updated product id=${id}`)),
      catchError(this.handleError<any>('updateProduct'))
    );
  }

  deleteProduct (id): Observable<any> {
    return this.http.delete<any>(endpoint + '/item/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted product id=${id}`)),
      catchError(this.handleError<any>('deleteProduct'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      //console.log("Asdf");
      //console.log(error);

      throw error;
      // Let the app keep running by returning an empty result.
      return of(error as T);
    };
  }
}
