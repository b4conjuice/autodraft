const hashtagRank = [
  {
    name: 'Nikola Jokic',
    team: 'DEN',
    position: 'C',
  },
  {
    name: 'James Harden',
    team: 'BRO',
    position: 'SG',
  },
  {
    name: 'Stephen Curry',
    team: 'GSW',
    position: 'PG',
  },
  {
    name: 'Kevin Durant',
    team: 'BRO',
    position: 'SF',
  },
  {
    name: 'Damian Lillard',
    team: 'POR',
    position: 'PG',
  },
  {
    name: 'Karl-Anthony Towns',
    team: 'MIN',
    position: 'C',
  },
  {
    name: 'Bradley Beal',
    team: 'WAS',
    position: 'SG',
  },
  {
    name: 'Jayson Tatum',
    team: 'BOS',
    position: 'PF',
  },
  {
    name: 'Joel Embiid',
    team: 'PHI',
    position: 'C',
  },
  {
    name: 'Giannis Antetokounmpo',
    team: 'MIL',
    position: 'PF',
  },
  {
    name: 'Paul George',
    team: 'LAC',
    position: 'SF',
  },
  {
    name: 'Luka Doncic',
    team: 'DAL',
    position: 'PG',
  },
  {
    name: 'Anthony Davis',
    team: 'LAL',
    position: 'PF',
  },
  {
    name: 'Kyrie Irving',
    team: 'BRO',
    position: 'PG',
  },
  {
    name: 'Trae Young',
    team: 'ATL',
    position: 'PG',
  },
  {
    name: 'Bam Adebayo',
    team: 'MIA',
    position: 'C',
  },
  {
    name: 'Fred VanVleet',
    team: 'TOR',
    position: 'SG',
  },
  {
    name: 'Jimmy Butler',
    team: 'MIA',
    position: 'SF',
  },
  {
    name: 'Domantas Sabonis',
    team: 'IND',
    position: 'PF',
  },
  {
    name: 'Shai Gilgeous-Alexander',
    team: 'OKL',
    position: 'SG',
  },
  {
    name: 'Nikola Vucevic',
    team: 'CHI',
    position: 'C',
  },
  {
    name: 'LeBron James',
    team: 'LAL',
    position: 'SF',
  },
  {
    name: 'Zach LaVine',
    team: 'CHI',
    position: 'SG',
  },
  {
    name: 'Chris Paul',
    team: 'PHX',
    position: 'PG',
  },
  {
    name: 'LaMelo Ball',
    team: 'CHA',
    position: 'PG',
  },
  {
    name: 'Michael Porter Jr.',
    team: 'DEN',
    position: 'SF',
  },
  {
    name: 'Jrue Holiday',
    team: 'MIL',
    position: 'PG',
  },
  {
    name: 'Jaren Jackson Jr.',
    team: 'MEM',
    position: 'PF',
  },
  {
    name: 'Richaun Holmes',
    team: 'SAC',
    position: 'C',
  },
  {
    name: 'Rudy Gobert',
    team: 'UTA',
    position: 'C',
  },
  {
    name: 'Tobias Harris',
    team: 'PHI',
    position: 'SF',
  },
  {
    name: 'Donovan Mitchell',
    team: 'UTA',
    position: 'SG',
  },
  {
    name: 'Myles Turner',
    team: 'IND',
    position: 'C',
  },
  {
    name: 'Kristaps Porzingis',
    team: 'DAL',
    position: 'C',
  },
  {
    name: 'Jaylen Brown',
    team: 'BOS',
    position: 'SG',
  },
  {
    name: 'Brandon Ingram',
    team: 'NOP',
    position: 'SF',
  },
  {
    name: 'Deandre Ayton',
    team: 'PHX',
    position: 'C',
  },
  {
    name: 'Clint Capela',
    team: 'ATL',
    position: 'C',
  },
  {
    name: 'Khris Middleton',
    team: 'MIL',
    position: 'SF',
  },
  {
    name: 'Zion Williamson',
    team: 'NOP',
    position: 'PF',
  },
  {
    name: 'Devin Booker',
    team: 'PHX',
    position: 'SG',
  },
  {
    name: 'Julius Randle',
    team: 'NYK',
    position: 'PF',
  },
  {
    name: 'Tyrese Haliburton',
    team: 'SAC',
    position: 'PG',
  },
  {
    name: 'OG Anunoby',
    team: 'TOR',
    position: 'SF',
  },
  {
    name: 'Robert Williams III',
    team: 'BOS',
    position: 'C',
  },
  {
    name: 'CJ McCollum',
    team: 'POR',
    position: 'SG',
  },
  {
    name: 'John Collins',
    team: 'ATL',
    position: 'PF',
  },
  {
    name: 'Lonzo Ball',
    team: 'CHI',
    position: 'PG',
  },
  {
    name: 'Gordon Hayward',
    team: 'CHA',
    position: 'SF',
  },
  {
    name: 'Draymond Green',
    team: 'GSW',
    position: 'PF',
  },
  {
    name: 'Pascal Siakam',
    team: 'TOR',
    position: 'PF',
  },
  {
    name: 'Derrick White',
    team: 'SAS',
    position: 'PG',
  },
  {
    name: "De'Aaron Fox",
    team: 'SAC',
    position: 'PG',
  },
  {
    name: 'Dejounte Murray',
    team: 'SAS',
    position: 'PG',
  },
  {
    name: 'Mike Conley',
    team: 'UTA',
    position: 'PG',
  },
  {
    name: 'Malcolm Brogdon',
    team: 'IND',
    position: 'PG',
  },
  {
    name: 'Jusuf Nurkic',
    team: 'POR',
    position: 'C',
  },
  {
    name: 'Jakob Poeltl',
    team: 'SAS',
    position: 'C',
  },
  {
    name: 'Mikal Bridges',
    team: 'PHX',
    position: 'SF',
  },
  {
    name: 'Terry Rozier',
    team: 'CHA',
    position: 'PG',
  },
  {
    name: 'Kyle Lowry',
    team: 'MIA',
    position: 'PG',
  },
  {
    name: 'Jonas Valanciunas',
    team: 'NOP',
    position: 'C',
  },
  {
    name: 'Bogdan Bogdanovic',
    team: 'ATL',
    position: 'SG',
  },
  {
    name: 'Darius Garland',
    team: 'CLE',
    position: 'PG',
  },
  {
    name: 'Russell Westbrook',
    team: 'LAL',
    position: 'PG',
  },
  {
    name: 'Ja Morant',
    team: 'MEM',
    position: 'PG',
  },
  {
    name: 'Jerami Grant',
    team: 'DET',
    position: 'SF',
  },
  {
    name: 'Caris LeVert',
    team: 'IND',
    position: 'SG',
  },
  {
    name: 'Collin Sexton',
    team: 'CLE',
    position: 'SG',
  },
  {
    name: 'Kemba Walker',
    team: 'NYK',
    position: 'PG',
  },
  {
    name: 'Isaiah Stewart',
    team: 'DET',
    position: 'C',
  },
  {
    name: 'Anthony Edwards',
    team: 'MIN',
    position: 'SG',
  },
  {
    name: 'Kawhi Leonard',
    team: 'LAC',
    position: 'SF',
  },
  {
    name: 'Christian Wood',
    team: 'HOU',
    position: 'C',
  },
  {
    name: 'Jarrett Allen',
    team: 'CLE',
    position: 'C',
  },
  {
    name: 'P.J. Washington',
    team: 'CHA',
    position: 'PF',
  },
  {
    name: 'Robert Covington',
    team: 'POR',
    position: 'PF',
  },
  {
    name: 'DeMar DeRozan',
    team: 'CHI',
    position: 'SG',
  },
  {
    name: 'Kevin Porter Jr.',
    team: 'HOU',
    position: 'SG',
  },
  {
    name: 'Chris Boucher',
    team: 'TOR',
    position: 'C',
  },
  {
    name: 'Marcus Smart',
    team: 'BOS',
    position: 'SG',
  },
  {
    name: 'Mitchell Robinson',
    team: 'NYK',
    position: 'C',
  },
  {
    name: 'Ben Simmons',
    team: 'PHI',
    position: 'PG',
  },
  {
    name: 'Nickeil Alexander-Walker',
    team: 'NOP',
    position: 'SG',
  },
  {
    name: "D'Angelo Russell",
    team: 'MIN',
    position: 'PG',
  },
  {
    name: 'Jamal Murray',
    team: 'DEN',
    position: 'PG',
  },
  {
    name: 'Jonathan Isaac',
    team: 'ORL',
    position: 'PF',
  },
  {
    name: 'Cade Cunningham',
    team: 'DET',
    position: 'PG',
  },
  {
    name: 'Evan Fournier',
    team: 'NYK',
    position: 'SG',
  },
  {
    name: 'Norman Powell',
    team: 'POR',
    position: 'SG',
  },
  {
    name: 'Buddy Hield',
    team: 'SAC',
    position: 'SG',
  },
  {
    name: 'T.J. McConnell',
    team: 'IND',
    position: 'PG',
  },
  {
    name: 'Brook Lopez',
    team: 'MIL',
    position: 'C',
  },
  {
    name: 'Nerlens Noel',
    team: 'NYK',
    position: 'C',
  },
  {
    name: 'Kelly Olynyk',
    team: 'DET',
    position: 'C',
  },
  {
    name: 'Harrison Barnes',
    team: 'SAC',
    position: 'SF',
  },
  {
    name: 'Spencer Dinwiddie',
    team: 'WAS',
    position: 'SG',
  },
  {
    name: 'Miles Bridges',
    team: 'CHA',
    position: 'SF',
  },
  {
    name: 'Derrick Favors',
    team: 'OKL',
    position: 'C',
  },
  {
    name: 'Reggie Jackson',
    team: 'LAC',
    position: 'PG',
  },
  {
    name: 'Saddiq Bey',
    team: 'DET',
    position: 'SF',
  },
  {
    name: 'Jalen Suggs',
    team: 'ORL',
    position: 'PG',
  },
  {
    name: "De'Andre Hunter",
    team: 'ATL',
    position: 'SF',
  },
  {
    name: 'Andrew Wiggins',
    team: 'GSW',
    position: 'SF',
  },
  {
    name: 'Mason Plumlee',
    team: 'CHA',
    position: 'C',
  },
  {
    name: 'Keldon Johnson',
    team: 'SAS',
    position: 'SF',
  },
  {
    name: 'Evan Mobley',
    team: 'CLE',
    position: 'PF',
  },
  {
    name: 'Bobby Portis',
    team: 'MIL',
    position: 'PF',
  },
  {
    name: 'Jordan Clarkson',
    team: 'UTA',
    position: 'SG',
  },
  {
    name: 'Joe Ingles',
    team: 'UTA',
    position: 'SF',
  },
  {
    name: 'Kyle Anderson',
    team: 'MEM',
    position: 'SF',
  },
  {
    name: 'Joe Harris',
    team: 'BRO',
    position: 'SG',
  },
  {
    name: 'Chuma Okeke',
    team: 'ORL',
    position: 'PF',
  },
  {
    name: 'Klay Thompson',
    team: 'GSW',
    position: 'SG',
  },
  {
    name: 'Daniel Gafford',
    team: 'WAS',
    position: 'C',
  },
  {
    name: "Jae'Sean Tate",
    team: 'HOU',
    position: ' ',
  },
  {
    name: "De'Anthony Melton",
    team: 'MEM',
    position: 'PG',
  },
  {
    name: 'Danny Green',
    team: 'PHI',
    position: 'SG',
  },
  {
    name: 'Ivica Zubac',
    team: 'LAC',
    position: 'C',
  },
  {
    name: 'Khem Birch',
    team: 'TOR',
    position: 'C',
  },
  {
    name: 'Wendell Carter Jr.',
    team: 'ORL',
    position: 'C',
  },
  {
    name: 'Mo Bamba',
    team: 'ORL',
    position: 'C',
  },
  {
    name: 'Dennis Schroder',
    team: 'BOS',
    position: 'PG',
  },
  {
    name: "Devonte' Graham",
    team: 'NOP',
    position: 'PG',
  },
  {
    name: 'Al Horford',
    team: 'BOS',
    position: 'C',
  },
  {
    name: 'Larry Nance Jr.',
    team: 'POR',
    position: 'PF',
  },
  {
    name: 'Matisse Thybulle',
    team: 'PHI',
    position: 'SF',
  },
  {
    name: 'Jalen Green',
    team: 'HOU',
    position: 'SG',
  },
  {
    name: 'Thomas Bryant',
    team: 'WAS',
    position: 'C',
  },
  {
    name: 'Will Barton',
    team: 'DEN',
    position: 'SF',
  },
  {
    name: 'RJ Barrett',
    team: 'NYK',
    position: 'SF',
  },
  {
    name: 'Montrezl Harrell',
    team: 'WAS',
    position: 'C',
  },
  {
    name: 'Aleksej Pokusevski',
    team: 'OKL',
    position: ' ',
  },
  {
    name: 'Thaddeus Young',
    team: 'SAS',
    position: 'PF',
  },
  {
    name: 'Dillon Brooks',
    team: 'MEM',
    position: 'SG',
  },
  {
    name: 'Kyle Kuzma',
    team: 'WAS',
    position: 'PF',
  },
  {
    name: 'Derrick Rose',
    team: 'NYK',
    position: 'PG',
  },
  {
    name: 'Terrence Ross',
    team: 'ORL',
    position: 'SG',
  },
  {
    name: 'Bojan Bogdanovic',
    team: 'UTA',
    position: 'PF',
  },
  {
    name: 'Facundo Campazzo',
    team: 'DEN',
    position: ' ',
  },
  {
    name: "Royce O'Neale",
    team: 'UTA',
    position: 'SF',
  },
  {
    name: 'Josh Giddey',
    team: 'OKL',
    position: ' ',
  },
  {
    name: 'Victor Oladipo',
    team: 'MIA',
    position: 'SG',
  },
  {
    name: 'Danilo Gallinari',
    team: 'ATL',
    position: 'PF',
  },
  {
    name: 'Duncan Robinson',
    team: 'MIA',
    position: 'SG',
  },
  {
    name: 'Tim Hardaway Jr.',
    team: 'DAL',
    position: 'SG',
  },
  {
    name: 'Serge Ibaka',
    team: 'LAC',
    position: 'C',
  },
  {
    name: 'Brandon Clarke',
    team: 'MEM',
    position: 'PF',
  },
  {
    name: 'Alperen Sengun',
    team: 'HOU',
    position: 'C',
  },
  {
    name: 'Lauri Markkanen',
    team: 'CLE',
    position: 'PF',
  },
  {
    name: 'Terance Mann',
    team: 'LAC',
    position: 'SF',
  },
  {
    name: 'Cameron Payne',
    team: 'PHX',
    position: 'PG',
  },
  {
    name: 'Donte DiVincenzo',
    team: 'MIL',
    position: 'SG',
  },
  {
    name: 'Tyler Herro',
    team: 'MIA',
    position: 'SG',
  },
  {
    name: 'T.J. Warren',
    team: 'IND',
    position: 'SF',
  },
  {
    name: 'Dorian Finney-Smith',
    team: 'DAL',
    position: 'SF',
  },
  {
    name: 'Marcus Morris Sr.',
    team: 'LAC',
    position: 'PF',
  },
  {
    name: 'Seth Curry',
    team: 'PHI',
    position: 'SG',
  },
  {
    name: 'Tyrese Maxey',
    team: 'PHI',
    position: 'SG',
  },
  {
    name: 'Markelle Fultz',
    team: 'ORL',
    position: 'PG',
  },
  {
    name: 'LaMarcus Aldridge',
    team: 'BRO',
    position: ' ',
  },
  {
    name: 'Isaiah Roby',
    team: 'OKL',
    position: 'PF',
  },
  {
    name: 'Daniel Theis',
    team: 'HOU',
    position: 'C',
  },
  {
    name: 'Malik Beasley',
    team: 'MIN',
    position: 'SG',
  },
  {
    name: 'Ricky Rubio',
    team: 'CLE',
    position: 'PG',
  },
  {
    name: 'Nicolas Batum',
    team: 'LAC',
    position: 'SF',
  },
  {
    name: 'Jeremy Lamb',
    team: 'IND',
    position: 'SG',
  },
  {
    name: 'Josh Hart',
    team: 'NOP',
    position: 'SG',
  },
  {
    name: 'Jordan Poole',
    team: 'GSW',
    position: 'SG',
  },
  {
    name: 'Jae Crowder',
    team: 'PHX',
    position: 'PF',
  },
  {
    name: 'Patrick Williams',
    team: 'CHI',
    position: 'SF',
  },
  {
    name: 'Aaron Gordon',
    team: 'DEN',
    position: 'PF',
  },
  {
    name: 'Goran Dragic',
    team: 'TOR',
    position: 'PG',
  },
  {
    name: 'Marvin Bagley III',
    team: 'SAC',
    position: 'PF',
  },
  {
    name: 'Cole Anthony',
    team: 'ORL',
    position: 'PG',
  },
  {
    name: 'Talen Horton-Tucker',
    team: 'LAL',
    position: 'SG',
  },
  {
    name: 'Coby White',
    team: 'CHI',
    position: 'PG',
  },
  {
    name: 'Eric Bledsoe',
    team: 'LAC',
    position: 'PG',
  },
  {
    name: 'Killian Hayes',
    team: 'DET',
    position: 'PG',
  },
  {
    name: 'Andre Drummond',
    team: 'PHI',
    position: 'C',
  },
  {
    name: 'John Wall',
    team: 'HOU',
    position: 'PG',
  },
  {
    name: 'Jaden McDaniels',
    team: 'MIN',
    position: 'SF',
  },
  {
    name: 'Juan Toscano-Anderson',
    team: 'GSW',
    position: 'PF',
  },
  {
    name: 'Jalen Brunson',
    team: 'DAL',
    position: 'PG',
  },
  {
    name: 'Devin Vassell',
    team: 'SAS',
    position: 'SG',
  },
  {
    name: 'Rui Hachimura',
    team: 'WAS',
    position: 'PF',
  },
  {
    name: 'Desmond Bane',
    team: 'MEM',
    position: ' ',
  },
  {
    name: 'Monte Morris',
    team: 'DEN',
    position: 'PG',
  },
  {
    name: 'Kevin Love',
    team: 'CLE',
    position: 'PF',
  },
  {
    name: 'Oshae Brissett',
    team: 'IND',
    position: 'PF',
  },
  {
    name: 'Alec Burks',
    team: 'NYK',
    position: 'SG',
  },
  {
    name: 'Otto Porter Jr.',
    team: 'GSW',
    position: 'SF',
  },
  {
    name: 'Josh Richardson',
    team: 'BOS',
    position: 'SG',
  },
  {
    name: 'Justin Holiday',
    team: 'IND',
    position: 'SG',
  },
  {
    name: 'Kelly Oubre Jr.',
    team: 'CHA',
    position: 'PF',
  },
  {
    name: 'Gary Trent Jr.',
    team: 'TOR',
    position: 'SG',
  },
  {
    name: 'Nicolas Claxton',
    team: 'BRO',
    position: 'C',
  },
  {
    name: 'Cameron Johnson',
    team: 'PHX',
    position: 'SF',
  },
  {
    name: 'Lonnie Walker IV',
    team: 'SAS',
    position: 'SF',
  },
  {
    name: 'Enes Kanter',
    team: 'BOS',
    position: 'C',
  },
  {
    name: 'Isaac Okoro',
    team: 'CLE',
    position: 'SF',
  },
  {
    name: 'Blake Griffin',
    team: 'BRO',
    position: 'PF',
  },
  {
    name: 'Maxi Kleber',
    team: 'DAL',
    position: 'PF',
  },
  {
    name: 'Doug McDermott',
    team: 'SAS',
    position: 'SF',
  },
  {
    name: 'Immanuel Quickley',
    team: 'NYK',
    position: 'PG',
  },
  {
    name: 'Eric Gordon',
    team: 'HOU',
    position: 'SG',
  },
  {
    name: 'Delon Wright',
    team: 'ATL',
    position: 'SG',
  },
  {
    name: 'Trey Murphy III',
    team: 'NOP',
    position: ' ',
  },
  {
    name: 'Xavier Tillman',
    team: 'MEM',
    position: 'PF',
  },
  {
    name: 'Shake Milton',
    team: 'PHI',
    position: 'PG',
  },
  {
    name: 'Kevin Huerter',
    team: 'ATL',
    position: 'SG',
  },
  {
    name: 'Dwight Powell',
    team: 'DAL',
    position: 'C',
  },
  {
    name: 'Naz Reid',
    team: 'MIN',
    position: 'C',
  },
  {
    name: 'Davis Bertans',
    team: 'WAS',
    position: 'PF',
  },
  {
    name: 'Bruce Brown',
    team: 'BRO',
    position: 'SG',
  },
  {
    name: 'Reggie Bullock',
    team: 'DAL',
    position: 'SF',
  },
  {
    name: 'Kendrick Nunn',
    team: 'LAL',
    position: 'SG',
  },
  {
    name: 'Scottie Barnes',
    team: 'TOR',
    position: 'PF',
  },
  {
    name: 'Jeff Green',
    team: 'DEN',
    position: 'PF',
  },
  {
    name: 'Kenrich Williams',
    team: 'OKL',
    position: 'SF',
  },
  {
    name: 'Rudy Gay',
    team: 'UTA',
    position: 'PF',
  },
  {
    name: 'Luguentz Dort',
    team: 'OKL',
    position: 'SG',
  },
  {
    name: 'Wayne Ellington',
    team: 'LAL',
    position: 'SG',
  },
  {
    name: 'Pat Connaughton',
    team: 'MIL',
    position: 'SG',
  },
  {
    name: 'KJ Martin Jr.',
    team: 'HOU',
    position: 'SF',
  },
  {
    name: 'Gabe Vincent',
    team: 'MIA',
    position: 'PG',
  },
  {
    name: 'Trevor Ariza',
    team: 'LAL',
    position: 'SF',
  },
  {
    name: 'DeMarcus Cousins',
    team: 'FA',
    position: 'C',
  },
  {
    name: 'Steven Adams',
    team: 'MEM',
    position: 'C',
  },
  {
    name: 'JaVale McGee',
    team: 'PHX',
    position: 'C',
  },
  {
    name: 'Jaxson Hayes',
    team: 'NOP',
    position: 'C',
  },
  {
    name: 'Jarred Vanderbilt',
    team: 'MIN',
    position: 'PF',
  },
  {
    name: 'Davion Mitchell',
    team: 'SAC',
    position: 'PG',
  },
  {
    name: 'Payton Pritchard',
    team: 'BOS',
    position: ' ',
  },
  {
    name: 'Cody Zeller',
    team: 'POR',
    position: ' ',
  },
  {
    name: 'Taurean Prince',
    team: 'MIN',
    position: 'SF',
  },
  {
    name: 'Tony Bradley',
    team: 'CHI',
    position: 'C',
  },
  {
    name: 'Raul Neto',
    team: 'WAS',
    position: 'PG',
  },
  {
    name: 'Tomas Satoransky',
    team: 'NOP',
    position: 'PG',
  },
  {
    name: 'Kentavious Caldwell-Pope',
    team: 'WAS',
    position: 'SG',
  },
  {
    name: 'Alex Caruso',
    team: 'CHI',
    position: 'PG',
  },
  {
    name: 'Kevon Looney',
    team: 'GSW',
    position: 'PF',
  },
  {
    name: 'James Wiseman',
    team: 'GSW',
    position: 'C',
  },
  {
    name: 'Chris Duarte',
    team: 'IND',
    position: ' ',
  },
  {
    name: 'DeAndre Jordan',
    team: 'LAL',
    position: 'C',
  },
  {
    name: 'Deni Avdija',
    team: 'WAS',
    position: 'SF',
  },
  {
    name: 'Dwight Howard',
    team: 'LAL',
    position: 'C',
  },
  {
    name: 'Ty Jerome',
    team: 'OKL',
    position: 'PG',
  },
  {
    name: 'Furkan Korkmaz',
    team: 'PHI',
    position: 'SG',
  },
  {
    name: 'Patty Mills',
    team: 'BRO',
    position: 'PG',
  },
  {
    name: 'Cedi Osman',
    team: 'CLE',
    position: 'SF',
  },
  {
    name: 'Paul Millsap',
    team: 'BRO',
    position: 'PF',
  },
  {
    name: 'Malachi Flynn',
    team: 'TOR',
    position: ' ',
  },
  {
    name: 'Franz Wagner',
    team: 'ORL',
    position: 'SF',
  },
  {
    name: 'Dewayne Dedmon',
    team: 'MIA',
    position: 'C',
  },
  {
    name: 'Jordan McLaughlin',
    team: 'MIN',
    position: 'PG',
  },
  {
    name: 'Darius Bazley',
    team: 'OKL',
    position: 'SF',
  },
  {
    name: 'Cory Joseph',
    team: 'DET',
    position: 'PG',
  },
  {
    name: 'Carmelo Anthony',
    team: 'LAL',
    position: 'PF',
  },
  {
    name: 'Cam Reddish',
    team: 'ATL',
    position: 'SF',
  },
  {
    name: 'Kira Lewis Jr',
    team: 'NOP',
    position: ' ',
  },
  {
    name: 'Theo Maledon',
    team: 'OKL',
    position: ' ',
  },
  {
    name: 'Onyeka Okongwu',
    team: 'ATL',
    position: 'C',
  },
  {
    name: 'Tre Mann',
    team: 'OKL',
    position: ' ',
  },
  {
    name: 'Malik Monk',
    team: 'LAL',
    position: ' ',
  },
  {
    name: 'Anfernee Simons',
    team: 'POR',
    position: 'SG',
  },
  {
    name: 'JaMychal Green',
    team: 'DEN',
    position: 'PF',
  },
  {
    name: 'Khyri Thomas',
    team: 'HOU',
    position: ' ',
  },
  {
    name: 'Patrick Beverley',
    team: 'MIN',
    position: 'PG',
  },
  {
    name: 'Luke Kennard',
    team: 'LAC',
    position: 'SG',
  },
  {
    name: 'Hassan Whiteside',
    team: 'UTA',
    position: 'C',
  },
  {
    name: 'Austin Rivers',
    team: 'DEN',
    position: 'SG',
  },
  {
    name: 'P.J. Tucker',
    team: 'MIA',
    position: ' ',
  },
  {
    name: 'Goga Bitadze',
    team: 'IND',
    position: ' ',
  },
  {
    name: 'Taj Gibson',
    team: 'NYK',
    position: 'PF',
  },
  {
    name: 'Ish Smith',
    team: 'CHA',
    position: 'PG',
  },
  {
    name: 'Grayson Allen',
    team: 'MIL',
    position: 'SG',
  },
  {
    name: 'Lou Williams',
    team: 'ATL',
    position: 'SG',
  },
  {
    name: 'Obi Toppin',
    team: 'NYK',
    position: 'PF',
  },
  {
    name: 'D.J. Augustin',
    team: 'HOU',
    position: 'PG',
  },
  {
    name: 'Mike Muscala',
    team: 'OKL',
    position: 'C',
  },
  {
    name: 'Kent Bazemore',
    team: 'LAL',
    position: 'SG',
  },
  {
    name: 'Josh Jackson',
    team: 'DET',
    position: 'SF',
  },
  {
    name: 'Landry Shamet',
    team: 'PHX',
    position: 'SG',
  },
  {
    name: 'Naji Marshall',
    team: 'NOP',
    position: 'SF',
  },
  {
    name: 'Rajon Rondo',
    team: 'LAL',
    position: 'PG',
  },
  {
    name: 'David Nwaba',
    team: 'HOU',
    position: 'SG',
  },
  {
    name: 'George Hill',
    team: 'MIL',
    position: 'PG',
  },
  {
    name: 'Tyus Jones',
    team: 'MEM',
    position: 'PG',
  },
  {
    name: 'Josh Okogie',
    team: 'MIN',
    position: 'SG',
  },
  {
    name: 'Aaron Nesmith',
    team: 'BOS',
    position: 'SF',
  },
  {
    name: 'Hamidou Diallo',
    team: 'DET',
    position: 'SG',
  },
  {
    name: 'Jonathan Kuminga',
    team: 'GSW',
    position: ' ',
  },
  {
    name: 'Moe Harkless',
    team: 'SAC',
    position: 'SF',
  },
  {
    name: 'Torrey Craig',
    team: 'IND',
    position: 'SF',
  },
  {
    name: 'R.J. Hampton',
    team: 'ORL',
    position: ' ',
  },
  {
    name: 'Isaiah Hartenstein',
    team: 'FA',
    position: ' ',
  },
  {
    name: 'Gorgui Dieng',
    team: 'ATL',
    position: 'C',
  },
  {
    name: 'Jeff Teague',
    team: 'MIL',
    position: 'PG',
  },
  {
    name: 'Alex Len',
    team: 'SAC',
    position: ' ',
  },
]

export default hashtagRank
