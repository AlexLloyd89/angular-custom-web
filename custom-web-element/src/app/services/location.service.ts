import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IpDataModel } from "../../models/ipData.model";

@Injectable({
  providedIn: "root",
})
export class LocationService {
  baseUrl = "https://freegeoip.app/json/";

  constructor(private http: HttpClient) {}

  //Return an Observable containing the stated data model
  getLocation(): Observable<IpDataModel> {
    return this.http.get<IpDataModel>(this.baseUrl);
  }
}
