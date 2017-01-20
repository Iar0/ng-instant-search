import { NgInstantSearchPage } from './app.po';

describe('ng-instant-search App', function() {
  let page: NgInstantSearchPage;

  beforeEach(() => {
    page = new NgInstantSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
