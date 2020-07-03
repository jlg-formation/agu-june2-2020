import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { CreateComponent } from './create.component';
import { RouterTestingModule } from '@angular/router/testing';
import { windowMock } from 'src/mock/Window';
import { Router, Routes } from '@angular/router';
import { Location } from '@angular/common';
import { ListComponent } from '../list/list.component';
import { ArticleService } from 'src/app/services/article.service';

describe('CreateComponent', () => {
  let component: CreateComponent;
  let fixture: ComponentFixture<CreateComponent>;

  let location: Location;
  let router: Router;

  const routes: Routes = [
    { path: 'stock/new', component: CreateComponent },
    { path: 'stock', component: ListComponent },
  ];

  const myArticleService = {
    add: jasmine.createSpy('add'),
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [CreateComponent],
      providers: [
        windowMock,
        {
          provide: ArticleService,
          useValue: myArticleService,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);

    fixture = TestBed.createComponent(CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    router.initialNavigation();
    router.navigateByUrl('/stock/new');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit', fakeAsync(() => {
    component.submit();
    tick();
    const url = location.path();
    expect(url).toBe('/stock');
    expect(myArticleService.add).toHaveBeenCalledWith(component.f.value);
  }));
});
