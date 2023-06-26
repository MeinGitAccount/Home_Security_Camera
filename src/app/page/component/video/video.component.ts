import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {InitService} from "../../../init.service";

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit{
  title = 'Videos';

  videoNames : string[] = [];

  constructor(private router : Router,
              private initService: InitService) {
  }

  ngOnInit() {
    this.initService.getAllVideoNames().subscribe(data => {
      this.videoNames = data;
    });
  }

  goToPage(page: string) {
    this.router.navigate([page]);
  }
}
