import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ILaunch } from '../../app/Models/ILaunch';
import { ICompany } from '../../app/Models/ICompany';
import { IRockets } from "../../app/Models/IRockets";

/*
  Generated class for the SpacexApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SpacexApiProvider {

  baseUrl = "https://api.spacexdata.com/v2";

  constructor(private http: HttpClient) {

  }

  getAllLaunches(params : any): Observable<ILaunch[]> {
    const endpointUrl = `${this.baseUrl}/launches/all`;
    const httpParams  = Object.getOwnPropertyNames(params).reduce((p,key) => p.set(key, params[key]), new HttpParams());
    return this.http.get<ILaunch[]>(endpointUrl, { params: httpParams });
  }

  getCompany(params : any): Observable<ICompany[]> {
    const endpointUrl = `${this.baseUrl}/info`;
    const httpParams  = Object.getOwnPropertyNames(params).reduce((p,key) => p.set(key, params[key]), new HttpParams());
    return this.http.get<ICompany[]>(endpointUrl, { params: httpParams });
  }

  getRocket(params : any): Observable<IRockets[]> {
    const endpointUrl = `${this.baseUrl}/rockets`;
    const httpParams  = Object.getOwnPropertyNames(params).reduce((p,key) => p.set(key, params[key]), new HttpParams());
    return this.http.get<IRockets[]>(endpointUrl, { params: httpParams });
  }



}
