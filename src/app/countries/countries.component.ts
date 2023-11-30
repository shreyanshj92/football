import { Component, OnInit } from "@angular/core";

import { FootballService } from "../football.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-countries",
  templateUrl: "./countries.component.html",
  styleUrls: ["./countries.component.css"],
})
export class CountriesComponent implements OnInit {
  leagues: string[] = ["england", "spain", "germany", "france", "italy"];
  selectedCountry = "england";

  constructor(
    private router: Router,
    private footballService: FootballService
  ) {}

  ngOnInit(): void {
    const isSelectedCountry = this.footballService.selectedCountry.getValue();
    this.selectedCountry = isSelectedCountry || this.selectedCountry;
    this.footballService.selectedCountry.next(this.selectedCountry);
  }

  onSelectCountry(event: string) {
    this.selectedCountry = event;
    this.footballService.selectedCountry.next(event);
  }
}
