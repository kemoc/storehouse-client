import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  nowDate:Date = new Date();
  dateFormat:string = "yyyy-MM-dd";
  copyEntity:string = "&COPY;";

  constructor() { }

  ngOnInit() {
  }

}
