import * as fixtureData from "../dummyData/fixtureData.json";

import { Component, OnInit } from "@angular/core";

import { ActivatedRoute } from "@angular/router";
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

    const teamId = this.route.snapshot.paramMap.get("id");
    // this.footballService
    //   .getFixtures(Number(teamId), currentYear)
    //   .subscribe((fixtureData) => {
    //     this.fixtureData = fixtureData.response;
    //   });

    // Using dummy data // FIXME: comment before commit
    this.fixtureData = (fixtureData as any).default.response;
  }
}
