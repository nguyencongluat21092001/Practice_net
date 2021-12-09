import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-stu',
  templateUrl: './add-edit-stu.component.html',
  styleUrls: ['./add-edit-stu.component.css']
})
export class AddEditStuComponent implements OnInit {

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

  createProduct():void{
    let val = {
      ProductNameme:this.ProductName,
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
      })
  }



}
