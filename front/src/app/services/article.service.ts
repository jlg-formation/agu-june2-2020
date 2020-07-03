import { Injectable, Inject } from '@angular/core';
import { Article } from '../interfaces/article';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles$ = new BehaviorSubject<Article[]>(this.getArticles());

  constructor(@Inject('Window') protected window: Window) {
    console.log('service instantiated');
    this.articles$.subscribe((articles) => {
      this.window.localStorage.setItem('articles', JSON.stringify(articles));
    });
  }

  getArticles(): Article[] {
    const str = this.window.localStorage.getItem('articles');
    if (!str) {
      return [];
    }
    return JSON.parse(str) as Article[];
  }

  refresh() {
    this.articles$.next(this.getArticles());
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
