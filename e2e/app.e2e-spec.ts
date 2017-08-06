import { NgazurePage } from './app.po';

describe('ngazure App', () => {
  let page: NgazurePage;

  beforeEach(() => {
    page = new NgazurePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
