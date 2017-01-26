import { Component } from '@angular/core';
import {AlgoliasearchHelperService} from "./algoliasearch-helper.service";

@Component({
    selector: 'results-widget',
    template: `
    <div class="results">
      <div *ngFor="let hit of hits" 
        class="list-group-item" 
        [innerHTML]="hit._highlightResult.name.value"
      >
      crap
      </div>
    </div>
  `
})
export class ResultsComponentWidget {
    hits = [];

    constructor(private algoliaService: AlgoliasearchHelperService) {
        // subscription
        this.algoliaService.helper.on('result', results => {
            this.hits = results.hits
        });
    }
}