import { Component } from '@angular/core';
import {ModularAlgoliaService} from "./modular-algolia.service";

@Component({
    selector: 'pager',
    template: `
    <div class="pager">
      <button class="previous" (click)="prevPage()">Previous</button>
      <span class="current=page">{{currentPage+1}}</span>
      <button class="next" (click)="nextPage()">Next</button>
    </div>
  `
})
export class PagerComponent {
    currentPage = 0;

    constructor(private algoliaService: ModularAlgoliaService) {
        this.algoliaService.helper.on('change', () => {
            this.currentPage = algoliaService.helper.getPage();
        });
    }

    prevPage() {
        if (this.currentPage > 0) {
            this.algoliaService.helper.previousPage().search();
        }
    }

    nextPage() {
        this.algoliaService.helper.nextPage().search();
    }
}