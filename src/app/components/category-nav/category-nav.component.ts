import { Component } from '@angular/core';

@Component({
  selector: 'app-category-nav',
  templateUrl: './category-nav.component.html',
  styleUrls: ['./category-nav.component.scss']
})
export class CategoryNavComponent {
  categories = [
    { name: 'Electronics' },
    { name: 'Fashion' },
    { name: 'Beauty' },
    { name: 'Home Improvement' },
    { name: 'Sports, Toys & Luggage' },
    { name: 'Groceries' },
    { name: 'Daily Essentials' }
  ];
}
