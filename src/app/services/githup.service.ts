import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithupService {

  viewData :any[];

  constructor(private _http : HttpClient) {}

  getdata():Observable<any> {
    return this._http.get("https://api.github.com/search/repositories?q={search_string}");
  }
}
