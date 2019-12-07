import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UploadServiceService as UploadService} from "../upload-service.service";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  selectedFile:File = null;
  title = null;
  description = null;

  constructor(private _upload: UploadService, private _http: HttpClient) { }

  ngOnInit() {

  }

  onFileSelected(event){
    this.selectedFile = <File>event.target.files[0];
  }

  upload(){
    const fd = new FormData();
    fd.append('document', this.selectedFile, this.selectedFile.name);
    fd.append('title', this.title);
    fd.append('description', this.description);

    this._upload.uploadFile(fd).subscribe(res => {
      console.log(res);
    });
  }

}
