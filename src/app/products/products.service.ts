import { Injectable } from "@angular/core";
import { IProducts } from "./IProducts";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})

export class productsService {
    private producstUrl = "https://my-json-server.typicode.com/sandeepganesana/sampledata/pluralsight";

    constructor (private http : HttpClient){}

    getProducts(): Observable<IProducts[]> {
        return this.http.get<IProducts[]>(this.producstUrl).pipe(
            tap(data => console.log('All' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    getProductById(id:number): Observable<IProducts[]> {
        return this.http.get<IProducts[]>(`${this.producstUrl}/${id}`).pipe(
            tap(data => console.log('All' + JSON.stringify(data))),
            catchError(this.handleError)
        )
    }

    private handleError(err : HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An Error Occured: ${err.error.message}`;
        }
        else {
            errorMessage = `Server returned code: ${err.status}, error message is ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}