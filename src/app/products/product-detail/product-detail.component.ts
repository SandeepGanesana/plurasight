import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productsService } from '../products.service';
import { IProducts } from '../IProducts';
@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail Page';
  product: IProducts[];
  constructor(private route: ActivatedRoute, private _productsService: productsService) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `${id}`;
    this._productsService.getProductById(id).subscribe(res => this.product = res);
  }

}
