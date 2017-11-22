import { Component, OnInit, ViewChild } from '@angular/core';
import { LuckyNumbersComponent } from "./lucky-numbers/lucky-numbers.component";
import { AppService } from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AppService]
})
export class AppComponent implements OnInit {
  title = '双色球兑奖系统';
  luckyNumbers;
  latestLotteryNumbers: string = "";
  @ViewChild(LuckyNumbersComponent) myLottery;

  constructor(
    private appService: AppService
  ) {}

  ngOnInit() {
    this.luckyNumbers = this.appService.getLuckNumbers();
  }

  getLatestLotteryNumbers() {
    this.appService.getLatestLotteryNumbers().subscribe(res => {
      this.latestLotteryNumbers = res.data[0];
      this.myLottery.updateLottery(res.data[0].opencode);
    });
  }
}
