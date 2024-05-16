import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InsertComponent } from './insert/insert.component';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }
   url = "http://localhost:9001/insert";

   url1 = "http://localhost:9001/update";

   url2 = "http://localhost:9001/delete";

   url3 = "http://localhost:9001/view";

  public insertform1(studentdata: any)
  {
    return this.http.post(this.url,studentdata);
  }
  
  public updaterecord(studupdate: any)
  {
     return this.http.post(this.url1,studupdate);
  }

  public deletestudent(sdelete: any)
  {
    return this.http.post(this.url2,sdelete);
 }
  
  public viewstudent1()
  {
    return this.http.get(this.url3);
  }

}
