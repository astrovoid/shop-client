import { ShopClientPage } from './app.po';

describe('shop-client App', () => {
  let page: ShopClientPage;

  beforeEach(() => {
    page = new ShopClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect<any>(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
