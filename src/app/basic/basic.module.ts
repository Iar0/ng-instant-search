import {NgModule} from "@angular/core";

import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { InstantSearchComponent } from './instant-search/instant-search.component';
import {AlgoliaService} from "./algolia.service";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    declarations: [
        AutocompleteComponent,
        InstantSearchComponent,
    ],
    imports: [
        SharedModule
    ],
    providers: [
        AlgoliaService
    ]
})
export class BasicModule {}