import { Component, OnInit } from "@angular/core";
import { LEAGUE_MODEL, STANDING } from "../football.model";

import { FootballService } from "../football.service";
import { TOP_LEAGUES } from "../constant";

@Component({
  selector: "app-league",
  templateUrl: "./league.component.html",
  styleUrls: ["./league.component.css"],
})
export class LeagueComponent implements OnInit {
  standingData: STANDING[] = [];
  LeagueData: LEAGUE_MODEL[] = [];

  constructor(private footballService: FootballService) {}

  ngOnInit(): void {
    const currentYear = this.footballService.getCurrentYear();
    this.footballService.selectedCountry.subscribe(
      (selectedCountry: string) => {
        const currentTopLeague = TOP_LEAGUES.filter(
          (league) => league.country?.toLowerCase() === selectedCountry
        )[0]?.league;

        this.footballService
          .getLeague(currentTopLeague, currentYear)
          .subscribe((leagueData) => {
            this.LeagueData = leagueData.response;
            this.triggerStandingAPI(currentYear, selectedCountry);
          });

        // Using dummy data
        // this.LeagueData = (leagueData as any).default.response;
        // this.triggerStandingAPI(currentYear);
      }
    );
  }

  triggerStandingAPI(currentYear: number, selectedCountry: string): void {
    const leagueId = this.LeagueData?.filter(
      (league) => league?.country?.name?.toLowerCase() == selectedCountry
    )[0]?.league?.id;

    this.footballService
      .getStandings(leagueId, currentYear)
      .subscribe((standingData) => {
        this.standingData = standingData.response[0]?.league?.standings[0];
      });

    // Using dummy data
    // this.standingData = (
    //   standingData as any
    // ).default.response[0].league.standings[0];
  }
}
