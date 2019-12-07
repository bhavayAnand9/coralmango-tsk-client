import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UploadServiceService as UploadService} from "../upload-service.service";
import {Router} from '@angular/router';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  file:File = null;
  title = null;
  description = null;

  constructor(private _upload: UploadService, private _http: HttpClient, private router: Router) { }

  ngOnInit() {

  }

  onFileSelected(event){
    this.file = <File>event.target.files[0];
  }

  upload(){
    const fd = new FormData();
    fd.append('file', this.file, this.file.name);
    fd.append('title', this.title);
    fd.append('description', this.description);

    this._upload.uploadFile(fd).subscribe(res => {
      console.log(res);
    });

    this.router.navigate(['/homepage']);
  }

}
