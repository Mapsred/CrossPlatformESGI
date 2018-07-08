import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ILaunch } from '../../app/Models/ILaunch';
import { ICompany } from '../../app/Models/ICompany';
import { IRockets } from "../../app/Models/IRockets";
import { ICapsule } from "../../app/Models/ICapsule";
import { ILaunchpad } from "../../app/Models/ILaunchpad";

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

  getRocketDetail(params : any, rocket: any): Observable<IRockets> {
    const endpointUrl = `${this.baseUrl}/rockets/`+rocket;
    const httpParams  = Object.getOwnPropertyNames(params).reduce((p,key) => p.set(key, params[key]), new HttpParams());
    return this.http.get<IRockets>(endpointUrl, { params: httpParams });
  }

  getCapsule(params : any): Observable<ICapsule[]> {
    const endpointUrl = `${this.baseUrl}/capsules`;
    const httpParams  = Object.getOwnPropertyNames(params).reduce((p,key) => p.set(key, params[key]), new HttpParams());
    return this.http.get<ICapsule[]>(endpointUrl, { params: httpParams });
  }

  getLaunchpas(params : any): Observable<ILaunchpad[]> {
    const endpointUrl = `${this.baseUrl}/launchpads`;
    const httpParams  = Object.getOwnPropertyNames(params).reduce((p,key) => p.set(key, params[key]), new HttpParams());
    return this.http.get<ILaunchpad[]>(endpointUrl, { params: httpParams });
  }

  getNextLaunch(): Observable<ILaunch> {
    const endpointUrl = `${this.baseUrl}/launches/next`;
    return this.http.get<ILaunch>(endpointUrl);
  }

  getLatestLaunch(): Observable<ILaunch> {
    const endpointUrl = `${this.baseUrl}/launches/latest`;
    return this.http.get<ILaunch>(endpointUrl);
  }
}
