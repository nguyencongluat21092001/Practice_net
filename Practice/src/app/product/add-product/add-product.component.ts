import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  ProductName:string=''
  SupplierID:string=''
  CategoryID:string=''
  QuantityPerUnit:string=''
  UnitPrice:string=''
  UnitslnStock:string=''
  UnitsOnOrder:string=''
  ReorderLevel:string=''
  Discontinued:string=''
  constructor(private SharedService: SharedService) { }

  ngOnInit(): void {
  }

  public createProduct():void{
    let val = {
      ProductName:this.ProductName,
      SupplierID:this.SupplierID,
      CategoryID:this.CategoryID,
      QuantityPerUnit:this.QuantityPerUnit,
      UnitPrice:this.UnitPrice,
      UnitslnStock:this.UnitslnStock,
      UnitsOnOrder:this.UnitsOnOrder,
      ReorderLevel:this.ReorderLevel,
      Discontinued:this.Discontinued,
    };
      this.SharedService.addProduct(val).subscribe(res =>{
        alert(res.toString());
        window.location.reload()
      })
}
}
