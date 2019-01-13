import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user-model';
import { Observable, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import env from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private static count = 0;
  private serverConfig = env.serverConfig;
  private user: User|null;
  // private getUser: BehaviorSubject<User> = new BehaviorSubject(null);
  private token: string|null;
  private serverUrl = `http://${this.serverConfig.serverUrl}:${this.serverConfig.port}`;
  private httpHeaders = new HttpHeaders({
    'Authentication': `JWT ${this.token}`,
  });

  constructor(
    private httpCli: HttpClient,
  ) {}

  login(data: any): Observable<boolean> {
    return this.httpCli.post(`${this.serverUrl}/auth/login`, {data}).pipe(
      tap((res: any) => {
          this.user = res.data;
          this.token = res.token || '';
      }),
      map(res => res.success),
      catchError(err => of(false))
    );
  }

  verifyToken(): Observable<boolean> {
    return this.httpCli.post(`${this.serverUrl}/auth/verify-token`, {}, { headers: this.httpHeaders }).pipe(
      tap({
        next: (res: any) => {
          this.user = res.data.user;
        }
      }),
      map((res: any) => res.success)
    );
  }

  getUser(): Observable<User|null> {
    return of(this.user);
  }

  logout(): Observable<boolean> {
    this.user = null;
    this.token = null;
    return of(true);
  }
}
