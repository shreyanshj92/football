import * as leagueData from "../dummyData/leagueData.json";
import * as standingData from "../dummyData/standingData.json";

import { Component, OnInit } from "@angular/core";
import { TOP_LEAGUES, USE_DUMMY_DATA } from "../constant";
import { LEAGUE_MODEL, STANDING } from "../football.model";

import { FootballService } from "../football.service";

@Component({
  selector: "app-league",
  templateUrl: "./league.component.html",
  styleUrls: ["./league.component.css"],
})
export class LeagueComponent implements OnInit {
  standingData: STANDING[] = [];
  leagueData: LEAGUE_MODEL[] = [];
  currentYear = this.footballService.getCurrentYear();
  currentTopLeague!: string;
  selectedCountry!: string;

  constructor(private footballService: FootballService) {}

  ngOnInit(): void {
    this.footballService.selectedCountry.subscribe(
      (selectedCountry: string) => {
        this.selectedCountry = selectedCountry;
        this.currentTopLeague = TOP_LEAGUES.filter(
          (league) => league.country?.toLowerCase() === selectedCountry
        )[0].league;

        this.triggerLeagueAPI(selectedCountry);
      }
    );
  }

  triggerLeagueAPI(selectedCountry: string): void {
    // API call
    !USE_DUMMY_DATA &&
      this.footballService
        .getLeague(selectedCountry, this.currentYear)
        .subscribe({
          next: (leagueData) => {
            this.leagueData = leagueData.response;
            if (this.currentTopLeague) {
              const leagueId = this.leagueData?.find(
                (league: LEAGUE_MODEL) =>
                  league.league.name === this.currentTopLeague
              )?.league?.id;

              this.triggerStandingAPI(this.currentYear, Number(leagueId));
            }
          },
        });

    // Using dummy data
    if (USE_DUMMY_DATA) {
      this.leagueData = (leagueData as any).default.response;
      if (this.currentTopLeague) {
        const leagueId = this.leagueData?.find(
          (league: LEAGUE_MODEL) => league.league.name === this.currentTopLeague
        )?.league?.id;
        this.triggerStandingAPI(this.currentYear, Number(leagueId));
      }
    }
  }

  onSelectLeague(event: any): void {
    this.triggerStandingAPI(this.currentYear, Number(event?.target?.value));
  }

  triggerStandingAPI(currentYear: number, leagueId: number): void {
    // API call
    !USE_DUMMY_DATA &&
      this.footballService.getStandings(currentYear, leagueId).subscribe({
        next: (standingData) => {
          this.standingData = standingData.response[0]?.league?.standings[0];
        },
      });

    // Using dummy data
    USE_DUMMY_DATA &&
      (this.standingData = (
        standingData as any
      ).default.response[0].league.standings[0]);
  }
}
