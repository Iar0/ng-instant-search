import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import {AlgoliaService} from "./algolia.service";
import { InstantSearchComponent } from './instant-search/instant-search.component';
import { ModularInstantSearchComponent } from './modular-instant-search/modular-instant-search.component';
import {SearchBoxComponent} from "./modular-instant-search/search-box.component";
import {ModularAlgoliaService} from "./modular-instant-search/modular-algolia.service";
import {RefinementListComponent} from "./modular-instant-search/refinement-list.component";
import {PagerComponent} from "./modular-instant-search/pager.component";
import {ResultsComponent} from "./modular-instant-search/results.component";

@NgModule({
  declarations: [
    AppComponent,
    AutocompleteComponent,
    InstantSearchComponent,
    ModularInstantSearchComponent,
      SearchBoxComponent,
      RefinementListComponent,
      PagerComponent,
      ResultsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
      AlgoliaService,
      ModularAlgoliaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
