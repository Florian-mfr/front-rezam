import { JwtService } from './jwt.service';import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpBackend } from '@angular/common/http';
import { Observable ,  throwError, tap } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { env } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private jwtService: JwtService,
    private router: Router
  ) {}

  private formatErrors(error: any) {
    return  throwError(() => error);
  }
  
  login (body: Object = {}): Observable<any> {
    return this.http.post(
      `${env.API_URL}/users/login`,
      body
    ).pipe(
      tap(res => this.setAuth(res)),
      catchError(this.formatErrors)
    )
  }

  register () {

  }

  logout () {
    this.jwtService.destroyToken()
    this.router.navigate(['/login'])
  }

  setAuth(user: any) {
    this.jwtService.saveToken(user.token)
  }
}
