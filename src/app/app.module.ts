import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {AlgoliasearchHelperModule} from "./algoliasearch-helper/algoliasearch-helper.module";
import {BasicModule} from "./basic/basic.module";
import {routing} from "./app.routing";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
      AlgoliasearchHelperModule,
      BasicModule,
      routing
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
