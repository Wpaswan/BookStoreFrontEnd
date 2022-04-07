import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  BaseUrl=environment.baseurl

  CleanUrl:any;
 
   remove_non_ascii(str:any) {
  
    if ((str===null) || (str===''))
         return false;
   else
     str = str.toString();
    
    return str.replace(/[^\x20-\x7E]/g, '');
  }

  constructor(private http:HttpClient) {
    }

  postService(url:string,req:any={},token=true,httpAuthoptions:any={}){
    
    return this.http.post(this.BaseUrl + url, req, token && httpAuthoptions)// here data:any is used in context of whatever data we are sending to backend through post operation
  }
  
  getService(url:string,token=false,httpAuthoptions:any={}){
    return this.http.get(this.BaseUrl + url, token && httpAuthoptions)
  }
  putService(url: any, data: any, token: boolean = false, httpOptions: any) {   // here data:any is used in context of whatever data we are sending to backend through post operation
    console.log(data)
    return this.http.put(this.BaseUrl + url, data, token && httpOptions)
  }

  deleteService(url: any, data: any, token: boolean = false, httpOptions: any) {   // here data:any is used in context of whatever data we are sending to backend through post operation
    console.log(data)
    return this.http.delete(this.BaseUrl + url, token && httpOptions)
  }

  post(url: any, data : any, headers:any)
  {
    this.CleanUrl= this.remove_non_ascii(this.BaseUrl + url);
    if(headers != null)
    {
    return this.http.post(this.CleanUrl, data,headers);
    }
    return this.http.post(this.CleanUrl, data);
  }
 


}
