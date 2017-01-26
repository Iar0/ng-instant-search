import { Injectable } from '@angular/core';

@Injectable()
export class AlgoliasearchHelperService {

    private applicationId = 'latency';
    private searchAPIKey = '249078a3d4337a8231f1665ec5a44966';

    helper: any;

    constructor() {
        let algoliasearch = require('algoliasearch');
        let algoliasearchHelper = require('algoliasearch-helper');

        let client = algoliasearch(this.applicationId, this.searchAPIKey);
        this.helper = algoliasearchHelper(client, 'bestbuy', {
            disjunctiveFacets: ['category'], //multiple choice
            hitsPerPage: 7,
            maxValuesPerFacet: 3
        });
    }
}



