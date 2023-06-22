import { NgModule } from '@angular/core'
import {RouterModule, Routes} from "@angular/router";
import {RoomsComponent} from "./page/component/rooms/rooms.component";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {HomePageComponent} from "./page/component/home.page/home.page.component";
import {VideoComponent} from "./page/component/video/video.component";

const routerConfigs: Routes = [
  { path: '', redirectTo: '\home', pathMatch: "full"},
  { path: 'home', component: HomePageComponent},
  { path: 'rooms', component: RoomsComponent},
  { path: 'videos', component: VideoComponent},
]

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routerConfigs)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
