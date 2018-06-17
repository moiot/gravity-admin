import {Injectable} from '@angular/core';

import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private snackBar: MatSnackBar) {
  }

  info(msg: string) {
    this.snackBar.open(msg, '', {duration: 5000});
  }

  error(msg: string, err: any) {
    this.snackBar.open(`${msg}. err: ${err}`, '', {duration: 10000});
  }

}
