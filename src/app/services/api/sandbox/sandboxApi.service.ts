import { Inject, Injectable } from '@angular/core';
import { HttpService, ServicesConfig } from '@services/http/http.service';
import { APP_CONFIG, AppConfig } from '@misc/constants';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import { AggregatedResult } from '@jest/test-result';

@Injectable({
  providedIn: 'root'
})
export class SandboxApiService {
  constructor(@Inject(APP_CONFIG) private config: AppConfig, private http: HttpService) {}

  runBaseTests(body: Params, servicesConfig?: ServicesConfig): Observable<AggregatedResult> {
    return this.http.post(`${this.config.apiUrl}/api/test-runner/js`, body, servicesConfig);
  }
}
