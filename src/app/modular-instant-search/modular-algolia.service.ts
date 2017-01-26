import { Injectable } from '@angular/core';
@Injectable()
export class ModularAlgoliaService {

    client: any;
    helper: any;

    constructor() {
        let algoliasearch = require('algoliasearch');
        let algoliasearchHelper = require('algoliasearch-helper');

        this.client = algoliasearch('latency', '249078a3d4337a8231f1665ec5a44966');
        this.helper = algoliasearchHelper(this.client, 'bestbuy', {
            disjunctiveFacets: ['category'], //multiple choice
            hitsPerPage: 7,
            maxValuesPerFacet: 3
        });
    }
}



