import { API_KEY, FOOTBALL_BASE_ENDPOINT } from "./constant";
import {
  FIXTURE_API_MODEL,
  LEAGUE_API_MODEL,
  STANDING_API_MODEL,
} from "./football.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FootballService {
  headers = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.headers.set("Content-Type", "application/json; charset=utf-8");
    this.headers = this.headers.append(
      "x-rapidapi-host",
      "v3.football.api-sports.io"
    );
    this.headers = this.headers.append("x-rapidapi-key", API_KEY);
  }

  getLeague(leagueName: string, season: number): Observable<LEAGUE_API_MODEL> {
    return this.http.get<LEAGUE_API_MODEL>(
      FOOTBALL_BASE_ENDPOINT +
        "/leagues?name=" +
        leagueName +
        "&season=" +
        season,
      {
        headers: this.headers,
      }
    );
  }

  getStandings(
    leagueId: number,
    season: number
  ): Observable<STANDING_API_MODEL> {
    return this.http.get<STANDING_API_MODEL>(
      FOOTBALL_BASE_ENDPOINT +
        "/standings?league=" +
        leagueId +
        "&season=" +
        season,
      {
        headers: this.headers,
      }
    );
  }

  getFixtures(teamId: number, season: number): Observable<FIXTURE_API_MODEL> {
    return this.http.get<FIXTURE_API_MODEL>(
      FOOTBALL_BASE_ENDPOINT + "/fixtures?team=" + teamId + "&season=" + season,
      {
        headers: this.headers,
      }
    );
  }

  getCurrentYear(): number {
    const currentTimeStamp = new Date();
    return currentTimeStamp.getFullYear();
  }
}
