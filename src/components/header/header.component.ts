import { Component, OnInit } from '@angular/core';
import { ProductSelectedService } from '../product-selected.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  selectedProduct: any;
  constructor(private productSelectedService: ProductSelectedService) {}

  ngOnInit(): void {
    this.productSelectedService.selected$.subscribe(
      (product: any) => (this.selectedProduct = product)
    );
  }
}
