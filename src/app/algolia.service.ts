import { Injectable } from '@angular/core';

@Injectable()
export class AlgoliaService {

  private algoliasearch: any;
  private client : any;
  index: any;
  applicationID = 'N8E9K7BUPE';
  searchAPIKey = 'c067c66671f2d1664486dfacd2891afe';

  constructor() {
    this.algoliasearch = require('algoliasearch');

    this.client = this.algoliasearch(this.applicationID, this.searchAPIKey);

    this.index = this.client.initIndex('players');
  }

  getQueryResults(indexName: string) {
    return this.index.search(indexName);
  }
}
