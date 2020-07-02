import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles: Article[] = this.getArticles();

  constructor() {
    console.log('service instantiated');
  }

  getArticles(): Article[] {
    const str = localStorage.getItem('articles');
    if (!str) {
      return [
        { name: 'Tournevis', price: 2.34, qty: 123 },
        { name: 'Tournevis Cruciforme', price: 2.34, qty: 1000 },
        { name: 'Pince', price: 12.34, qty: 45 },
        { name: 'Scie', price: 34, qty: 12 },
        { name: 'Tondeuse', price: 340, qty: 20 },
      ];
    }
    return JSON.parse(str) as Article[];
  }

  save() {
    localStorage.setItem('articles', JSON.stringify(this.articles));
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
