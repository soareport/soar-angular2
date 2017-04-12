import { SoarAngular2Page } from './app.po';

describe('soar-angular2 App', () => {
  let page: SoarAngular2Page;

  beforeEach(() => {
    page = new SoarAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
