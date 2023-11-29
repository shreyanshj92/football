import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { CountriesComponent } from "./countries/countries.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { LeagueComponent } from "./league/league.component";
import { MatchesComponent } from "./matches/matches.component";
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [
    AppComponent,
    LeagueComponent,
    MatchesComponent,
    CountriesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
