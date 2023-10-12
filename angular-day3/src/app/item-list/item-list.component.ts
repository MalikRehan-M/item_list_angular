import { Component, ChangeDetectorRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent {
  items = [
    {
      name: 'Item 1',
      description: 'Description 1',
      price: 19.99,
      category: 'Electronics',
    },
    {
      name: 'Item 2',
      description: 'Description 2',
      price: 29.99,
      category: 'Clothing',
    },
    {
      name: 'Item 3',
      description: 'Description 3',
      price: 39.99,
      category: 'Furniture',
    },
    // Add more items with categories
  ];
  selectedCategory: string = '';
  searchText: string = ''; // Variable to store user's search input
  searchResults: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(this.items);

  ngOnInit() {
    // Initialize the search results with all items
    this.searchResults.next(this.items);
  }

  // Create a method to update the search results based on category and search input
  updateSearchResults() {
    let filtered = this.items;

    // Filter based on category
    if (this.selectedCategory) {
      filtered = filtered.filter((item) => item.category === this.selectedCategory);
    }

    // Filter based on search input
    if (this.searchText) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }

    this.searchResults.next(filtered);
  }
}
