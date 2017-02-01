import {NgModule} from "@angular/core";

import {AlgoliasearchHelperComponent} from "./algoliasearch-helper.component";
import {SearchBoxWidgetComponent} from "./search-box-widget.component";
import {RefinementListWidgetComponent} from "./refinement-list-widget.component";
import {ResultsComponentWidget} from "./results-widget.component";
import {PagerWidgetComponent} from "./pager-widget.component";

import {AlgoliasearchHelperService} from "./algoliasearch-helper.service";
import {algoliasearchHelperRouting} from "./algoliasearch-helper.routes";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    declarations: [
        AlgoliasearchHelperComponent,
        SearchBoxWidgetComponent,
        RefinementListWidgetComponent,
        ResultsComponentWidget,
        PagerWidgetComponent
    ],
    imports: [
        SharedModule,
        algoliasearchHelperRouting
    ],
    providers: [
        AlgoliasearchHelperService
    ]
})
export class AlgoliasearchHelperModule {}