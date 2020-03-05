import { Component } from '@angular/core';
import { LoaderService } from '@services/loader/loader.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  constructor(private loaderService: LoaderService) {}

  get isLoading(): Observable<boolean> {
    return this.loaderService.isLoading;
  }
}
