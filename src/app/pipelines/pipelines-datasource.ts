import {DataSource} from '@angular/cdk/collections';
import {MatPaginator, MatSort} from '@angular/material';
import {map} from 'rxjs/operators';
import {BehaviorSubject, Observable, merge} from 'rxjs';
import {PipelineVO} from '../model/pipeline';
import {PipelineService} from '../pipeline.service';

/**
 * Data source for the Pipelines view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class PipelinesDataSource extends DataSource<PipelineVO> {
  private readonly _data$: BehaviorSubject<PipelineVO[]>;
  private readonly _filter$ = new BehaviorSubject<string>('');

  constructor(private paginator: MatPaginator, private sort: MatSort, private pipelineService: PipelineService) {
    super();
    const self = this;
    this._data$ = new BehaviorSubject<PipelineVO[]>([]);
    pipelineService.list().subscribe(pipes => {
      self.data = pipes;
    });
  }

  get filter(): string {
    return this._filter$.value;
  }

  set filter(f: string) {
    this._filter$.next(f);
  }

  get data(): PipelineVO[] {
    return this._data$.value;
  }

  set data(data: PipelineVO[]) {
    this._data$.next(data);
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<PipelineVO[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      this._data$,
      this._filter$,
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData(this.getFilteredData([...this.data])));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {
  }

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: PipelineVO[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: PipelineVO[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name':
          return compare(a.metadata.name, b.metadata.name, isAsc);
        default:
          return 0;
      }
    });
  }

  private getFilteredData(data: PipelineVO[]) {
    const filtered = !this.filter ? data : data.filter(d => {
      return d.metadata.name.toLowerCase().indexOf(this.filter) !== -1;
    });

    this.paginator.length = filtered.length;
    if (this.paginator.pageIndex > 0) {
      const last = Math.ceil(this.paginator.length / this.paginator.pageSize) - 1 || 0;
      this.paginator.pageIndex = Math.min(this.paginator.pageIndex, last);
    }

    return filtered;
  }
}

/** Simple sort comparator for example Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
