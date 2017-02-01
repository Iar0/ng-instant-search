import {Routes, RouterModule} from "@angular/router";
import {AutocompleteComponent} from "./basic/autocomplete/autocomplete.component";
import {InstantSearchComponent} from "./basic/instant-search/instant-search.component";

const APP_ROUTES: Routes = [
    { path: 'autocomplete', component: AutocompleteComponent},
    { path: 'instantsearch', component: InstantSearchComponent},
    { path: 'algoliasearch-helper', loadChildren: 'app/algoliasearch-helper/algoliasearch-helper.module#AlgoliasearchHelperModule' },
    { path: '', component: AutocompleteComponent},
];

export const routing = RouterModule.forRoot(APP_ROUTES);