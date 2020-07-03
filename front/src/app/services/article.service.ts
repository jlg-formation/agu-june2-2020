import { Injectable, Inject } from '@angular/core';
import { Article } from '../interfaces/article';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles$ = new BehaviorSubject<Article[]>([]);

  constructor(@Inject('Window') protected window: Window) {
    this.articles$.subscribe((data) => {
      this.window.localStorage.setItem('articles', JSON.stringify(data));
    });
    const articles = this.getArticles();
    this.articles$.next(articles);
  }

  getArticles(): Article[] {
    const str = this.window.localStorage.getItem('articles');
    if (!str) {
      return [];
    }
    return JSON.parse(str) as Article[];
  }

  refresh() {
    const articles = this.getArticles();
    this.articles$.next(articles);
  }

  add(article: Article) {
    this.articles$.value.push(article);
    this.articles$.next(this.articles$.value);
  }

  remove(selectedArticles: Article[]): void {
    this.articles$.next(
      this.articles$.value.filter((a) => !selectedArticles.includes(a))
    );
  }
}
