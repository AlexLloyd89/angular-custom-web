import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injector, DoBootstrap } from "@angular/core";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { createCustomElement } from "@angular/elements";
import { LocationComponent } from "./location/location.component";

@NgModule({
  declarations: [AppComponent, LocationComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent, LocationComponent],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const customElement = createCustomElement(LocationComponent, {
      injector: this.injector,
    });
    customElements.define("app-location", customElement);
  }
}
