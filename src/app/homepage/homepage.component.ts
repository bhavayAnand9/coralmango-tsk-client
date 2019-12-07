import {Component, OnInit} from '@angular/core';
import {HomepageService} from '../homepage.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']

})
export class HomepageComponent implements OnInit {

  files = [];
  abc: any = {};
  fileUrl = undefined;

  constructor(private _homePageService: HomepageService, private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this._homePageService.getFiles().subscribe(
      res => {
        this.files = res;
        console.log(res.allFiles);
      },
      error => console.error(error)
    )
  }

  async getFile(_id: any) {
    console.log(_id);
    this.abc.file_id = _id;
    this._homePageService.getFile(_id).subscribe(res => {
      let myBlob = new Blob([res], {type: 'octet/stream'});
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(myBlob);
      link.click();
    }, err => console.error);
  }

}
