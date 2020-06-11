import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Loader } from './loader.model';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loaderSubject = new Subject<Loader>();
  loaderState = this.loaderSubject.asObservable();

  constructor() { }

  show() {
    this.loaderSubject.next(<Loader>{ isLoading: true });
  }

  hide() {
    this.loaderSubject.next(<Loader>{ isLoading: false });
  }

}
