import { Component } from '@angular/core';
import {ModularAlgoliaService} from "./modular-algolia.service";

@Component({
    selector: 'search-box',
    template: `
   <div class="form">
     <input 
        type="text"
        class="search-box" 
        placeholder="{{placeholder}}"
        (keyup)="search()"
        [(ngModel)]="query"
     />
    </div>
   `
})

export class SearchBoxComponent {
    query = '';
    placeholder = 'Search...';

    constructor(private algoliaService: ModularAlgoliaService) {
        this.algoliaService.helper.setQuery(this.query).search(); //trigger search (method chaining)
    }

    search() {
        this.algoliaService.helper.setQuery(this.query).search();
    }
}