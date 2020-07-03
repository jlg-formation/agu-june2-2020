import { TestBed } from '@angular/core/testing';

import { ArticleService } from './article.service';
import { windowMock, fakeLocalStorage } from 'src/mock/Window';
import { article1, article2 } from 'src/mock/Article';

describe('ArticleService', () => {
  let service: ArticleService;

  it('should be created', () => {
    TestBed.configureTestingModule({
      providers: [windowMock],
    });
    service = TestBed.inject(ArticleService);
    expect(service).toBeTruthy();
  });

  it('should return no article', () => {
    TestBed.configureTestingModule({
      providers: [windowMock],
    });
    service = TestBed.inject(ArticleService);
    expect(service.articles$.value.length).toBe(0);
  });

  it('should return article from localstorage', () => {
    console.log('start localstorage test');
    TestBed.configureTestingModule({
      providers: [windowMock],
    });
    service = TestBed.inject(ArticleService);
    expect(service.articles$.value.length).toBe(0);
  });

  it('should add an article', () => {
    fakeLocalStorage.articles = '';
    TestBed.configureTestingModule({
      providers: [windowMock],
    });
    service = TestBed.inject(ArticleService);
    service.add(article1);
    expect(JSON.parse(fakeLocalStorage.articles).length).toBe(1);
  });

  it('should remove an article', () => {
    TestBed.configureTestingModule({
      providers: [windowMock],
    });
    service = TestBed.inject(ArticleService);
    service.add(article1);
    service.add(article2);
    service.remove([service.articles$.value[0].id]);

    expect(JSON.parse(fakeLocalStorage.articles).length).toBe(1);
  });
});
