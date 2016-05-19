export class TddPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('tdd-app h1')).getText();
  }
}
