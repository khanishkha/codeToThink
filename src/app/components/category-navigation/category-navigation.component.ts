import { Component } from '@angular/core';

@Component({
  selector: 'app-category-navigation',
  templateUrl: './category-navigation.component.html',
  styleUrls: ['./category-navigation.component.scss']
})
export class CategoryNavigationComponent {
  categories = ['Health and Wellness', 'Home and Garden', 'Entertainment', 'Fashion'];
  activeCategory = this.categories[0];

  selectCategory(category: string) {
    this.activeCategory = category;
  }
}
