import * as fixtureData from "../dummyData/fixtureData.json";

import { Component, OnInit } from "@angular/core";

import { ActivatedRoute } from "@angular/router";
import { USE_DUMMY_DATA } from "../constant";
import { FIXTURE_MODEL } from "../football.model";
import { FootballService } from "../football.service";

@Component({
  selector: "app-matches",
  templateUrl: "./matches.component.html",
  styleUrls: ["./matches.component.css"],
})
export class MatchesComponent implements OnInit {
  fixtureData: FIXTURE_MODEL[] = [];

  constructor(
    private route: ActivatedRoute,
    private footballService: FootballService
  ) {}

  ngOnInit(): void {
    const currentYear = this.footballService.getCurrentYear();

    const teamId = this.route.snapshot.paramMap?.get("id");
    // API call
    !USE_DUMMY_DATA &&
      this.footballService.getFixtures(Number(teamId), currentYear).subscribe({
        next: (fixtureData) => {
          this.fixtureData = fixtureData.response?.splice(0, 10);
        },
      });

    // Using dummy data
    USE_DUMMY_DATA &&
      (this.fixtureData = (fixtureData as any).default.response?.splice(0, 10));
  }
}
