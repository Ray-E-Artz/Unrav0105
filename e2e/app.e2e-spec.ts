import { Unrav0105Page } from './app.po';

describe('unrav0105 App', function() {
  let page: Unrav0105Page;

  beforeEach(() => {
    page = new Unrav0105Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
