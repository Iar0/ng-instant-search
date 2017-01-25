import { Component, OnInit } from '@angular/core';
import {AlgoliaService} from "../algolia.service";

@Component({
  selector: 'app-instant-search',
  templateUrl: './instant-search.component.html',
  styleUrls: ['./instant-search.component.css']
})
export class InstantSearchComponent implements OnInit {

  constructor(private algoliaService: AlgoliaService) { }

  ngOnInit() {
      let instantsearch = require('instantsearch.js');
      let search = instantsearch({
      // Replace with your own values
      appId: this.algoliaService.applicationID,
      apiKey: this.algoliaService.searchAPIKey, // search only API key, no ADMIN key
      indexName: 'instant_search',
      urlSync: true
    });

    search.addWidget(
        instantsearch.widgets.searchBox({
          container: '#search-input',
          placeholder: 'Search for products'
        })
    );

    search.addWidget(
        instantsearch.widgets.hits({
          container: '#hits',
          hitsPerPage: 10,
          templates: {
            item: this.getTemplate('hit'),
            empty: this.getTemplate('no-results')
          }
        })
    );

    search.addWidget(
        instantsearch.widgets.stats({
          container: '#stats'
        })
    );

    search.addWidget(
        instantsearch.widgets.sortBySelector({
          container: '#sort-by',
          autoHideContainer: true,
          indices: [{
            name: search.indexName, label: 'Most relevant'
          }, {
            name: search.indexName + '_price_asc', label: 'Lowest price'
          }, {
            name: search.indexName + '_price_desc', label: 'Highest price'
          }]
        })
    );

    search.addWidget(
        instantsearch.widgets.pagination({
          container: '#pagination'
        })
    );

    search.addWidget(
        instantsearch.widgets.refinementList({
          container: '#category',
          attributeName: 'categories',
          limit: 10,
          sortBy: ['isRefined', 'count:desc', 'name:asc'],
          operator: 'or',
          templates: {
            header: '<h5>Category</h5>'
          }
        })
    );

    search.addWidget(
        instantsearch.widgets.refinementList({
          container: '#brand',
          attributeName: 'brand',
          limit: 10,
          sortBy: ['isRefined', 'count:desc', 'name:asc'],
          operator: 'or',
          templates: {
            header: '<h5>Brand</h5>'
          }
        })
    );

    search.addWidget(
        instantsearch.widgets.rangeSlider({
          container: '#price',
          attributeName: 'price',
          templates: {
            header: '<h5>Price</h5>'
          }
        })
    );

    search.addWidget(
        instantsearch.widgets.menu({
          container: '#type',
          attributeName: 'type',
          limit: 10,
          sortBy: ['isRefined', 'count:desc', 'name:asc'],
          templates: {
            header: '<h5>Type</h5>'
          }
        })
    );

    search.start();
  }

  getTemplate(templateName) {
    return document.getElementById(templateName + '-template').innerHTML;
  }

}
