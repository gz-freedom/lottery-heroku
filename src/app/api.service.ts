import { Injectable } from '@angular/core';
import { environment } from "environments/environment";
import { Http, Jsonp } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

const lotteryUrl = environment.lotteryUrl;

@Injectable()
export class ApiService {
    constructor(
        private http: Http,
        private jsonp: Jsonp
    ){}

    public getLatestLotteryNumbers():Observable<any> {
        return this.jsonp.get(lotteryUrl + "?callback=JSONP_CALLBACK").map(res => {
          return res.json();
        });
    }
}
