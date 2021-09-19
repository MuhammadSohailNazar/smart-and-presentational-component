import { Component, OnInit } from '@angular/core';
import { ProductSelectedService } from '../product-selected.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css'],
})
export class MainContentComponent implements OnInit {
  products: any[] = [];
  selectedProduct: any;
  constructor(private productSelectedService: ProductSelectedService) {
    this.products.push(
      { id: 1, name: 'Product 1 ', quantity: 3, price: 100 },
      { id: 2, name: 'Product 2 ', quantity: 22, price: 200 },
      { id: 3, name: 'Product 3 ', quantity: 32, price: 150 },
      { id: 4, name: 'Product 4 ', quantity: 21, price: 110 },
      { id: 5, name: 'Product 5 ', quantity: 323, price: 10 }
    );

    this.productSelectedService.selected$.subscribe((product: any) =>
      this.selectProduct(product)
    );
  }

  ngOnInit(): void {}

  selectProduct(product: any) {
    this.selectedProduct = product;
    console.log('🚀 product', product);
  }
}
