import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-debug-info',
  templateUrl: './debug-info.component.html',
  styleUrls: ['./debug-info.component.css']
})
export class DebugInfoComponent implements OnInit {
  prodFlag:boolean = true;
  env:string = "prod";

  constructor() {
    this.env = "prod";
    if (!environment.production){
      this.env = "dev";
      this.prodFlag = false;
    }
  }

  ngOnInit() {
  }

}
