import * as leagueData from "../dummyData/leagueData.json";
import * as standingData from "../dummyData/standingData.json";

import { Component, Input, OnInit } from "@angular/core";
import { LEAGUE_MODEL, STANDING } from "../football.model";

import { FootballService } from "../football.service";
import { TOP_LEAGUES } from "../constant";

@Component({
  selector: "app-league",
  templateUrl: "./league.component.html",
  styleUrls: ["./league.component.css"],
})
export class LeagueComponent implements OnInit {
  @Input() selectedCountry: string = "england";
  standingData: STANDING[] = [];
  LeagueData: LEAGUE_MODEL[] = [];

  constructor(private footballService: FootballService) {}

  ngOnInit(): void {
    const currentYear = this.footballService.getCurrentYear();

    const currentTopLeague = TOP_LEAGUES.filter(
      (league) => league.country.toLowerCase() === this.selectedCountry
    )[0].league;

    // FIXME: uncomment before commit
    // this.footballService
    //   .getLeague(currentTopLeague, currentYear)
    //   .subscribe((leagueData) => {
    //     this.LeagueData = leagueData.response;
    //     this.triggerStandingAPI(currentYear);
    //   });

    // Using dummy data // FIXME: comment before commit
    this.LeagueData = (leagueData as any).default.response;
    this.triggerStandingAPI(currentYear);
  }

  triggerStandingAPI(currentYear: number): void {
    const leagueId = this.LeagueData.filter(
      (league) => league.country.name.toLowerCase() == this.selectedCountry
    )[0].league.id;

    // FIXME: uncomment before commit
    // this.footballService
    //   .getStandings(leagueId, currentYear)
    //   .subscribe((standingData) => {
    //     this.standingData = standingData.response[0].league.standings[0];
    //   });

    // Using dummy data // FIXME: comment before commit
    this.standingData = (
      standingData as any
    ).default.response[0].league.standings[0];
  }
}
