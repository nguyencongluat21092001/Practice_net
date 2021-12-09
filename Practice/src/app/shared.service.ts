import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "https://localhost:44396/api";

    constructor(private http: HttpClient) {}

    getStudentList(): Observable < any[] > {
        return this.http.get < any > (this.APIUrl + '/Product');
    }
    addProduct(val: any) {
      return this.http.post(this.APIUrl + '/Product', val);
    }
    updateProduct(val: any) {
      return this.http.put(this.APIUrl + '/Product', val);
  }
  deleteStudent(id: any) {
    return this.http.delete(this.APIUrl + '/Product/' + id);
}
}
