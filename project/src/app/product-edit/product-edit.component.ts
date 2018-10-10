import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  error: object = {};

  @Input() productData:any = { name: '', amount: 0 };

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rest.getProduct(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.productData = data;
    });
  }

  back() {
    this.router.navigate(['/product-details/'+this.route.snapshot.params['id']]);
  }

  updateProduct() {
    let productID = this.route.snapshot.params['id'];
    this.rest.updateProduct(this.route.snapshot.params['id'], this.productData).subscribe((result) => {
      this.router.navigate(['/product-details/'+productID]);
    }, (err) => {
      //console.log(err);
      this.error = {};
      alert(err.error.message);
      this.error = err.error;
    });
  }

}
