import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles: Article[] = [
    { name: 'Tournevis', price: 2.34, qty: 123 },
    { name: 'Tournevis Cruciforme', price: 2.34, qty: 1000 },
    { name: 'Pince', price: 12.34, qty: 45 },
    { name: 'Scie', price: 34, qty: 12 },
    { name: 'Tondeuse', price: 340, qty: 20 },
  ];

  constructor() {
    console.log('service instantiated');
  }

  add(article: Article) {
    this.articles.push(article);
  }
}
