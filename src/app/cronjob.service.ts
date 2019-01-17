import {Injectable} from '@angular/core';
import {Observable, throwError, of, EMPTY} from 'rxjs';
import {map, catchError, tap} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LogService} from './log.service';
import {Cronjob, Cronjobs} from './model/cronjob';


const url = 'api/pipeline';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CronjobService {
  constructor(private http: HttpClient, private logger: LogService) {
  }

  listByPipeline(pipeline: string): Observable<Cronjob[]> {
    // return this.http.get(url, {responseType: 'text'}).pipe(
    //   map(resp => JSON.parse(resp).map(p => Cronjob.createFrom(p)))
    // );
    return of(Cronjobs);
  }

  create(p: Cronjob): Observable<any> {
    // return this.http.post(url, p, httpOptions).pipe(
    //   tap(resp => this.logger.info(resp['msg'])),
    //   catchError(resp => {
    //     this.logger.error(`create cronjob failed.`, JSON.stringify(resp['error']));
    //     return throwError(resp['error']);
    //   })
    // );
    Cronjobs.push(p);
    return of('');
  }

  delete(p: Cronjob): Observable<any> {
    // return this.http.delete(`${url}/${p.name}`, httpOptions).pipe(
    //   tap(resp => this.logger.info(resp['msg'])),
    //   catchError(resp => {
    //     this.logger.error(`delete cronjob failed.`, JSON.stringify(resp['error']));
    //     return throwError(resp['error']);
    //   })
    // );
    console.log('delete ' + JSON.stringify(p));
    const idx = Cronjobs.findIndex(j => j.name === p.name);
    if (idx > -1) {
      Cronjobs.splice(idx, 1);
    }
    return of('');
  }
}
