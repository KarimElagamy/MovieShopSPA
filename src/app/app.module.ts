import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgForm } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from './Core/core.module';
import { SharedModule } from './Shared/shared.module';
import { MoviesModule } from './Public/movies.module';
import { HttpClientModule } from '@angular/common/http';
import { GenreModule } from './Public/genre/genre.module';
import { ReactiveFormsModule } from '@angular/forms';
import { JwtAdderInterceptor } from './Core/Interceptors/jwt-adder.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    CoreModule,
    SharedModule,
    MoviesModule,
    GenreModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [JwtAdderInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
