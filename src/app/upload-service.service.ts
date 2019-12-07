import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UploadServiceService {

  private _uploadURL = "http://localhost:8000/";

  constructor(private _http: HttpClient) {
  }

  uploadFile(fd) {
    return this._http.post(this._uploadURL, fd);
  }
}
