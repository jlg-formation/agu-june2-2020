import { TestBed, getTestBed } from '@angular/core/testing';

import { HttpArticleService } from './http-article.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { windowMock } from 'src/mock/Window';
import { article1 } from 'src/mock/Article';

describe('HttpArticleService', () => {
  let service: HttpArticleService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [windowMock],
    });
    injector = getTestBed();
    service = TestBed.inject(HttpArticleService);
    httpMock = injector.inject(HttpTestingController);
  });

  it('should be created', () => {
    const req = httpMock.expectOne('/ws/articles');
    expect(req.request.method).toBe('GET');
    req.flush([]);
    expect(service).toBeTruthy();
  });

  it('should test retrieveAll in error', () => {
    const req = httpMock.expectOne('/ws/articles');
    expect(req.request.method).toBe('GET');
    req.flush('', { status: 404, statusText: 'Not Found' });
    expect(service).toBeTruthy();
  });

  it('should test refresh', () => {
    const req = httpMock.expectOne('/ws/articles');
    expect(req.request.method).toBe('GET');
    req.flush([]);
    service.refresh();
    httpMock.expectOne('/ws/articles').flush([]);
    expect(service).toBeTruthy();
  });

  it('should test add', () => {
    const req = httpMock.expectOne('/ws/articles');
    expect(req.request.method).toBe('GET');
    req.flush([]);
    service.add(article1);
    const req2 = httpMock.expectOne('/ws/articles');
    expect(req2.request.method).toBe('POST');
    req2.flush('', { status: 201, statusText: 'Created' });
    httpMock.expectOne('/ws/articles').flush([]);
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    httpMock.verify();
  });
});
