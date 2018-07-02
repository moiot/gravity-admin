import {Injectable} from '@angular/core';
import {CreatePipelineRequest, PipelineVO} from './model/pipeline';
import {Observable, throwError} from 'rxjs';
import {map, catchError, tap} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LogService} from './log.service';
import * as JSONbig from 'json-bigint';


const url = 'api/pipeline';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class PipelineService {
  constructor(private http: HttpClient, private logger: LogService) {
  }

  list(): Observable<PipelineVO[]> {
    return this.http.get(url, {responseType: 'text'}).pipe(
      map(resp => JSONbig.parse(resp).map(p => PipelineVO.createFrom(p)))
    );
  }

  get(id: number): Observable<PipelineVO> {
    return this.http.get(`${url}/${id}`, {responseType: 'text'}).pipe(
      map(resp => PipelineVO.createFrom(JSONbig.parse(resp)))
    );
  }

  create(p: CreatePipelineRequest): Observable<any> {
    return this.http.post(url, p, httpOptions).pipe(
      tap(resp => this.logger.info(resp['msg'])),
      catchError(resp => {
        this.logger.error(`create pipeline failed.`, JSON.stringify(resp['error']));
        return throwError(resp['error']);
      })
    );
  }

  update(p: PipelineVO): Observable<any> {
    p.status = null;
    return this.http.put(`${url}/${p.id}`, p, httpOptions).pipe(
      tap(resp => this.logger.info(resp['msg'])),
      catchError(resp => {
        this.logger.error(`update pipeline failed.`, JSON.stringify(resp['error']));
        return throwError(resp['error']);
      })
    );
  }

  resetFull(id: number): Observable<any> {
    return this.http.post(`${url}/${id}/resetfull`, httpOptions).pipe(
      tap(resp => this.logger.info(resp['msg'])),
      catchError(resp => {
        this.logger.error(`update pipeline failed.`, JSON.stringify(resp['error']));
        return throwError(resp['error']);
      })
    );
  }
}
