import { Component, OnInit } from '@angular/core';
import {HomepageService} from '../homepage.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  files = [];

  constructor(private _homePageService: HomepageService) { }

  ngOnInit() {
    this._homePageService.getFiles().subscribe(
      res => {
        this.files = res;
        console.log(res.allFiles);
        console.log('ll');
      },
      error => console.error(error)
    )
  }

}
