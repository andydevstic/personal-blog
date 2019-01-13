import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import env from '../../environments/environment';
import { map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable()

export class RegisterService {
  private serverUrl = `http://${env.serverConfig.serverUrl}:${env.serverConfig.port}`;
  constructor(
    private http: HttpClient,
  ) {}

  registerUser(userData): Observable<any> {
    return this.http.post(`${this.serverUrl}/api/register`, {user: userData}).pipe(
      catchError(response => of(response.error)),
    );
  }
}
