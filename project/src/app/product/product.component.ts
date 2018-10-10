import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:any = [];

  htmlCOPY = "&nbsp;";

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.products = [];
    this.rest.getProducts().subscribe((data: {}) => {
      //console.log(data);
      this.products = data;
    });
  }

  add() {
    this.router.navigate(['/product-add']);
  }

  delete(id) {
    if (!confirm("Are you sure you want to delete product of ID: " + id)){

      return ;
    }

    this.rest.deleteProduct(id)
      .subscribe(res => {
          this.getProducts();
        }, (err) => {
          console.log(err);
        }
      );
  }

  getNoAmountProducts() {
    this.products = [];
    this.rest.getNoAmountProducts().subscribe((data: {}) => {
      this.products = data;
    });
  }

  getMinimum5AmountProducts() {
    this.products = [];
    this.rest.getMinimumAmountProducts(5).subscribe((data: {}) => {
      this.products = data;
    });
  }
}
