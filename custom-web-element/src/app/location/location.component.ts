import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { LocationService } from "../shared/services/location.service";
import { IpDataModel } from "../shared/models/ipData.model";

@Component({
  selector: "app-location",
  templateUrl: "./location.component.html",
  styleUrls: ["./location.component.scss"],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class LocationComponent implements OnInit {
  city: string;
  constructor(private locationService: LocationService) {}
  ngOnInit() {
    this.locationService.getLocation().subscribe((data: IpDataModel) => {
      if (data?.ip) {
        this.city = data.city;
      } else {
        this.city = "Error occured";
      }
    });
  }
}
