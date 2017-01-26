import { Component } from '@angular/core';


@Component({
  selector: 'algoliasearch-helper',
  template: `
    <div class="app">
      <search-box-widget></search-box-widget>
      <refinement-list-widget></refinement-list-widget>
      <results-widget></results-widget>
      <pager-widget></pager-widget>
    </div>
  `
})

export class AlgoliasearchHelperComponent {}
