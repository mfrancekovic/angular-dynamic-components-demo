import { DynamicComponentsDemoPage } from './app.po';

describe('dynamic-components-demo App', () => {
  let page: DynamicComponentsDemoPage;

  beforeEach(() => {
    page = new DynamicComponentsDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
