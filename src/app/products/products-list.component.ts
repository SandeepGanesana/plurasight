import { Component, OnInit } from '@angular/core';
import { IProducts } from './IProducts';
import { timingSafeEqual } from 'crypto';
@Component({
    selector: 'products-list',
    templateUrl: './products-list.component.html',
    styleUrls: [ './products-list.component.css' ]
})
export class ProductsListComponent implements OnInit {
    pageTitle: string = 'Products List';
    products: IProducts[] = [
        {
            'productId': 1,
            'productName': 'Leaf Rake',
            'productCode': 'GDN-0011',
            'releaseDate': 'March 19, 2016',
            'description': 'Leaf rake with 48-inch wooden handle.',
            'price': 19.95,
            'starRating': 3.2,
            'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
        },
        {
            'productId': 2,
            'productName': 'Garden Cart',
            'productCode': 'GDN-0023',
            'releaseDate': 'March 18, 2016',
            'description': '15 gallon capacity rolling garden cart',
            'price': 32.99,
            'starRating': 1.2,
            'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
        }
    ];
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    _productFilter: string;
    filteredProducts: IProducts[];

    constructor () {
        this.filteredProducts = this.products;
        this.productFilter = '';
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {

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
