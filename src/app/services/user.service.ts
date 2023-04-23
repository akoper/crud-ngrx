import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from './../interfaces/user';
// import { HttpErrorHandler, HandleError } from './http-error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // user: User;
  url = 'https://jsonplaceholder.typicode.com/users';
  // handleError: HandleError;

  // constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
  constructor(private http: HttpClient) {
      // this.handleError = httpErrorHandler.createHandleError('UserService');
  }

  /** GET companies from the database */
  getUsers(): Observable<User[]> {
      console.log('user service GET users hit');
      return this.http.get<User[]>(this.url);
          // .pipe(catchError(this.handleError('getUsers', [])));
  }

  //   /** GET a company from the database */
  //   getCompany(id: string): Observable<any> {
  //     console.log('company service GET company id hit');
  //     const url = `${this.companyUrl}/${id}`;
  //     return this.http.get(url, httpOptions).pipe(
  //         map(this.extractData),
  //         catchError(this.handleError('getCompany', [])));
  // }

  // /** POST: add company to the database */
  // addCompany(company: Company): Observable<Company> {
  //     console.log('company service POST hit');
  //     return this.http.post<Company>(this.companyUrl, company, httpOptions)
  //         .pipe(catchError(this.handleError('addCompany', company)));
  // }

  // /** PUT: update the company on the database. Returns the updated company upon success. */
  // updateCompany(company: Company): Observable<Company> {
  //     const url = `${this.companyUrl}/${company._id}`;
  //     return this.http.put<Company>(url, company, httpOptions)
  //         .pipe(catchError(this.handleError('updateCompany', company)));
  // }

  // /** DELETE: delete the company from the database */
  // deleteCompany(id: string): Observable<any> {
  //     const url = `${this.companyUrl}/${id}`; // DELETE api/heroes/42
  //     return this.http.delete(url, httpOptions)
  //         .pipe(catchError(this.handleError('deleteHero')));
  // }

  private extractData(res: Response) {
      const body = res;
      return body || {};
  }
}
