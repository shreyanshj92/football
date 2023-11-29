import { RouterModule, Routes } from "@angular/router";

import { CountriesComponent } from "./countries/countries.component";
import { MatchesComponent } from "./matches/matches.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  { path: "", redirectTo: "/countries", pathMatch: "full" },
  { path: "countries", component: CountriesComponent },
  { path: "matches/:id", component: MatchesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
