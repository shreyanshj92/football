export interface LEAGUE_API_MODEL {
  errors: any[];
  get: string;
  paging: { current: number; total: number };
  parameters: { country: string };
  response: LEAGUE_MODEL[];
  results: number;
}

export interface LEAGUE_MODEL {
  country: COUNTRY;
  league: LEAGUE;
  seasons: SEASON[];
}

interface COUNTRY {
  code: string;
  flag: string;
  name: string;
}

interface LEAGUE {
  id: number;
  logo: string;
  type: string;
  name: string;
}

interface SEASON {
  coverage: COVERAGE;
  current: boolean;
  end: string;
  start: string;
  year: number;
}

interface COVERAGE {
  fixtures: FIXTURE;
  injuries: boolean;
  odds: boolean;
  players: boolean;
  predictions: boolean;
  standings: boolean;
  top_assists: boolean;
  top_cards: boolean;
  top_scorers: boolean;
}
interface FIXTURE {
  events: boolean;
  lineups: boolean;
  statistics_fixtures: boolean;
  statistics_players: boolean;
}

export interface STANDING_API_MODEL {
  errors: any[];
  get: string;
  paging: { current: number; total: number };
  parameters: { league: string; season: string };
  response: { league: STANDING_LEAGUE }[];
  results: number;
}

export interface STANDING_LEAGUE {
  country: string;
  flag: string;
  id: number;
  logo: string;
  name: string;
  season: number;
  standings: [STANDING[]];
}

export interface STANDING {
  all: {
    played: number;
    win: number;
    draw: number;
    lose: number;
    goals: { for: number; against: number };
  };
  away: {
    played: number;
    win: number;
    draw: number;
    lose: number;
    goals: { for: number; against: number };
  };
  description: string;
  form: string;
  goalsDiff: number;
  group: string;
  home: {
    played: number;
    win: number;
    draw: number;
    lose: number;
    goals: { for: number; against: number };
  };
  points: number;
  rank: number;
  status: string;
  team: {
    id: number;
    name: string;
    logo: string;
  };
  update: string;
}

export interface FIXTURE_API_MODEL {
  errors: any[];
  get: string;
  paging: { current: number; total: number };
  parameters: { league: string; season: string };
  response: FIXTURE_MODEL[];
  results: number;
}

export interface FIXTURE_MODEL {
  fixture: FIXTURE;
  goals: { away: number; home: number };
  league: FIXTURE_LEAGUE;
  score: {
    extratime: { home: number; away: number };
    fulltime: { home: number; away: number };
    halftime: { home: number; away: number };
    penalty: { home: number; away: number };
  };
  teams: {
    away: FIXTURE_TEAM;
    home: FIXTURE_TEAM;
  };
}

interface FIXTURE {
  date: string;
  id: number;
  periods: { first: number; second: number };
  referee: string;
  status: { long: string; short: string; elapsed: number };
  timestamp: number;
  timezone: string;
}

interface FIXTURE_LEAGUE {
  country: string;
  flag: string;
  id: number;
  logo: string;
  name: string;
  round: string;
  season: number;
}

interface FIXTURE_TEAM {
  id: number;
  logo: string;
  name: string;
  winner: boolean;
}
