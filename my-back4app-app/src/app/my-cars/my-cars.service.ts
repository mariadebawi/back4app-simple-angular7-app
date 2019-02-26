import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { map,catchError } from "rxjs/operators";
import { Cars } from './my-cars.model';

@Injectable({
  providedIn: 'root'
})
export class MyCarsService {
	customersObservable : Observable<Cars[]>;

  	constructor(private http: HttpClient) { }

  	public getShowAllCars(): Observable<Cars[]> {

	   return this.http.get<Cars[]>("http://localhost:3000/cars");
	}

	public getQuery(color: string): Observable<Cars[]> {

	   return this.http.get<Cars[]>("http://localhost:3000/cars/" + color);
	}
}
