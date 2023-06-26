import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {
  title= 'Select a room';

  constructor(private router : Router) {

  }

  goToPage(page: string) {
    this.router.navigate([page]);
  }
}
