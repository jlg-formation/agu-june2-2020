import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import { StockPage } from './stock.po';
import { AddFormPage } from './add-form.po';

describe('workspace-project App', () => {
  let page: AppPage;
  let stockPage: StockPage;
  let addFormPage: AddFormPage;

  beforeEach(() => {
    page = new AppPage();
    stockPage = new StockPage();
    addFormPage = new AddFormPage();
  });

  it('should create an article', async () => {
    await page.navigateTo();
    await page.clickOnCheckStockButton();
    await stockPage.clickOnAddButton();
    const article = {
      name: 'Scie',
      price: 4.5,
      qty: 14,
    };
    await addFormPage.fillForm(article);
    await addFormPage.clickOnCreateButton();
    const lastArticle = await stockPage.getLastArticle();
    expect(lastArticle).toEqual({ name: 'Scie', price: '4,50 €', qty: '14' });
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });
});
