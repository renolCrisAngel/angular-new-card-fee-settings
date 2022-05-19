import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-new-card-fee-settings';

  sellingprice: string = '';
  pricenotax: string = '';
  tax: string ='';
  taxcategory: string = '';
  lastmodified: string = '';
  modifiedby: string = '';

    constructor() {}
    
    ngOnInit(){

    }

    save() {
    console.log("this is save button");
    }

    cancel() {
    console.log("this is cancel button");
    }

}



