import { Component, OnInit } from "@angular/core";
import { LocationService } from "../shared/services/location.service";
import { IpDataModel } from "../shared/models/ipData.model";

@Component({
  selector: "app-location",
  templateUrl: "./location.component.html",
  styleUrls: ["./location.component.scss"],
})
export class LocationComponent implements OnInit {
  city: string;
  constructor(private locationService: LocationService) {}
  ngOnInit() {
    this.locationService.getLocation().subscribe((data: IpDataModel) => {
      this.city = data.city;
    });
  }
}
