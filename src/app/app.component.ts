import { Component } from "@angular/core";

@Component({
  selector: "bb-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  user;

  constructor() {
    if (localStorage.user && localStorage.configurations) {
      this.user = JSON.parse(localStorage.getItem("user"));
    }
  }
}
