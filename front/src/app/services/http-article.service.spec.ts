import { TestBed, getTestBed } from '@angular/core/testing';

import { HttpArticleService } from './http-article.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { windowMock } from 'src/mock/Window';

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
    const req = httpMock.expectOne(`http://localhost:3000/ws/articles`);
    expect(req.request.method).toBe('GET');
    req.flush([]);
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    httpMock.verify();
  });
});
