import { CVOnlinePage } from './app.po';

describe('cvonline App', () => {
  let page: CVOnlinePage;

  beforeEach(() => {
    page = new CVOnlinePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
