import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { API_KEY, FOOTBALL_BASE_ENDPOINT } from "./constant";
import {
  FIXTURE_API_MODEL,
  LEAGUE_API_MODEL,
  STANDING_API_MODEL,
} from "./football.model";

import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class FootballService {
  headers = new HttpHeaders();
  selectedCountry = new BehaviorSubject("england");

  constructor(private http: HttpClient) {
    this.headers = this.headers.append(
      "x-rapidapi-host",
      "v3.football.api-sports.io"
    );
    this.headers = this.headers.append("x-rapidapi-key", API_KEY);
  }

  getLeague(country: string, season: number): Observable<LEAGUE_API_MODEL> {
    return this.http.get<LEAGUE_API_MODEL>(
      FOOTBALL_BASE_ENDPOINT +
        "/leagues?country=" +
        country +
        "&season=" +
        season +
        "&type=league",
      {
        headers: this.headers,
      }
    );
  }

  getStandings(
    season: number,
    leagueId: number
  ): Observable<STANDING_API_MODEL> {
    return this.http.get<STANDING_API_MODEL>(
      FOOTBALL_BASE_ENDPOINT +
        "/standings?" +
        "season=" +
        season +
        "&league=" +
        leagueId,
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
