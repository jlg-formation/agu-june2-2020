import { TestBed } from '@angular/core/testing';

import { ArticleService } from './article.service';
import { windowMock, windowMock2, fakeLocalStorage } from 'src/mock/Window';
import { article1, articles2 } from 'src/mock/Article';

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
    expect(service.articles.length).toBe(0);
  });

  it('should return article from localstorage', () => {
    TestBed.configureTestingModule({
      providers: [windowMock2],
    });
    service = TestBed.inject(ArticleService);
    expect(service.articles.length).toBe(1);
  });

  it('should save to localstorage', () => {
    TestBed.configureTestingModule({
      providers: [windowMock],
    });
    service = TestBed.inject(ArticleService);
    service.save();

    expect(fakeLocalStorage.articles).toBeDefined();
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
    fakeLocalStorage.articles = JSON.stringify(articles2);
    TestBed.configureTestingModule({
      providers: [windowMock],
    });
    service = TestBed.inject(ArticleService);
    service.remove([service.articles[0]]);

    expect(JSON.parse(fakeLocalStorage.articles).length).toBe(1);
  });
});
