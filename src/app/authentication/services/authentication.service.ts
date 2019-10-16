import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { environment } from "@env/environment";

const API_URL = environment.baseUrl;

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  constructor(private http: HttpClient, private router: Router) {}

  public getToken() {
    return localStorage.getItem("token")
      ? localStorage.getItem("token")
      : false;
  }

  public authentication(userData: any): Observable<any> {
    return this.http.post(`${API_URL}auth/login/`, userData, httpOptions);
  }

  public logOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.router.navigate(["login"]);
  }
}
