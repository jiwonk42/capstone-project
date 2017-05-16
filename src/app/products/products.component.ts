import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ ProductService ]
})


export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService) {}
  products: FirebaseListObservable<any[]>;

  filterBySize: string = "allSizes";
  filterByGender: string = "allGenders";

  onSizeChange(optionFromSizeMenu) {
    this.filterBySize = optionFromSizeMenu;

  }
  onGenderChange(optionFromGenderMenu) {
    this.filterByGender = optionFromGenderMenu;
  }
  ngOnInit() {
    this.products = this.productService.getProducts();
  }
}
