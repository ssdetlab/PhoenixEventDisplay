import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhoenixUIModule } from 'phoenix-ui-components';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { E320ExperimentComponent } from './e320-experiment/e320-experiment.component';

@NgModule({
  declarations: [
    AppComponent,
    E320ExperimentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     RouterModule.forRoot([{ path: '', component: E320ExperimentComponent }]),
    BrowserAnimationsModule,
    PhoenixUIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
