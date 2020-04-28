import { Component, OnInit } from "@angular/core";
import { LocationService } from "./shared/services/location.service";
import { IpDataModel } from "./shared/models/ipData.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  city: string;
  constructor(private locationService: LocationService) {}
  ngOnInit() {
    this.locationService.getLocation().subscribe((data: IpDataModel) => {
      this.city = data.city;
      console.log(data);
    });
  }
}
