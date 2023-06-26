import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home.page',
  templateUrl: './home.page.component.html',
  styleUrls: ['./home.page.component.css']
})
export class HomePageComponent {
  title = 'Home Security Camera';

  constructor(private router : Router) {

  }

  goToPage(page: string) {
    this.router.navigate([page]);
  }
}

