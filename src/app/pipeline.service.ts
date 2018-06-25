import {Injectable} from '@angular/core';
import {CreatePipelineRequest, PipelineVO} from './model/pipeline';
import {Observable, of, throwError} from 'rxjs';
import {map, catchError, tap} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LogService} from './log.service';

const url = 'api/pipeline';
const listMapper = map<object[], PipelineVO[]>(resp => resp.map(p => PipelineVO.createFrom(p)));
const mapper = map<object, PipelineVO>(resp => PipelineVO.createFrom(resp));

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
    return listMapper(this.http.get<object[]>(url));
  }

  get(id: number): Observable<PipelineVO> {
    return mapper(this.http.get(`${url}/${id}`));
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
