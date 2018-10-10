import { Component, OnInit } from '@angular/core';
import { StorehouseAPI } from '../../remoteapis/StorehouseAPI';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  storehouseAPI:StorehouseAPI;

  constructor() {
    this.storehouseAPI = new StorehouseAPI();
  }

  ngOnInit() {
  }

}
