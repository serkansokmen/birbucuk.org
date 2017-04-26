import { BbPage } from './app.po';

describe('bb App', () => {
  let page: BbPage;

  beforeEach(() => {
    page = new BbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
