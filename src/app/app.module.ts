import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from "@angular/http";
import { AppService } from "./app.service";
import { ApiService } from "./api.service";
import { AppComponent } from './app.component';
import { AppDirective } from "./app.directive";
import { LuckyNumbersComponent } from './lucky-numbers/lucky-numbers.component';
import { LotteryResultComponent } from './lottery-result/lottery-result.component';

@NgModule({
  declarations: [
    AppComponent,
    AppDirective,
    LuckyNumbersComponent,
    LotteryResultComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
