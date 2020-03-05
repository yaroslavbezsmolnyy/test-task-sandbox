import { Inject, Injectable } from '@angular/core';
import { HttpService, ServicesConfig } from '@services/http/http.service';
import { APP_CONFIG, AppConfig } from '@misc/constants';
import { Params } from '@angular/router';
import { map } from 'rxjs/operators';
import { Entity } from '@models/_base.model';
import { Observable } from 'rxjs';
import { User } from '@models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(@Inject(APP_CONFIG) private config: AppConfig, private http: HttpService) {}

  getAccount(id: number, params?: Params, services?: ServicesConfig): Observable<User> {
    return this.http
      .get(`${this.config.apiUrl}/api/v1/accounts/${id}`, { params }, services)
      .pipe(map((user: Entity): User => new User(user)));
  }
}
