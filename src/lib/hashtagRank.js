const hashtagRank = [
  {
    name: 'Nikola Jokic',
    team: 'DEN',
    position: 'C',
  },
  {
    name: 'Kevin Durant',
    team: 'BRO',
    position: 'SF,PF',
  },
  {
    name: 'Joel Embiid',
    team: 'PHI',
    position: 'PF,C',
  },
  {
    name: 'James Harden',
    team: 'PHI',
    position: 'PG,SG',
  },
  {
    name: 'Giannis Antetokounmpo',
    team: 'MIL',
    position: 'PF,C',
  },
  {
    name: 'LeBron James',
    team: 'LAL',
    position: 'SF,PF',
  },
  {
    name: 'Stephen Curry',
    team: 'GSW',
    position: 'PG',
  },
  {
    name: 'Karl-Anthony Towns',
    team: 'MIN',
    position: 'PF,C',
  },
  {
    name: 'Kyrie Irving',
    team: 'BRO',
    position: 'PG,SG',
  },
  {
    name: 'Luka Doncic',
    team: 'DAL',
    position: 'PG,SG',
  },
  {
    name: 'Trae Young',
    team: 'ATL',
    position: 'PG',
  },
  {
    name: 'LaMelo Ball',
    team: 'CHA',
    position: 'PG,SG',
  },
  {
    name: 'Damian Lillard',
    team: 'POR',
    position: 'PG',
  },
  {
    name: 'Jayson Tatum',
    team: 'BOS',
    position: 'SF,PF',
  },
  {
    name: 'Anthony Davis',
    team: 'LAL',
    position: 'PF,C',
  },
  {
    name: 'Tyrese Haliburton',
    team: 'IND',
    position: 'PG,SG',
  },
  {
    name: 'Kawhi Leonard',
    team: 'LAC',
    position: 'SG,SF',
  },
  {
    name: 'Devin Booker',
    team: 'PHX',
    position: 'SG,SF',
  },
  {
    name: 'Paul George',
    team: 'LAC',
    position: 'SF,PF',
  },
  {
    name: 'Jimmy Butler',
    team: 'MIA',
    position: 'SF,PF',
  },
  {
    name: 'Khris Middleton',
    team: 'MIL',
    position: 'SF,PF',
  },
  {
    name: 'Kristaps Porzingis',
    team: 'WAS',
    position: 'PF,C',
  },
  {
    name: 'Bam Adebayo',
    team: 'MIA',
    position: 'C',
  },
  {
    name: 'DeMar DeRozan',
    team: 'CHI',
    position: 'SF,PF',
  },
  {
    name: 'Chris Paul',
    team: 'PHX',
    position: 'PG',
  },
  {
    name: 'Domantas Sabonis',
    team: 'SAC',
    position: 'PF,C',
  },
  {
    name: 'Shai Gilgeous-Alexander',
    team: 'OKL',
    position: 'PG,SG',
  },
  {
    name: 'Fred VanVleet',
    team: 'TOR',
    position: 'PG',
  },
  {
    name: 'Robert Williams',
    team: 'BOS',
    position: 'C',
  },
  {
    name: 'Darius Garland',
    team: 'CLE',
    position: 'PG',
  },
  {
    name: 'Jrue Holiday',
    team: 'MIL',
    position: 'PG,SG',
  },
  {
    name: 'Myles Turner',
    team: 'IND',
    position: 'C',
  },
  {
    name: 'Donovan Mitchell',
    team: 'CLE',
    position: 'PG,SG',
  },
  {
    name: 'Rudy Gobert',
    team: 'MIN',
    position: 'C',
  },
  {
    name: 'Ja Morant',
    team: 'MEM',
    position: 'PG',
  },
  {
    name: 'Jarrett Allen',
    team: 'CLE',
    position: 'C',
  },
  {
    name: 'Bradley Beal',
    team: 'WAS',
    position: 'SG',
  },
  {
    name: 'Deandre Ayton',
    team: 'PHX',
    position: 'C',
  },
  {
    name: 'Zach LaVine',
    team: 'CHI',
    position: 'SG,SF',
  },
  {
    name: 'Terry Rozier',
    team: 'CHA',
    position: 'PG,SG',
  },
  {
    name: 'Nikola Vucevic',
    team: 'CHI',
    position: 'C',
  },
  {
    name: 'Desmond Bane',
    team: 'MEM',
    position: 'SG,SF',
  },
  {
    name: 'Anthony Edwards',
    team: 'MIN',
    position: 'SG,SF',
  },
  {
    name: 'Cade Cunningham',
    team: 'DET',
    position: 'PG,SG',
  },
  {
    name: 'Dejounte Murray',
    team: 'ATL',
    position: 'PG,SG',
  },
  {
    name: 'Jaren Jackson Jr.',
    team: 'MEM',
    position: 'PF,C',
  },
  {
    name: 'Jaylen Brown',
    team: 'BOS',
    position: 'SG,SF',
  },
  {
    name: 'Pascal Siakam',
    team: 'TOR',
    position: 'PF,C',
  },
  {
    name: 'Jonas Valanciunas',
    team: 'NOP',
    position: 'C',
  },
  {
    name: 'Kyle Lowry',
    team: 'MIA',
    position: 'PG',
  },
  {
    name: 'Evan Mobley',
    team: 'CLE',
    position: 'PF,C',
  },
  {
    name: 'Jordan Poole',
    team: 'GSW',
    position: 'PG,SG',
  },
  {
    name: 'John Collins',
    team: 'ATL',
    position: 'PF,C',
  },
  {
    name: "De'Aaron Fox",
    team: 'SAC',
    position: 'PG',
  },
  {
    name: 'Scottie Barnes',
    team: 'TOR',
    position: 'SF,PF',
  },
  {
    name: 'Mikal Bridges',
    team: 'PHX',
    position: 'SG,SF',
  },
  {
    name: 'CJ McCollum',
    team: 'NOP',
    position: 'PG,SG',
  },
  {
    name: 'Tyrese Maxey',
    team: 'PHI',
    position: 'PG,SG',
  },
  {
    name: 'Gordon Hayward',
    team: 'CHA',
    position: 'SF,PF',
  },
  {
    name: 'Michael Porter Jr.',
    team: 'DEN',
    position: 'SF,PF',
  },
  {
    name: 'Brandon Clarke',
    team: 'MEM',
    position: 'SF,PF',
  },
  {
    name: 'PJ Washington',
    team: 'CHA',
    position: 'PF,C',
  },
  {
    name: 'Jamal Murray',
    team: 'DEN',
    position: 'PG,SG',
  },
  {
    name: 'Julius Randle',
    team: 'NYK',
    position: 'PF',
  },
  {
    name: 'Brandon Ingram',
    team: 'NOP',
    position: 'SF,PF',
  },
  {
    name: 'Tyler Herro',
    team: 'MIA',
    position: 'PG,SG',
  },
  {
    name: 'Draymond Green',
    team: 'GSW',
    position: 'PF,C',
  },
  {
    name: 'OG Anunoby',
    team: 'TOR',
    position: 'SG,SF',
  },
  {
    name: 'Devin Vassell',
    team: 'SAS',
    position: 'SG,SF',
  },
  {
    name: 'Tobias Harris',
    team: 'PHI',
    position: 'SF,PF',
  },
  {
    name: "D'Angelo Russell",
    team: 'MIN',
    position: 'PG,SG',
  },
  {
    name: 'Ivica Zubac',
    team: 'LAC',
    position: 'C',
  },
  {
    name: 'Onyeka Okongwu',
    team: 'ATL',
    position: 'C',
  },
  {
    name: 'Zion Williamson',
    team: 'NOP',
    position: 'PF',
  },
  {
    name: 'Jerami Grant',
    team: 'POR',
    position: 'PF',
  },
  {
    name: 'Wendell Carter Jr.',
    team: 'ORL',
    position: 'PF,C',
  },
  {
    name: 'Lauri Markkanen',
    team: 'UTA',
    position: 'SF,PF',
  },
  {
    name: 'Keegan Murray',
    team: 'SAC',
    position: 'SF,PF',
  },
  {
    name: 'Al Horford',
    team: 'BOS',
    position: 'PF,C',
  },
  {
    name: 'Marcus Smart',
    team: 'BOS',
    position: 'PG,SG',
  },
  {
    name: 'Jalen Brunson',
    team: 'NYK',
    position: 'PG,SG',
  },
  {
    name: 'Gary Trent Jr.',
    team: 'TOR',
    position: 'PG,SG',
  },
  {
    name: 'Jakob Poeltl',
    team: 'SAS',
    position: 'C',
  },
  {
    name: 'Alperen Sengun',
    team: 'HOU',
    position: 'C',
  },
  {
    name: 'Ben Simmons',
    team: 'BRO',
    position: 'PG',
  },
  {
    name: 'Keldon Johnson',
    team: 'SAS',
    position: 'SF,PF',
  },
  {
    name: 'Brook Lopez',
    team: 'MIL',
    position: 'C',
  },
  {
    name: 'Franz Wagner',
    team: 'ORL',
    position: 'SF,PF',
  },
  {
    name: 'Saddiq Bey',
    team: 'DET',
    position: 'SF,PF',
  },
  {
    name: 'Robert Covington',
    team: 'LAC',
    position: 'SF,PF',
  },
  {
    name: 'Kelly Olynyk',
    team: 'UTA',
    position: 'C',
  },
  {
    name: 'Klay Thompson',
    team: 'GSW',
    position: 'SG,SF',
  },
  {
    name: 'Lonzo Ball',
    team: 'CHI',
    position: 'PG,SG',
  },
  {
    name: 'Isaiah Hartenstein',
    team: 'NYK',
    position: 'C',
  },
  {
    name: 'Paolo Banchero',
    team: 'ORL',
    position: 'PF',
  },
  {
    name: 'Monte Morris',
    team: 'WAS',
    position: 'PG',
  },
  {
    name: 'Josh Giddey',
    team: 'OKL',
    position: 'SG,SF',
  },
  {
    name: 'Christian Wood',
    team: 'DAL',
    position: 'PF,C',
  },
  {
    name: 'Jusuf Nurkic',
    team: 'POR',
    position: 'C',
  },
  {
    name: 'Mike Conley',
    team: 'UTA',
    position: 'PG',
  },
  {
    name: 'Jabari Smith Jr',
    team: 'HOU',
    position: 'PF',
  },
  {
    name: 'JaVale McGee',
    team: 'DAL',
    position: 'C',
  },
  {
    name: 'Tre Jones',
    team: 'SAS',
    position: 'PG',
  },
  {
    name: 'Kevin Porter Jr.',
    team: 'HOU',
    position: 'PG',
  },
  {
    name: 'Jarred Vanderbilt',
    team: 'UTA',
    position: 'PF',
  },
  {
    name: 'Clint Capela',
    team: 'ATL',
    position: 'C',
  },
  {
    name: 'Herbert Jones',
    team: 'NOP',
    position: 'SF,PF',
  },
  {
    name: 'Bobby Portis',
    team: 'MIL',
    position: 'PF,C',
  },
  {
    name: 'Buddy Hield',
    team: 'IND',
    position: 'SG,SF',
  },
  {
    name: 'Dorian Finney-Smith',
    team: 'DAL',
    position: 'SF,PF',
  },
  {
    name: 'Kyle Kuzma',
    team: 'WAS',
    position: 'PF',
  },
  {
    name: 'Cameron Johnson',
    team: 'PHX',
    position: 'SF,PF',
  },
  {
    name: 'Bogdan Bogdanovic',
    team: 'ATL',
    position: 'SG,SF',
  },
  {
    name: 'Jalen Green',
    team: 'HOU',
    position: 'SG',
  },
  {
    name: 'Nicolas Claxton',
    team: 'BRO',
    position: 'C',
  },
  {
    name: 'Anfernee Simons',
    team: 'POR',
    position: 'PG,SG',
  },
  {
    name: 'Spencer Dinwiddie',
    team: 'DAL',
    position: 'PG,SG',
  },
  {
    name: 'Collin Sexton',
    team: 'UTA',
    position: 'PG,SG',
  },
  {
    name: 'Cody Martin',
    team: 'CHA',
    position: 'SG,SF',
  },
  {
    name: 'Bones Hyland',
    team: 'DEN',
    position: 'PG,SG',
  },
  {
    name: 'Jalen Smith',
    team: 'IND',
    position: 'PF,C',
  },
  {
    name: 'Kendrick Nunn',
    team: 'LAL',
    position: 'PG,SG',
  },
  {
    name: 'Malcolm Brogdon',
    team: 'BOS',
    position: 'PG,SG',
  },
  {
    name: 'Daniel Gafford',
    team: 'WAS',
    position: 'C',
  },
  {
    name: 'Mitchell Robinson',
    team: 'NYK',
    position: 'C',
  },
  {
    name: 'Norman Powell',
    team: 'LAC',
    position: 'SG,SF',
  },
  {
    name: 'Aaron Gordon',
    team: 'DEN',
    position: 'SF,PF',
  },
  {
    name: 'Patrick Williams',
    team: 'CHI',
    position: 'PF',
  },
  {
    name: 'Harrison Barnes',
    team: 'SAC',
    position: 'SF,PF',
  },
  {
    name: "De'Anthony Melton",
    team: 'PHI',
    position: 'PG,SG',
  },
  {
    name: 'Otto Porter Jr.',
    team: 'TOR',
    position: 'SF,PF',
  },
  {
    name: 'Kentavious Caldwell-Pope',
    team: 'DEN',
    position: 'SG,SF',
  },
  {
    name: 'Richaun Holmes',
    team: 'SAC',
    position: 'C',
  },
  {
    name: 'Andrew Wiggins',
    team: 'GSW',
    position: 'SF,PF',
  },
  {
    name: 'Matisse Thybulle',
    team: 'PHI',
    position: 'SG,SF',
  },
  {
    name: 'Gary Payton II',
    team: 'POR',
    position: 'PG,SG',
  },
  {
    name: 'Jalen Suggs',
    team: 'ORL',
    position: 'PG,SG',
  },
  {
    name: 'Mo Bamba',
    team: 'ORL',
    position: 'C',
  },
  {
    name: 'Dillon Brooks',
    team: 'MEM',
    position: 'SG,SF',
  },
  {
    name: 'Bruce Brown',
    team: 'DEN',
    position: 'SF,PF',
  },
  {
    name: 'Patrick Beverley',
    team: 'LAL',
    position: 'PG,SG',
  },
  {
    name: 'Nassir Little',
    team: 'POR',
    position: 'SF,PF',
  },
  {
    name: 'Jaden McDaniels',
    team: 'MIN',
    position: 'SF,PF',
  },
  {
    name: 'Derrick White',
    team: 'BOS',
    position: 'PG,SG',
  },
  {
    name: 'Alex Caruso',
    team: 'CHI',
    position: 'PG,SG',
  },
  {
    name: 'Caleb Martin',
    team: 'MIA',
    position: 'SF,PF',
  },
  {
    name: 'Markelle Fultz',
    team: 'ORL',
    position: 'PG,SG',
  },
  {
    name: 'Bojan Bogdanovic',
    team: 'DET',
    position: 'SF,PF',
  },
  {
    name: "Jae'Sean Tate",
    team: 'HOU',
    position: 'SF,PF',
  },
  {
    name: 'Kelly Oubre Jr.',
    team: 'CHA',
    position: 'SG,SF',
  },
  {
    name: 'Reggie Jackson',
    team: 'LAC',
    position: 'PG,SG',
  },
  {
    name: 'Pat Connaughton',
    team: 'MIL',
    position: 'SG,SF',
  },
  {
    name: 'Isaiah Stewart',
    team: 'DET',
    position: 'C',
  },
  {
    name: 'Luguentz Dort',
    team: 'OKL',
    position: 'SG,SF',
  },
  {
    name: 'Chuma Okeke',
    team: 'ORL',
    position: 'PF',
  },
  {
    name: 'Seth Curry',
    team: 'BRO',
    position: 'PG,SG',
  },
  {
    name: 'Kevin Huerter',
    team: 'SAC',
    position: 'SG,SF',
  },
  {
    name: 'Mason Plumlee',
    team: 'CHA',
    position: 'C',
  },
  {
    name: 'Chris Duarte',
    team: 'IND',
    position: 'SG,SF',
  },
  {
    name: 'Darius Bazley',
    team: 'OKL',
    position: 'SF,PF',
  },
  {
    name: 'Cole Anthony',
    team: 'ORL',
    position: 'PG',
  },
  {
    name: 'Jonathan Isaac',
    team: 'ORL',
    position: 'SF,PF',
  },
  {
    name: 'Jae Crowder',
    team: 'PHX',
    position: 'SF,PF',
  },
  {
    name: 'Grayson Allen',
    team: 'MIL',
    position: 'SG,SF',
  },
  {
    name: 'Damian Jones',
    team: 'LAL',
    position: 'C',
  },
  {
    name: 'Andre Drummond',
    team: 'CHI',
    position: 'C',
  },
  {
    name: 'Paul Reed',
    team: 'PHI',
    position: 'PF,C',
  },
  {
    name: 'Will Barton',
    team: 'WAS',
    position: 'SG,SF',
  },
  {
    name: 'Thomas Bryant',
    team: 'LAL',
    position: 'C',
  },
  {
    name: 'Immanuel Quickley',
    team: 'NYK',
    position: 'PG,SG',
  },
  {
    name: 'Victor Oladipo',
    team: 'MIA',
    position: 'SG,SF',
  },
  {
    name: 'Isaiah Jackson',
    team: 'IND',
    position: 'PF,C',
  },
  {
    name: 'Grant Williams',
    team: 'BOS',
    position: 'SF,PF',
  },
  {
    name: 'Steven Adams',
    team: 'MEM',
    position: 'C',
  },
  {
    name: 'Aleksej Pokusevski',
    team: 'OKL',
    position: 'SF,PF,C',
  },
  {
    name: 'Kevin Love',
    team: 'CLE',
    position: 'PF,C',
  },
  {
    name: 'Tim Hardaway Jr.',
    team: 'DAL',
    position: 'SG,SF',
  },
  {
    name: 'RJ Barrett',
    team: 'NYK',
    position: 'SF',
  },
  {
    name: 'Killian Hayes',
    team: 'DET',
    position: 'PG,SG',
  },
  {
    name: 'Derrick Rose',
    team: 'NYK',
    position: 'PG',
  },
  {
    name: 'Quentin Grimes',
    team: 'NYK',
    position: 'SG,SF',
  },
  {
    name: 'Kyle Anderson',
    team: 'MIN',
    position: 'SF,PF',
  },
  {
    name: 'Delon Wright',
    team: 'WAS',
    position: 'PG,SG',
  },
  {
    name: "Royce O'Neale",
    team: 'BRO',
    position: 'SG,SF',
  },
  {
    name: 'Deni Avdija',
    team: 'WAS',
    position: 'SF,PF',
  },
  {
    name: 'Cameron Payne',
    team: 'PHX',
    position: 'PG,SG',
  },
  {
    name: 'Bennedict Mathurin',
    team: 'IND',
    position: 'SG,SF',
  },
  {
    name: 'Jaxson Hayes',
    team: 'NOP',
    position: 'PF,C',
  },
  {
    name: 'Jordan Clarkson',
    team: 'UTA',
    position: 'PG,SG',
  },
  {
    name: 'Talen Horton-Tucker',
    team: 'UTA',
    position: 'SG,SF',
  },
  {
    name: 'Josh Richardson',
    team: 'SAS',
    position: 'SG,SF',
  },
  {
    name: 'Tyus Jones',
    team: 'MEM',
    position: 'PG',
  },
  {
    name: 'Josh Hart',
    team: 'POR',
    position: 'SG,SF',
  },
  {
    name: 'Reggie Bullock',
    team: 'DAL',
    position: 'SF,PF',
  },
  {
    name: 'Obi Toppin',
    team: 'NYK',
    position: 'PF',
  },
  {
    name: 'Trendon Watford',
    team: 'POR',
    position: 'PF,C',
  },
  {
    name: "De'Andre Hunter",
    team: 'ATL',
    position: 'SF,PF',
  },
  {
    name: 'Montrezl Harrell',
    team: 'PHI',
    position: 'PF,C',
  },
  {
    name: 'Jonathan Kuminga',
    team: 'GSW',
    position: 'PF,C',
  },
  {
    name: 'Jaden Ivey',
    team: 'DET',
    position: 'PG,SG',
  },
]

export default hashtagRank
