import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  private readonly _userFilesURL;
  private readonly _userFileURL;
  private readonly _delUserFile;
  private readonly _shortUserFileUrl;

  constructor(private _http: HttpClient) {
    this._userFilesURL = environment.apiUrl + 'file/get-user-files';
    this._userFileURL = environment.apiUrl + 'file/get-user-file';
    this._delUserFile = environment.apiUrl + 'file/del-user-file';
    this._shortUserFileUrl = environment.apiUrl + 'file/get-url';
  }

  getFiles() {
    return this._http.post<any>(this._userFilesURL, {});
  }

  getFile(_id): Observable<Blob> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    return this._http.post<Blob>(this._userFileURL,
      {
        'file_id': _id
      }, {headers: headers, responseType: 'blob' as 'json'});
  }

  deleteFile(_id): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    return this._http.post<Blob>(this._delUserFile,
      {
        'file_id': _id
      }, {headers: headers});
  }

  shortenUrl(_id): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    return this._http.post<Blob>(this._shortUserFileUrl,
      {
        'file_id': _id
      }, {headers: headers});
  }

}
