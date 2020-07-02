import { Injectable, Inject } from '@angular/core';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles: Article[] = this.getArticles();

  constructor(@Inject('Window') protected window: Window) {
    console.log('service instantiated');
  }

  getArticles(): Article[] {
    const str = this.window.localStorage.getItem('articles');
    if (!str) {
      return [];
    }
    return JSON.parse(str) as Article[];
  }

  refresh() {
    this.articles = this.getArticles();
  }

  save() {
    this.window.localStorage.setItem('articles', JSON.stringify(this.articles));
  }

  add(article: Article) {
    this.articles.push(article);
    this.save();
  }

  remove(selectedArticles: Article[]): void {
    this.articles = this.articles.filter(a => !selectedArticles.includes(a));
    this.save();
  }
}
