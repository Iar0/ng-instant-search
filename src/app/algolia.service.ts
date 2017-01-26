import { Injectable } from '@angular/core';

@Injectable()
export class AlgoliaService {

  index: any;
  applicationID = 'N8E9K7BUPE';
  searchAPIKey = 'c067c66671f2d1664486dfacd2891afe';

  constructor() {

    let algoliasearch = require('algoliasearch');
    let client = algoliasearch(this.applicationID, this.searchAPIKey);
    this.index = client.initIndex('players');
  }

  getQueryResults(indexName: string) {
    return this.index.search(indexName);
  }
}
