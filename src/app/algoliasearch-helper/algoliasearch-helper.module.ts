import {NgModule} from "@angular/core";

import {AlgoliasearchHelperComponent} from "./algoliasearch-helper.component";
import {SearchBoxWidgetComponent} from "./search-box-widget.component";
import {RefinementListWidgetComponent} from "./refinement-list-widget.component";
import {ResultsComponentWidget} from "./results-widget.component";
import {PagerWidgetComponent} from "./pager-widget.component";

import {CommonModule} from "@angular/common";
import {AlgoliasearchHelperService} from "./algoliasearch-helper.service";
import {FormsModule} from "@angular/forms";
//import {HttpModule} from "@angular/http";

@NgModule({
    declarations: [
        AlgoliasearchHelperComponent,
        SearchBoxWidgetComponent,
        RefinementListWidgetComponent,
        ResultsComponentWidget,
        PagerWidgetComponent
    ],
    imports: [
        CommonModule,
        FormsModule, // duplicated
        //HttpModule
    ],
    providers: [
        AlgoliasearchHelperService
    ]
})
export class AlgoliasearchHelperModule {}