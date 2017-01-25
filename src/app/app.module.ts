import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import {AlgoliaService} from "./algolia.service";
import { InstantSearchComponent } from './instant-search/instant-search.component';

@NgModule({
  declarations: [
    AppComponent,
    AutocompleteComponent,
    InstantSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
      AlgoliaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
