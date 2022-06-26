import { Component, OnInit } from "@angular/core";
import { ProductService } from "./product.service";
import { IProduct } from './products';

@Component({
  selector : 'pm-products',
  templateUrl : './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit{

  pageTitle: string = 'Product List!';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;

  private _listFilter : string = '';
  get listFilter(): string{
    return this._listFilter;
  }
  set listFilter(value:string){
    this._listFilter = value;
    console.log('In setter:', value);
    this.filteredProducts = this.performFilter(value);
  }

  filteredProducts : IProduct[] = [];

  products: IProduct[] = [];

  // private _productService: ProducService;
  // constructor(productService: ProducService){
  //   this._productService = productService;
  // }
  constructor(private productService : ProductService){

  }


  toggleImage(): void{
    this.showImage = !this.showImage;
  }
  ngOnInit(): void {

    console.log('In OnInit');
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
    this.listFilter = '';
  }

  onRatingClicked(message:string):void{
    this.pageTitle = 'Product List: ' + message;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product:IProduct) => product.productName.toLocaleLowerCase().includes(filterBy));
  }
}
