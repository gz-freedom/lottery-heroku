import { Component, OnInit } from '@angular/core';
import { AppService } from "../app.service";

@Component({
  selector: 'app-lucky-numbers',
  templateUrl: './lucky-numbers.component.html',
  styleUrls: ['./lucky-numbers.component.scss']
})
export class LuckyNumbersComponent implements OnInit {
  luckyNumbers: any[] = [];

  latestLotteryNumbers: string = "";
  matchedBlue: number = 0;
  matchedRed: any[] = [];

  constructor(
    private appService: AppService
  ) {}

  ngOnInit() {
    let luckyNumbers = this.appService.getLuckNumbers();

    luckyNumbers.forEach((balls) => {
      let redBalls = balls.split("+")[0];
      let blueBall = +balls.split("+")[1];
      this.luckyNumbers.push({
        redBalls: redBalls.split(","),
        blueBall: blueBall
      });
    });
  }
  
  isMatchedRedBall(redBall) {
    return this.latestLotteryNumbers && !this.matchedRed.includes(parseInt(redBall));
  }
  updateLottery(latestLotteryNumbers) {
    this.latestLotteryNumbers = latestLotteryNumbers;
    this.matchedBlue = parseInt(latestLotteryNumbers.split("+")[1], 10);
    this.matchedRed = latestLotteryNumbers.split("+")[0].split(",").map(s => parseInt(s, 10));
  }
}
