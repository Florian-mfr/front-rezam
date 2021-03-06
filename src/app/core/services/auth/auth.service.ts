import {
  removeCurrentUser,
  setCurrentUser,
} from 'src/app/store/currentUser/current-user.actions'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, tap, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'
import { env } from 'src/environments/environment'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { CurrentUserState } from 'src/app/store/currentUser/current-user.reducer'
import { JwtService } from './jwt.service'

interface Log {
  username: string
  password: string
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private jwtService: JwtService,
    private router: Router,
    private store: Store<CurrentUserState>
  ) {}

  private formatErrors(error: any) {
    return throwError(() => error)
  }

  login(body: Log): Observable<any> {
    return this.http.post(`${env.API_URL}/users/login`, body).pipe(
      tap((res) => this.setAuth(res)),
      catchError(this.formatErrors)
    )
  }

  logout() {
    this.jwtService.destroyToken()
    this.store.dispatch(removeCurrentUser())
    this.router.navigate(['/login'])
  }

  setAuth(user: any) {
    this.jwtService.saveToken(user.token)
    this.store.dispatch(setCurrentUser(user))
  }
}
