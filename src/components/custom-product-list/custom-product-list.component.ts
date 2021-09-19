import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductSelectedService } from '../product-selected.service';

@Component({
  selector: 'app-custom-product-list',
  templateUrl: './custom-product-list.component.html',
  styleUrls: ['./custom-product-list.component.css'],
})
export class CustomProductListComponent implements OnInit {
  @Input() products: any;

  constructor(private productSelectedService: ProductSelectedService) {}
  ngOnInit(): void {
  }

  selectProduct(product: any) {
    this.productSelectedService.select(product);
  }
}
