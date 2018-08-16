import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/products/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Detail';
  product: IProduct;

  constructor(private activatedRoute : ActivatedRoute,
              private router : Router,
              private productService : ProductService) { }

  ngOnInit() {
    let id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.pageTitle += ` : ${id}`;
    this.productService.getProducts().subscribe((products) => {
      this.product=products[id];
      console.log(this.product);
      })
    }
  onBack(): void {
    this.router.navigate(['/products']);
  }

}
