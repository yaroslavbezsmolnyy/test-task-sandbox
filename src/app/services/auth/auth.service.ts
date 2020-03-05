import { Inject, Injectable } from '@angular/core';
import { HttpService, ServicesConfig } from '@services/http/http.service';
import { APP_CONFIG, AppConfig, STORAGE_KEYS } from '@misc/constants';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '@models/user.model';
import { map, switchMap, tap } from 'rxjs/operators';
import { UserService } from '@services/api/user/user.service';
import { ApiTokens, Tokens } from '@models/tokens.model';
import { Router } from '@angular/router';
import { StorageService } from '@services/storage/storage.service';
import { HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokens$: BehaviorSubject<Tokens> = new BehaviorSubject<Tokens>(
    JSON.parse(this.storage.get(STORAGE_KEYS.TOKENS)) as Tokens
  );
  me$: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  constructor(
    @Inject(APP_CONFIG) private config: AppConfig,
    private http: HttpService,
    private router: Router,
    private apiUser: UserService,
    private storage: StorageService
  ) {}

  get me(): User {
    return this.me$.value;
  }

  get token(): Tokens {
    return this.tokens$.value;
  }

  get isAuthenticated(): boolean {
    return !!(this.token && this.token.access && this.token.refresh);
  }

  get isAuthenticated$(): Observable<boolean> {
    return this.tokens$.pipe(map((tokens: Tokens): boolean => Boolean(tokens && tokens.access && tokens.refresh)));
  }

  login({ username, password }, shouldRemember: boolean, services?: ServicesConfig): Observable<void> {
    const { apiUrl, client_id } = this.config;
    this.storage.shouldUseLocalstorage = shouldRemember;
    return this.http
      .post(`${apiUrl}/oauth/token`, { username, password, client_id, grant_type: 'password' }, {}, services)
      .pipe(map(this.onTokenResponse.bind(this)), switchMap(this.getMe.bind(this)));
  }

  refreshToken(): Observable<void> {
    const { apiUrl, client_id } = this.config;

    return this.http
      .post(`${apiUrl}/oauth/token`, {
        client_id,
        grant_type: 'refresh_token',
        refresh_token: this.token.refresh
      })
      .pipe(map(this.onTokenResponse.bind(this)), switchMap(this.getMe.bind(this)));
  }

  getMe(services?: ServicesConfig): Observable<User> {
    return this.apiUser
      .getAccount(this.token.ownerId, { filter: 'account' }, services)
      .pipe(tap((user: User): void => this.me$.next(user)));
  }

  clearTokens(): void {
    this.storage.clear();
    this.tokens$.next(null);
    this.me$.next(null);
  }

  addTokenToRequest(req: HttpRequest<any>): HttpRequest<any> {
    return this.token
      ? req.clone({
          setHeaders: {
            Authorization: `${this.token.type} ${this.token.access}`
          }
        })
      : req;
  }

  private onTokenResponse(res: ApiTokens): Tokens {
    let tokens: Tokens;

    if (res.access_token) {
      tokens = new Tokens(res);
      this.storage.current.setItem(STORAGE_KEYS.TOKENS, JSON.stringify(tokens));
      this.tokens$.next(tokens);
    }

    return tokens;
  }
}
