import { TddPage } from './app.po';

describe('tdd App', function() {
  let page: TddPage;

  beforeEach(() => {
    page = new TddPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('tdd works!');
  });
});
