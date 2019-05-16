import { Injectable } from '@angular/core';
import {PreloadingStrategy, Route} from "@angular/router";
import {Observable} from "rxjs/observable";
import 'rxjs/add/observable/of';
import { timer } from 'rxjs/Observable/timer';
import 'rxjs/add/operator/mergeMap'

@Injectable({
  providedIn: 'root'
})
export class CustomPreloadWithDelayStrattegyService implements PreloadingStrategy {
  preload(route:Route , load:() =>Observable<any>):Observable<any>{

    if(route.data && route.data['preload']){
      console.log('Preload Patrh is:'+route.path+ ', delay:'+route.data['delay']);
      if(route.data['delay']){
        return timer(5000).mergeMap(()=>load());
      }
      return load();
    }
    else{
      return Observable.of(null)
    }

  }
  constructor() { }
}
