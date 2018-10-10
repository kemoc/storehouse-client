import { Component, OnInit } from '@angular/core';
import { StorehouseAPI } from '../../remoteapis/StorehouseAPI';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  storehouseAPI:StorehouseAPI;
  constructor() {
    this.storehouseAPI = new StorehouseAPI();
  }

  ngOnInit() {
  }

}
