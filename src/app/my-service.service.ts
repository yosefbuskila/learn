import { Injectable } from '@angular/core';
import { postModel } from './postModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
public posts:postModel[];
// public test='ffffff'
public headJson = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
  constructor(private router:Router,private http: HttpClient,) { 
 
  this.get()
  }
  get():void{
    this.http.get<postModel[]>('http://localhost:8500/get').subscribe((posts:postModel[])=>{
      this.posts=posts;
      console.log(posts)
    });
  }

  addfunc(post:postModel):Observable<string>{
    return this.http.post<string>('http://localhost:8500/add', post, this.headJson)
    // this.posts.push(post)
  }
  add(post:postModel):void{
    this.addfunc(post).subscribe((ans:String)=>{
      console.log(ans)
      this.get()
      this.router.navigate(['/list'])
    })
    
  }

}
