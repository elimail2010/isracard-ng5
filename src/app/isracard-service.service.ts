import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Observable} from 'rxjs/Observable'

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { HttpInterceptor } from "../app/http-interceptor.service"

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export interface IRepo{
  reposResult:object;

 }

@Injectable()
export class IsracardServiceService {


  getRepos(term:string){
    //dev url:  'http://localhost:10741/api/github?q='
    //prod url :'http://webappisracard-dev.us-west-2.elasticbeanstalk.com/api/github?q='
    return this._http.get<IRepo>( 'http://isracardhub-env.s6ajhnqvhm.us-east-1.elasticbeanstalk.com/WebApp-isracard_deploy/api/GitHub?q='+term)
    .do((res:any)=>console.log('get items service donbe'))
    .map((res:any)=>res.reposResult.items) 
    .catch((err) => {
                
      // Do messaging and error handling here
     
      return Observable.throw(err)
  })  
   // .do(data =>console.log('All : ' + JSON.stringify(data))) .catch(this.handleError);
  }

  constructor(private _http:HttpClient) { }


  
  


}

