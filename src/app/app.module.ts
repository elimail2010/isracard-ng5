import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { IsracardServiceService } from './isracard-service.service';
import { HttpClientModule } from '@angular/common/http';
import { ReposComponent } from './repos/repos.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpInterceptor } from './http-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    ReposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [IsracardServiceService, HttpInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
