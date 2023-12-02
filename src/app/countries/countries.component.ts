import { Component, OnInit } from "@angular/core";

import { COUNTRIES } from "../constant";
import { FootballService } from "../football.service";

@Component({
  selector: "app-countries",
  templateUrl: "./countries.component.html",
  styleUrls: ["./countries.component.css"],
})
export class CountriesComponent implements OnInit {
  countries: string[] = COUNTRIES;
  selectedCountry = "england";

  constructor(private footballService: FootballService) {}

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
