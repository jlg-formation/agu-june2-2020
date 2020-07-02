import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/interfaces/article';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  selectedArticles: Article[] = [];

  constructor(public articleService: ArticleService) {}

  ngOnInit(): void {}

  toggle(article: Article) {
    console.log('toggle', article);
    const index = this.selectedArticles.findIndex((a) => a === article);
    if (index !== -1) {
      // remove
      this.selectedArticles.splice(index, 1);
      return;
    }
    // add
    this.selectedArticles.push(article);
  }

  remove() {
    console.log('remove');
    this.articleService.remove(this.selectedArticles);
    this.selectedArticles.length = 0;
  }
}
