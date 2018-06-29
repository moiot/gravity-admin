import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as JSONbig from 'json-bigint';
import {ProcessVO} from './model/process';


const url = 'api/process';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ProcessService {

  constructor(private http: HttpClient) {
  }

  list(): Observable<ProcessVO[]> {
    return this.http.get(url, {responseType: 'text'}).pipe(
      map(resp => JSONbig.parse(resp).map(p =>
        ProcessVO.createFrom(p))
      )
    );
  }
}
