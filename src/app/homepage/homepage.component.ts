import {Component, OnInit} from '@angular/core';
import {HomepageService} from '../homepage.service';
import {File} from '../files.interface';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  files: Array<File> = [];
  fileUrl = undefined;

  constructor(private _homePageService: HomepageService) {
  }

  ngOnInit() {
    this._homePageService.getFiles().subscribe(
      res => {
        this.files = res.allFiles;
      },
      error => console.error(error)
    )
  }

  async getFile(_id: any, name: string) {
    this._homePageService.getFile(_id).subscribe(res => {
      let myBlob = new Blob([res], {type: 'octet/stream'});
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(myBlob);
      link.download = name;
      link.click();
    }, err => console.error);
  }

  async deleteFile(_id: string) {
    this._homePageService.deleteFile(_id).subscribe(res => {
      window.location.reload();
    }, err => console.error);
  }

  async shortenUrl(_id: string) {
    this._homePageService.shortenUrl(_id).subscribe(res => {
      alert(`File URL: http://localhost:8000/file/get-file/${res.shortUrl}`);
    });
  }

}
