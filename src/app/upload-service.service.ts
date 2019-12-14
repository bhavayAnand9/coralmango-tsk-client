import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadServiceService {

  private readonly _uploadURL;

  constructor(private _http: HttpClient) {
    this._uploadURL = environment.apiUrl + 'submit-file';
  }

  uploadFile(fd) {
    return this._http.post(this._uploadURL, fd);
  }
}
