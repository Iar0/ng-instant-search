import {Routes, RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {AutocompleteComponent} from "./basic/autocomplete/autocomplete.component";
import {InstantSearchComponent} from "./basic/instant-search/instant-search.component";
import {AlgoliasearchHelperComponent} from "./algoliasearch-helper/algoliasearch-helper.component";

const APP_ROUTES: Routes = [
    { path: '', component: AutocompleteComponent},
    { path: 'autocomplete', component: AutocompleteComponent},
    { path: 'instantsearch', component: InstantSearchComponent },
    { path: 'algoliasearch-helper', component: AlgoliasearchHelperComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);