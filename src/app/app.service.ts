import { Injectable } from '@angular/core';
import { environment } from "../environments/environment";
import { ApiService } from "./api.service";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

const myLuckyNumbers = [
  "5,24,28,30,32,33+13",
  "1,2,4,14,21,24+13",
  "2,6,8,9,12,25+2",
  "2,9,16,18,29,32+9",
  "18,24,26,30,32,33+15",
  "1,5,6,12,26,28+11",
  "1,4,14,19,29,32+7",
  "8,12,16,18,22,33+5",
  "3,4,7,14,18,24+13",
  "1,3,4,5,17,29+12"
];

@Injectable()
export class AppService {

  constructor(
    private apiService: ApiService
  ) { }
  
  getLuckNumbers() {
    return myLuckyNumbers;
  }

  getLatestLotteryNumbers():Observable<any> {
    return this.apiService.getLatestLotteryNumbers();
  }

}
