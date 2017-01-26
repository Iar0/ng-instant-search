import { Component } from '@angular/core';
import {AlgoliasearchHelperService} from "./algoliasearch-helper.service";

@Component({
    selector: 'search-box-widget',
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

export class SearchBoxWidgetComponent {
    query = '';
    placeholder = 'Search...';

    constructor(private algoliaService: AlgoliasearchHelperService) {
        this.algoliaService.helper.setQuery(this.query).search(); //trigger search (method chaining)
    }

    search() {
        this.algoliaService.helper.setQuery(this.query).search();
    }
}