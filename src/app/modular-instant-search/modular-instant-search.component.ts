import { Component } from '@angular/core';


@Component({
  selector: 'modular-instant-search',
  template: `
    <div class="app">
      <search-box></search-box>
      <refinement-list></refinement-list>
      <results></results>
      <pager></pager>
    </div>
  `
})

export class ModularInstantSearchComponent {}
