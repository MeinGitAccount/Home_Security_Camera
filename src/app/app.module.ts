import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RoomsComponent } from './page/component/rooms/rooms.component';
import {AppRoutingModule} from "./app-routing.module";
import { HomePageComponent } from './page/component/home.page/home.page.component';
import { VideoComponent } from './page/component/video/video.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {InitService} from "./init.service";

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    HomePageComponent,
    VideoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [InitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
