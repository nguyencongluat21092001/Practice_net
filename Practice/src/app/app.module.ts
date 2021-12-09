import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { ShowProComponent } from './product/show-pro/show-pro.component';
import { AddEditStuComponent } from './product/add-edit-stu/add-edit-stu.component';
import { SharedService } from './shared.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ShowProComponent,
    AddEditStuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
