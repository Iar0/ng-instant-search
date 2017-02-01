import {Routes, RouterModule} from "@angular/router";
import {AlgoliasearchHelperComponent} from "./algoliasearch-helper.component";
const ALGOLIASEARCH_HELPER_ROUTES : Routes = [
    {path: '', component: AlgoliasearchHelperComponent}
];

export const algoliasearchHelperRouting = RouterModule.forChild(ALGOLIASEARCH_HELPER_ROUTES);