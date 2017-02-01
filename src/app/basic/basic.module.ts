import {NgModule} from "@angular/core";

import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { InstantSearchComponent } from './instant-search/instant-search.component';
import {AlgoliaService} from "./algolia.service";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@NgModule({
    declarations: [
        AutocompleteComponent,
        InstantSearchComponent,
    ],
    imports: [
        CommonModule,
        FormsModule //common
    ],
    providers: [
        AlgoliaService
    ]
})
export class BasicModule {}