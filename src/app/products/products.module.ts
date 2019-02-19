import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipes';
import { StarComponent } from '../shared/star.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductDetailGuard } from './product-detail.guard';

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
    StarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'products', component: ProductsListComponent },
      { path: 'products/:id', component: ProductDetailComponent,
        canActivate: [ ProductDetailGuard ]
      }
    ]),
    FormsModule
  ]
})
export class ProductsModule { }
