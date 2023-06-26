import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {InitService} from "../../../init.service";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {
  title= 'Select a room';

  roomNames : string[] = [];

  constructor(private router : Router,
              private initService: InitService) {
  }

  ngOnInit() {
    this.initService.getAllRoomNames().subscribe(data => {
      this.roomNames = data;
    });
  }

  goToPage(page: string) {
    this.router.navigate([page]);
  }
}
