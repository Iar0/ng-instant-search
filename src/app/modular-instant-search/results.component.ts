import { Component } from '@angular/core';
import {ModularAlgoliaService} from "./modular-algolia.service";

@Component({
    selector: 'results',
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
export class ResultsComponent {
    hits = [];

    constructor(private algoliaService: ModularAlgoliaService) {
        // subscription
        this.algoliaService.helper.on('result', results => {
            this.hits = results.hits
        });
    }
}