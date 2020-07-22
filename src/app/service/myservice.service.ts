import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MyserviceService {
  constructor(private http: HttpClient) {}
  storeUsers(user): Observable<any> {
    return this.http.post("http://localhost:3000/api/postuser", user);
  }
  getUsers(): Observable<any> {
    return this.http.get("http://localhost:3000/api/getuser");
  }
  getToUpdate(id): Observable<any> {
    return this.http.get("http://localhost:3000/api/gettoupdate/" + id);
  }
  deleteUser(id): Observable<any> {
    return this.http.delete("http://localhost:3000/api/deleteuser/" + id);
  }
  updateUser(id, user): Observable<any> {
    return this.http.put("http://localhost:3000/api/updateuser/" + id, user);
  }
}
