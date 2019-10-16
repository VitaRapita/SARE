import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "@env/environment";
import IApiStoresResults from "../../interfaces/store.interface";
import IApiUsersResults from "../../interfaces/users.interface";

const API_URL = environment.baseUrl;

@Injectable({
  providedIn: "root"
})
export class AdminService {
  SERVER_URL = "api/";

  constructor(private http: HttpClient) {}

  public getUsers(): Observable<any> {
    return this.http.get(this.SERVER_URL + "users");
  }

  public getStores(): Observable<any> {
    return this.http.get(this.SERVER_URL + "stores");
  }

  // public getUsers(params): Observable<IApiUsersResults> {
  //   let requestUrl = `${API_URL}users/?size=${
  //     params.paginator.pageSize
  //   }&page=${params.paginator.pageIndex + 1}`;
  //
  //   let orderBy;
  //   if (params.sort.direction === 'asc') {
  //     orderBy = params.sort.active;
  //   } else if (params.sort.direction === 'desc') {
  //     orderBy = '-' + params.sort.active;
  //   } else {
  //     orderBy = '';
  //   }
  //
  //   requestUrl = orderBy ? requestUrl + `&orderby=${orderBy}` : requestUrl;
  //   requestUrl = params.filterValue
  //     ? requestUrl + `&q=${params.filterValue}`
  //     : requestUrl;
  //   return this.http.get<IApiUsersResults>(requestUrl);
  // }
  //
  // public getStores(params): Observable<IApiStoresResults> {
  //   let requestUrl = `${API_URL}stores/?size=${
  //     params.paginator.pageSize
  //   }&page=${params.paginator.pageIndex + 1}`;
  //
  //   let orderBy;
  //   if (params.sort.direction === 'asc') {
  //     orderBy = params.sort.active;
  //   } else if (params.sort.direction === 'desc') {
  //     orderBy = '-' + params.sort.active;
  //   } else {
  //     orderBy = '';
  //   }
  //
  //   requestUrl = orderBy ? requestUrl + `&orderby=${orderBy}` : requestUrl;
  //   requestUrl = params.filterValue
  //     ? requestUrl + `&q=${params.filterValue}`
  //     : requestUrl;
  //   return this.http.get<IApiStoresResults>(requestUrl);
  // }

  public activationUser(id: number, isActivate): Observable<any> {
    const isActivateParam = isActivate ? "activate" : "deactivate";
    return this.http.post(`${API_URL}users/${id}/${isActivateParam}/`, {});
  }
}
