import { Component, OnInit } from '@angular/core';
import { IProducts } from './IProducts';
import { productsService } from './products.service';
@Component({
    selector: 'products-list',
    templateUrl: './products-list.component.html',
    styleUrls: [ './products-list.component.css' ]
})
export class ProductsListComponent implements OnInit {
    pageTitle: string = 'Products List';
    products: IProducts[] = [];
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    _productFilter: string;
    filteredProducts: IProducts[];

    constructor (private productsService: productsService) {
        
        this.productFilter = '';
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this.products = this.productsService.getProducts();
        this.filteredProducts = this.products;
    }

    get productFilter(): string {
        return this._productFilter;
    }

    set productFilter(value: string) {
        this._productFilter = value;
        this.filteredProducts = this.productFilter ? this.performFilter(this.productFilter) : this.products;
    }

    performFilter(filterBy: string): IProducts[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProducts) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    onRatingClicked (message: string): void {
        this.pageTitle = 'Product List : ' + message;
    }

}
