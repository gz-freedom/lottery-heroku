import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lottery-result',
  templateUrl: './lottery-result.component.html',
  styleUrls: ['./lottery-result.component.scss']
})
export class LotteryResultComponent implements OnInit {
  @Input() latestLotteryNumbers: any = {};
  constructor() { }

  ngOnInit() {

  }

}
