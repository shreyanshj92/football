import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";

@Component({
  selector: "app-countries",
  templateUrl: "./countries.component.html",
  styleUrls: ["./countries.component.css"],
})
export class CountriesComponent implements OnInit {
  leagues: string[] = ["england", "spain", "germany", "france", "italy"];
  selectedCountry = "england";

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSelectCountry(event: string): void {
    this.selectedCountry = event;
  }
}
