import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  private _userFilesURL = 'http://localhost:8000/file/get-user-files';
  private _userFileURL = 'http://localhost:8000/file/get-user-file';
  private _delUserFile = 'http://localhost:8000/file/del-user-file';
  private _shortUserFileUrl = 'http://localhost:8000/file/get-url';

  constructor(private _http: HttpClient) {
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
