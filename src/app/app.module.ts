import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AuthModule } from './auth/auth.module'
import { HomeComponent } from './home/home.component'
import { CoreModule } from './core/core.module'
import { MyAccountComponent } from './my-account/my-account.component'
import { StoreModule } from '@ngrx/store'

import { currentUserReducer } from './store/currentUser/current-user.reducer'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { env } from '../environments/environment'

@NgModule({
  declarations: [AppComponent, HomeComponent, MyAccountComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    CoreModule,
    StoreModule.forRoot({
      currentUser: currentUserReducer,
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: env.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
