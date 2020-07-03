import { TestBed } from '@angular/core/testing';

import { HttpArticleService } from './http-article.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { windowMock } from 'src/mock/Window';

describe('HttpArticleService', () => {
  let service: HttpArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [windowMock],
    });
    service = TestBed.inject(HttpArticleService);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});
