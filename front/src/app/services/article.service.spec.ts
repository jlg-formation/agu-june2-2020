import { TestBed } from '@angular/core/testing';

import { ArticleService } from './article.service';
import { windowMock, windowMock2 } from 'src/mock/Window';

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
});
