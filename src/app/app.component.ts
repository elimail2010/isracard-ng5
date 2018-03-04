import { Component , Injectable, OnInit} from '@angular/core';
import {IRepo} from './isracard-service.service'
import { IsracardServiceService } from './isracard-service.service';

 

import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import * as $ from 'jQuery';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/filter';

import { FormControl, Validators } from '@angular/forms';
@Component({ 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  
  public loading: boolean = false;
  private results: Observable<any>;
  public repos: Observable<any>;
  public searchField: FormControl;

  title = 'Isracard exam project - elisha levi (c)';

  MyRepo : any ;
  debugView : Boolean;

  

  constructor(private _isracardServiceService: IsracardServiceService){
   
  }
  submitForm(value: any){
    console.log(value);
  }
  ngOnInit(){
    console.log('init');
    
    this.debugView = false;
    


    this.searchField = new FormControl( '', [Validators.required, Validators.maxLength(10),Validators.minLength(3)]);
    
    this.results = this.searchField.valueChanges
      .filter(term => term)
      .filter (term => term.length >2)
      .debounceTime(1000)
      .distinctUntilChanged()
      .do( () => {this.loading = true; })
      .switchMap( term =>   this._isracardServiceService.getRepos(term))
      .do( () => {this.loading = false} )

      this.results.subscribe((x:any)=>{this.repos=x;console.log(this.repos)});



/*
    this._isracardServiceService.getRepos().subscribe(data => {
        console.log(data);
        this.MyRepo = data; 
        }, err => {
          console.log(err);
        }); */
  }

}
