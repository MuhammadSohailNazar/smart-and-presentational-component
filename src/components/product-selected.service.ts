import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductSelectedService {
  private _selected: BehaviorSubject<any> = new BehaviorSubject(null);

  public selected$ = this._selected
    .asObservable()
    .pipe(filter((product: any) => !!product));

  constructor() {}

  select(product: any) {
    this._selected.next(product);
  }
}
