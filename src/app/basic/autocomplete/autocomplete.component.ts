import {Component, OnInit} from '@angular/core';
import {AlgoliaService} from "../algolia.service";

declare let autocomplete: any;

@Component({
  selector: 'app-autocomplete',
  templateUrl: 'autocomplete.component.html',
  styleUrls: ['autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {

  queryString = 'hello';
  results : any;

  constructor(private algoliaService: AlgoliaService) {}

  ngOnInit(): void {
    autocomplete('#aa-search-input',
        { hint: false, debug: true }, {
          source: autocomplete.sources.hits(this.algoliaService.index, {hitsPerPage: 5}),
            //value to be displayed in input control after user's suggestion selection
            displayKey: 'name',
            //hash of templates used when rendering dataset
            templates: {
                //'suggestion' templating function used to render a single suggestion
                suggestion: function(suggestion) {
                    return '<span>' +
                        suggestion._highlightResult.name.value + '</span><span>' +
                        suggestion._highlightResult.team.value + '</span>';
                }
            }
        }).on('autocomplete:selected', function(event:any,suggestion:any,dataset:any) {
      this.usersService.pushUserSelected(suggestion.objectID);
    }.bind(this));
  }

  getResults() {
    console.log(this.queryString);
    this.algoliaService.getQueryResults(this.queryString)
        .then(results => this.results = results)
        .catch(error => console.log(error));
  }
}
