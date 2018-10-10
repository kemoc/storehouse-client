import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  @Input() productData = { name:'', amount: 0 };

  error: object = {};

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  addProduct() {
    this.error = {};
    this.rest.addProduct(this.productData).subscribe((result) => {
      this.router.navigate(['/product-details/'+result.id]);
    }, (err) => {
      alert(err.error.message);
      this.error = err.error;
      //console.log("ASDFF");
      //console.log(this.error);
    });
  }

  back() {
    this.router.navigate(['/products']);
  }

  /*
  curl -i -L -d '{"name":"value1", "amount":1}' -H "Content-Type: application/json" -X POST http://storehouse-apilocal:41480/storehouse/api/rest/item/
  */
}
