import { ReadInLifeWebPage } from './app.po';

describe('read-in-life-web App', () => {
  let page: ReadInLifeWebPage;

  beforeEach(() => {
    page = new ReadInLifeWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
