import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-pro',
  templateUrl: './show-pro.component.html',
  styleUrls: ['./show-pro.component.css']
})
export class ShowProComponent implements OnInit {

  studentList:any = [];
  product:any;
  modalTitle:any;
  activateAddEditStuCom:boolean = false;
  public modelcss:string='d-block'
  ProductID:string='';
  ProductName:string=''
  SupplierID:string=''
  CategoryID:string=''
  QuantityPerUnit:string=''
  UnitPrice:string=''
  UnitslnStock:string=''
  UnitsOnOrder:string=''
  ReorderLevel:string=''
  Discontinued:string=''
  dataEdit:any;
  constructor(private sharedService: SharedService ) { }

  ngOnInit(): void {
    this.sharedService.getStudentList().subscribe((data)=>{
      this.studentList=data;
    })
  }

  AddProduct(){
    this.product={
      ProductNameme:this.ProductName,
      SupplierID:this.SupplierID,
      CategoryID:this.CategoryID,
      QuantityPerUnit:this.QuantityPerUnit,
      UnitPrice:this.UnitPrice,
      UnitslnStock:this.UnitslnStock,
      UnitsOnOrder:this.UnitsOnOrder,
      ReorderLevel:this.ReorderLevel,
      Discontinued:this.Discontinued,
    }
    this.sharedService.addProduct(this.product).subscribe(()=>{
      this.modalTitle = "Add Product";
    })

    this.activateAddEditStuCom = true;
    console.log(this.activateAddEditStuCom)
  }

  closeEdit():void{
    document.getElementById('modelcss')?.classList.add('d-none')
  }


  showEdit(data:any):void{
    this.dataEdit=data;
    this.modelcss='d-block'
    this.ProductName = data.ProductName;
    this.SupplierID = data.SupplierID;
    this.CategoryID = data.CategoryID;
    this.QuantityPerUnit = data.QuantityPerUnit;
    this.UnitPrice = data.UnitPrice;
    this.UnitslnStock = data.UnitslnStock;
    this.UnitsOnOrder = data.UnitsOnOrder;
    this.ReorderLevel = data.ReorderLevel;
    this.Discontinued = data.Discontinued;
    document.getElementById('modelcss')?.classList.remove('d-none')
  }

  updateProduct(){
    this.product = {
      ProductID:this.ProductID,
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
    console.log(this.product)
    try {
      this.sharedService.updateProduct(this.product).subscribe((data)=>{
        alert(data)
      })
    } catch (error) {
      alert("Update failure")
    }
  }
}
