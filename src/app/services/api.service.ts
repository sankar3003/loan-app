import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from 'src/models/customer.type';

@Injectable({
  providedIn: 'root'
})
export class ApiService{

public baseUrl = environment.base_url;

constructor(private http:HttpClient) { }

getCustomers():Observable<any>{
return this.http.get(`${this.baseUrl}/customers/list`)
}
viewCustomers(id:string):Observable<any>{
return this.http.get(`${this.baseUrl}/customers/view?user_id=${id}`)
}
delCustomers(id:string):Observable<any>{
return this.http.delete(`${this.baseUrl}/customers/delete?user_id=${id}`)
}


saveorupdateCustomers(id?:string,data?:Customer):Observable<any>{
  if(id=='0'){
    return this.http.post(`${this.baseUrl}/customers/add`,data)
  }else{
    return this.http.put(`${this.baseUrl}/customers/update?user_id=${id}`,data)
  }

}

}
