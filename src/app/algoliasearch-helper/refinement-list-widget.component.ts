import { Component } from '@angular/core';
import {AlgoliasearchHelperService} from "./algoliasearch-helper.service";

@Component({
    selector: 'refinement-list-widget',
    template: `
    <ul class="facet-list" [class.no-results]="facets.length === 0">
      <li 
        *ngFor="let facet of facets"
        [class.active]="facet.isRefined"
        (click)="toggleFacet(facet.name)"
      >
        <input type="checkbox" [name]="facet.name"/>
        {{facet.name}}
        <span class="badge">{{facet.count}}</span>
      </li>
      <li *ngIf="facets.length === 0">No results.</li>
    </ul>
  `
})

export class RefinementListWidgetComponent {
    facets = [];

    constructor(private algoliaService: AlgoliasearchHelperService) {
        // The list of available facets is returned by the Algolia API.
        // This list is dynamic and should be updated at each new results.
        // The list depends on the search (es: typing apple the category movie is removed)
        this.algoliaService.helper.on('result', results => {
            this.facets = results.getFacetValues('category', ['selected', 'count:desc']).slice(0, 5);
        });
    }

    toggleFacet(facetName: string) {
        this.algoliaService.helper.toggleRefinement('category', facetName).search(); //use the selected facet
    }
}