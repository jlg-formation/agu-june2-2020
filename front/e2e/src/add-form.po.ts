import { by, element } from 'protractor';
import { Article } from '../../src/app/interfaces/article';

export class AddFormPage {

  async fillForm(article: Article) {
    for (const key of Object.keys(article)) {
      const input = element(by.css(`form input[formcontrolname="${key}"]`));
      await input.clear();
      await input.sendKeys(article[key]);
    }
  }

  async clickOnCreateButton() {
    await element(by.css('button')).click();
  }
}
