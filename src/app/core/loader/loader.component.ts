import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from './loader.service';
import { Loader } from './loader.model';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.less']
})
export class LoaderComponent implements OnInit, OnDestroy {
  isLoading: boolean;

  private subscriptions = new Subscription();

  constructor(private loaderService: LoaderService) { }

  ngOnInit(): void {
    this.subscriptions.add(this.loaderService.loaderState.subscribe((loader: Loader) => {
      this.isLoading = loader.isLoading;
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
