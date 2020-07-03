import { Component, Renderer2, AfterViewInit, OnDestroy } from '@angular/core';
import { LoaderService } from './core/loader/loader.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'tek-system-web';
}
