const hashtagRank = [
  {
    name: 'Nikola Jokic',
    team: 'DEN',
    position: 'PF,C',
  },
  {
    name: 'James Harden',
    team: 'BRO',
    position: 'PG,SG',
  },
  {
    name: 'Stephen Curry',
    team: 'GSW',
    position: 'PG,SG',
  },
  {
    name: 'Kevin Durant',
    team: 'BRO',
    position: 'SF,PF',
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
    position: 'SG,SF',
  },
  {
    name: 'Joel Embiid',
    team: 'PHI',
    position: 'PF,C',
  },
  {
    name: 'Jayson Tatum',
    team: 'BOS',
    position: 'SF,PF',
  },
  {
    name: 'Giannis Antetokounmpo',
    team: 'MIL',
    position: 'PF,C',
  },
  {
    name: 'Paul George',
    team: 'LAC',
    position: 'SF,PF',
  },
  {
    name: 'Luka Doncic',
    team: 'DAL',
    position: 'PG,SG',
  },
  {
    name: 'Anthony Davis',
    team: 'LAL',
    position: 'PF,C',
  },
  {
    name: 'Trae Young',
    team: 'ATL',
    position: 'PG',
  },
  {
    name: 'Kyrie Irving',
    team: 'BRO',
    position: 'PG,SG',
  },
  {
    name: 'Bam Adebayo',
    team: 'MIA',
    position: 'PF,C',
  },
  {
    name: 'Fred VanVleet',
    team: 'TOR',
    position: 'PG,SG',
  },
  {
    name: 'Jimmy Butler',
    team: 'MIA',
    position: 'SF,PF',
  },
  {
    name: 'Domantas Sabonis',
    team: 'IND',
    position: 'PF,C',
  },
  {
    name: 'Shai Gilgeous-Alexander',
    team: 'OKL',
    position: 'PG,SG',
  },
  {
    name: 'Nikola Vucevic',
    team: 'CHI',
    position: 'C',
  },
  {
    name: 'LeBron James',
    team: 'LAL',
    position: 'PG,SG,SF',
  },
  {
    name: 'Chris Paul',
    team: 'PHX',
    position: 'PG',
  },
  {
    name: 'Zach LaVine',
    team: 'CHI',
    position: 'SG,SF',
  },
  {
    name: 'LaMelo Ball',
    team: 'CHA',
    position: 'PG,SG',
  },
  {
    name: 'Michael Porter Jr.',
    team: 'DEN',
    position: 'SF,PF',
  },
  {
    name: 'Jrue Holiday',
    team: 'MIL',
    position: 'PG,SG',
  },
  {
    name: 'Jaren Jackson Jr.',
    team: 'MEM',
    position: 'PF,C',
  },
  {
    name: 'Rudy Gobert',
    team: 'UTA',
    position: 'C',
  },
  {
    name: 'Richaun Holmes',
    team: 'SAC',
    position: 'PF,C',
  },
  {
    name: 'Tobias Harris',
    team: 'PHI',
    position: 'SF,PF',
  },
  {
    name: 'Myles Turner',
    team: 'IND',
    position: 'PF,C',
  },
  {
    name: 'Donovan Mitchell',
    team: 'UTA',
    position: 'PG,SG',
  },
  {
    name: 'Kristaps Porzingis',
    team: 'DAL',
    position: 'PF,C',
  },
  {
    name: 'Jaylen Brown',
    team: 'BOS',
    position: 'SG,SF',
  },
  {
    name: 'Brandon Ingram',
    team: 'NOP',
    position: 'SF,PF',
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
    position: 'SF,PF',
  },
  {
    name: 'Zion Williamson',
    team: 'NOP',
    position: 'PF',
  },
  {
    name: 'Devin Booker',
    team: 'PHX',
    position: 'SG,SF',
  },
  {
    name: 'Julius Randle',
    team: 'NYK',
    position: 'PF,C',
  },
  {
    name: 'OG Anunoby',
    team: 'TOR',
    position: 'SF,PF',
  },
  {
    name: 'Tyrese Haliburton',
    team: 'SAC',
    position: 'PG,SG',
  },
  {
    name: 'Robert Williams III',
    team: 'BOS',
    position: 'C',
  },
  {
    name: 'CJ McCollum',
    team: 'POR',
    position: 'PG,SG',
  },
  {
    name: 'Lonzo Ball',
    team: 'CHI',
    position: 'PG,SG',
  },
  {
    name: 'Draymond Green',
    team: 'GSW',
    position: 'PF,C',
  },
  {
    name: 'John Collins',
    team: 'ATL',
    position: 'PF,C',
  },
  {
    name: 'Gordon Hayward',
    team: 'CHA',
    position: 'SG,SF',
  },
  {
    name: 'Pascal Siakam',
    team: 'TOR',
    position: 'PF,C',
  },
  {
    name: 'Derrick White',
    team: 'SAS',
    position: 'PG,SG',
  },
  {
    name: "De'Aaron Fox",
    team: 'SAC',
    position: 'PG',
  },
  {
    name: 'Dejounte Murray',
    team: 'SAS',
    position: 'PG,SG',
  },
  {
    name: 'Mike Conley',
    team: 'UTA',
    position: 'PG',
  },
  {
    name: 'Jakob Poeltl',
    team: 'SAS',
    position: 'C',
  },
  {
    name: 'Jusuf Nurkic',
    team: 'POR',
    position: 'C',
  },
  {
    name: 'Malcolm Brogdon',
    team: 'IND',
    position: 'PG,SG',
  },
  {
    name: 'Mikal Bridges',
    team: 'PHX',
    position: 'SG,SF',
  },
  {
    name: 'Terry Rozier',
    team: 'CHA',
    position: 'PG,SG',
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
    position: 'SF,PF',
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
    position: 'SF,PF',
  },
  {
    name: 'Caris LeVert',
    team: 'IND',
    position: 'SG,SF',
  },
  {
    name: 'Collin Sexton',
    team: 'CLE',
    position: 'PG,SG',
  },
  {
    name: 'Kemba Walker',
    team: 'NYK',
    position: 'PG',
  },
  {
    name: 'Isaiah Stewart',
    team: 'DET',
    position: 'PF,C',
  },
  {
    name: 'Anthony Edwards',
    team: 'MIN',
    position: 'SG,SF',
  },
  {
    name: 'Kawhi Leonard',
    team: 'LAC',
    position: 'SG,SF',
  },
  {
    name: 'Christian Wood',
    team: 'HOU',
    position: 'PF,C',
  },
  {
    name: 'Jarrett Allen',
    team: 'CLE',
    position: 'C',
  },
  {
    name: 'PJ Washington',
    team: 'CHA',
    position: 'PF,C',
  },
  {
    name: 'Robert Covington',
    team: 'POR',
    position: 'PF,C',
  },
  {
    name: 'DeMar DeRozan',
    team: 'CHI',
    position: 'SF,PF',
  },
  {
    name: 'Kevin Porter Jr.',
    team: 'HOU',
    position: 'SG,SF',
  },
  {
    name: 'Chris Boucher',
    team: 'TOR',
    position: 'PF,C',
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
    name: 'Marcus Smart',
    team: 'BOS',
    position: 'PG,SG',
  },
  {
    name: 'Nickeil Alexander-Walker',
    team: 'NOP',
    position: 'SG,SF',
  },
  {
    name: "D'Angelo Russell",
    team: 'MIN',
    position: 'PG,SG',
  },
  {
    name: 'Jamal Murray',
    team: 'DEN',
    position: 'PG,SG',
  },
  {
    name: 'Cade Cunningham',
    team: 'DET',
    position: 'PG,SG',
  },
  {
    name: 'Evan Fournier',
    team: 'NYK',
    position: 'SG,SF',
  },
  {
    name: 'Norman Powell',
    team: 'POR',
    position: 'SG,SF',
  },
  {
    name: 'Buddy Hield',
    team: 'SAC',
    position: 'SG,SF',
  },
  {
    name: 'T.J. McConnell',
    team: 'IND',
    position: 'PG,SG',
  },
  {
    name: 'Brook Lopez',
    team: 'MIL',
    position: 'C',
  },
  {
    name: 'Nerlens Noel',
    team: 'NYK',
    position: 'PF,C',
  },
  {
    name: 'Kelly Olynyk',
    team: 'DET',
    position: 'PF,C',
  },
  {
    name: 'Harrison Barnes',
    team: 'SAC',
    position: 'SF,PF',
  },
  {
    name: 'Spencer Dinwiddie',
    team: 'WAS',
    position: 'PG,SG',
  },
  {
    name: 'Miles Bridges',
    team: 'CHA',
    position: 'SF,PF',
  },
  {
    name: 'Derrick Favors',
    team: 'OKL',
    position: 'C',
  },
  {
    name: 'Reggie Jackson',
    team: 'LAC',
    position: 'PG,SG',
  },
  {
    name: 'Saddiq Bey',
    team: 'DET',
    position: 'SF',
  },
  {
    name: 'Dwight Powell',
    team: 'DAL',
    position: 'PF,C',
  },
  {
    name: 'Jalen Suggs',
    team: 'ORL',
    position: 'PG,SG',
  },
  {
    name: 'Jonathan Isaac',
    team: 'ORL',
    position: 'SF,PF',
  },
  {
    name: "De'Andre Hunter",
    team: 'ATL',
    position: 'SF,PF',
  },
  {
    name: 'Andrew Wiggins',
    team: 'GSW',
    position: 'SG,SF',
  },
  {
    name: 'Mason Plumlee',
    team: 'CHA',
    position: 'PF,C',
  },
  {
    name: 'Jordan Poole',
    team: 'GSW',
    position: 'PG,SG',
  },
  {
    name: 'Evan Mobley',
    team: 'CLE',
    position: 'C',
  },
  {
    name: 'Keldon Johnson',
    team: 'SAS',
    position: 'SF,PF',
  },
  {
    name: 'Bobby Portis',
    team: 'MIL',
    position: 'PF,C',
  },
  {
    name: 'Jordan Clarkson',
    team: 'UTA',
    position: 'PG,SG',
  },
  {
    name: 'Joe Ingles',
    team: 'UTA',
    position: 'SG,SF',
  },
  {
    name: 'Kyle Anderson',
    team: 'MEM',
    position: 'SF,PF',
  },
  {
    name: 'Chuma Okeke',
    team: 'ORL',
    position: 'PF',
  },
  {
    name: 'Joe Harris',
    team: 'BRO',
    position: 'SG,SF',
  },
  {
    name: 'Klay Thompson',
    team: 'GSW',
    position: 'SG,SF',
  },
  {
    name: 'Daniel Gafford',
    team: 'WAS',
    position: 'C',
  },
  {
    name: "De'Anthony Melton",
    team: 'MEM',
    position: 'PG,SG',
  },
  {
    name: 'Danny Green',
    team: 'PHI',
    position: 'SG,SF',
  },
  {
    name: 'Ivica Zubac',
    team: 'LAC',
    position: 'C',
  },
  {
    name: 'Khem Birch',
    team: 'TOR',
    position: 'PF,C',
  },
  {
    name: "Jae'Sean Tate",
    team: 'HOU',
    position: 'SF,PF',
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
    name: 'Jaden McDaniels',
    team: 'MIN',
    position: 'PF',
  },
  {
    name: 'Al Horford',
    team: 'BOS',
    position: 'PF,C',
  },
  {
    name: 'Larry Nance Jr.',
    team: 'POR',
    position: 'PF,C',
  },
  {
    name: 'Matisse Thybulle',
    team: 'PHI',
    position: 'SG,SF',
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
    position: 'SG,SF',
  },
  {
    name: 'RJ Barrett',
    team: 'NYK',
    position: 'SG,SF',
  },
  {
    name: 'Montrezl Harrell',
    team: 'WAS',
    position: 'PF,C',
  },
  {
    name: 'Thaddeus Young',
    team: 'SAS',
    position: 'PF,C',
  },
  {
    name: 'Aleksej Pokusevski',
    team: 'OKL',
    position: 'SF',
  },
  {
    name: 'Dillon Brooks',
    team: 'MEM',
    position: 'SG,SF',
  },
  {
    name: 'Derrick Rose',
    team: 'NYK',
    position: 'PG,SG',
  },
  {
    name: 'Kyle Kuzma',
    team: 'WAS',
    position: 'SF,PF',
  },
  {
    name: 'Desmond Bane',
    team: 'MEM',
    position: 'PG,SG',
  },
  {
    name: 'Terrence Ross',
    team: 'ORL',
    position: 'SG,SF',
  },
  {
    name: 'Isaiah Roby',
    team: 'OKL',
    position: 'C',
  },
  {
    name: 'Facundo Campazzo',
    team: 'DEN',
    position: 'PG',
  },
  {
    name: "Royce O'Neale",
    team: 'UTA',
    position: 'SF,PF',
  },
  {
    name: 'Josh Giddey',
    team: 'OKL',
    position: 'PG,SG',
  },
  {
    name: 'Bojan Bogdanovic',
    team: 'UTA',
    position: 'SF,PF',
  },
  {
    name: 'Victor Oladipo',
    team: 'MIA',
    position: 'SG,SF',
  },
  {
    name: 'Duncan Robinson',
    team: 'MIA',
    position: 'SG,SF',
  },
  {
    name: 'Danilo Gallinari',
    team: 'ATL',
    position: 'SF,PF',
  },
  {
    name: 'Serge Ibaka',
    team: 'LAC',
    position: 'PF,C',
  },
  {
    name: 'Brandon Clarke',
    team: 'MEM',
    position: 'SF,PF',
  },
  {
    name: 'Tim Hardaway Jr.',
    team: 'DAL',
    position: 'SG,SF',
  },
  {
    name: 'Alperen Sengun',
    team: 'HOU',
    position: 'C',
  },
  {
    name: 'Terance Mann',
    team: 'LAC',
    position: 'SF',
  },
  {
    name: 'Lauri Markkanen',
    team: 'CLE',
    position: 'PF,C',
  },
  {
    name: "Devonte' Graham",
    team: 'NOP',
    position: 'PG,SG',
  },
  {
    name: 'Cameron Payne',
    team: 'PHX',
    position: 'PG,SG',
  },
  {
    name: 'Donte DiVincenzo',
    team: 'MIL',
    position: 'PG,SG',
  },
  {
    name: 'Tyler Herro',
    team: 'MIA',
    position: 'PG',
  },
  {
    name: 'T.J. Warren',
    team: 'IND',
    position: 'SF,PF',
  },
  {
    name: 'Dorian Finney-Smith',
    team: 'DAL',
    position: 'SF,PF',
  },
  {
    name: 'Marcus Morris Sr.',
    team: 'LAC',
    position: 'PF,C',
  },
  {
    name: 'Seth Curry',
    team: 'PHI',
    position: 'PG,SG',
  },
  {
    name: 'Tyrese Maxey',
    team: 'PHI',
    position: 'PG,SG',
  },
  {
    name: 'Markelle Fultz',
    team: 'ORL',
    position: 'PG,SG',
  },
  {
    name: 'LaMarcus Aldridge',
    team: 'BRO',
    position: 'PF,C',
  },
  {
    name: 'Daniel Theis',
    team: 'HOU',
    position: 'PF,C',
  },
  {
    name: 'Malik Beasley',
    team: 'MIN',
    position: 'PG,SG',
  },
  {
    name: 'Ricky Rubio',
    team: 'CLE',
    position: 'PG',
  },
  {
    name: 'Nicolas Batum',
    team: 'LAC',
    position: 'SF,PF',
  },
  {
    name: 'Jeremy Lamb',
    team: 'IND',
    position: 'SG,SF',
  },
  {
    name: 'Josh Hart',
    team: 'NOP',
    position: 'SG,SF',
  },
  {
    name: 'Jae Crowder',
    team: 'PHX',
    position: 'SF,PF',
  },
  {
    name: 'Patrick Williams',
    team: 'CHI',
    position: 'SF,PF',
  },
  {
    name: 'Trey Murphy III',
    team: 'NOP',
    position: 'SG,SF',
  },
  {
    name: 'Aaron Gordon',
    team: 'DEN',
    position: 'SF,PF',
  },
  {
    name: 'Goran Dragic',
    team: 'TOR',
    position: 'PG,SG',
  },
  {
    name: 'Marvin Bagley III',
    team: 'SAC',
    position: 'PF,C',
  },
  {
    name: 'Cole Anthony',
    team: 'ORL',
    position: 'PG',
  },
  {
    name: 'Talen Horton-Tucker',
    team: 'LAL',
    position: 'SG,SF',
  },
  {
    name: 'Eric Bledsoe',
    team: 'LAC',
    position: 'PG,SG',
  },
  {
    name: 'Coby White',
    team: 'CHI',
    position: 'PG,SG',
  },
  {
    name: 'Andre Drummond',
    team: 'PHI',
    position: 'C',
  },
  {
    name: 'Killian Hayes',
    team: 'DET',
    position: 'PG,SG',
  },
  {
    name: 'John Wall',
    team: 'HOU',
    position: 'PG',
  },
  {
    name: 'Juan Toscano-Anderson',
    team: 'GSW',
    position: 'SF,PF',
  },
  {
    name: 'Jalen Brunson',
    team: 'DAL',
    position: 'PG,SG',
  },
  {
    name: 'Devin Vassell',
    team: 'SAS',
    position: 'SG',
  },
  {
    name: 'Scottie Barnes',
    team: 'TOR',
    position: 'SF',
  },
  {
    name: 'Rui Hachimura',
    team: 'WAS',
    position: 'SF,PF',
  },
  {
    name: 'Monte Morris',
    team: 'DEN',
    position: 'PG,SG',
  },
  {
    name: 'Kevin Love',
    team: 'CLE',
    position: 'PF,C',
  },
  {
    name: 'Oshae Brissett',
    team: 'IND',
    position: 'SF,PF',
  },
  {
    name: 'Otto Porter Jr.',
    team: 'GSW',
    position: 'SF,PF',
  },
  {
    name: 'Alec Burks',
    team: 'NYK',
    position: 'SG,SF',
  },
  {
    name: 'Josh Richardson',
    team: 'BOS',
    position: 'SG,SF',
  },
  {
    name: 'Justin Holiday',
    team: 'IND',
    position: 'SG,SF',
  },
  {
    name: 'Kelly Oubre Jr.',
    team: 'CHA',
    position: 'SG,SF',
  },
  {
    name: 'Nicolas Claxton',
    team: 'BRO',
    position: 'C',
  },
  {
    name: 'Gary Trent Jr.',
    team: 'TOR',
    position: 'SG,SF',
  },
  {
    name: 'Cameron Johnson',
    team: 'PHX',
    position: 'SF,PF',
  },
  {
    name: 'Enes Kanter',
    team: 'BOS',
    position: 'C',
  },
  {
    name: 'Isaac Okoro',
    team: 'CLE',
    position: 'SG',
  },
  {
    name: 'Lonnie Walker IV',
    team: 'SAS',
    position: 'SG,SF',
  },
  {
    name: 'Blake Griffin',
    team: 'BRO',
    position: 'PF,C',
  },
  {
    name: 'Doug McDermott',
    team: 'SAS',
    position: 'SF,PF',
  },
  {
    name: 'Immanuel Quickley',
    team: 'NYK',
    position: 'PG',
  },
  {
    name: 'Eric Gordon',
    team: 'HOU',
    position: 'SG,SF',
  },
  {
    name: 'Delon Wright',
    team: 'ATL',
    position: 'PG,SG',
  },
  {
    name: 'Xavier Tillman',
    team: 'MEM',
    position: 'PF,C',
  },
  {
    name: 'Kevin Huerter',
    team: 'ATL',
    position: 'SG,SF',
  },
  {
    name: 'Shake Milton',
    team: 'PHI',
    position: 'PG,SG',
  },
  {
    name: 'Naz Reid',
    team: 'MIN',
    position: 'C',
  },
  {
    name: 'Bruce Brown',
    team: 'BRO',
    position: 'SG',
  },
  {
    name: 'Davis Bertans',
    team: 'WAS',
    position: 'PF,C',
  },
  {
    name: 'Reggie Bullock',
    team: 'DAL',
    position: 'SG,SF',
  },
  {
    name: 'Kendrick Nunn',
    team: 'LAL',
    position: 'PG,SG',
  },
  {
    name: 'Jeff Green',
    team: 'DEN',
    position: 'SF,PF',
  },
  {
    name: 'Kenrich Williams',
    team: 'OKL',
    position: 'SF,PF',
  },
  {
    name: 'Rudy Gay',
    team: 'UTA',
    position: 'SF,PF',
  },
  {
    name: 'Luguentz Dort',
    team: 'OKL',
    position: 'SG,SF',
  },
  {
    name: 'Pat Connaughton',
    team: 'MIL',
    position: 'SG,SF',
  },
  {
    name: 'Wayne Ellington',
    team: 'LAL',
    position: 'SG,SF',
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
    position: 'SG,SF',
  },
  {
    name: 'Steven Adams',
    team: 'MEM',
    position: 'C',
  },
  {
    name: 'DeMarcus Cousins',
    team: 'FA',
    position: 'PF,C',
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
    position: 'PF,C',
  },
  {
    name: 'Davion Mitchell',
    team: 'SAC',
    position: 'SG',
  },
  {
    name: 'Payton Pritchard',
    team: 'BOS',
    position: 'PG',
  },
  {
    name: 'Cody Zeller',
    team: 'POR',
    position: 'C',
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
    name: 'Taurean Prince',
    team: 'MIN',
    position: 'SF,PF',
  },
  {
    name: 'Tomas Satoransky',
    team: 'NOP',
    position: 'PG,SG',
  },
  {
    name: 'Alex Caruso',
    team: 'CHI',
    position: 'PG,SG',
  },
  {
    name: 'Kentavious Caldwell-Pope',
    team: 'WAS',
    position: 'PG,SG',
  },
  {
    name: 'Kevon Looney',
    team: 'GSW',
    position: 'PF,C',
  },
  {
    name: 'James Wiseman',
    team: 'GSW',
    position: 'C',
  },
  {
    name: 'Chris Duarte',
    team: 'IND',
    position: 'SG',
  },
  {
    name: 'DeAndre Jordan',
    team: 'LAL',
    position: 'C',
  },
  {
    name: 'Dwight Howard',
    team: 'LAL',
    position: 'C',
  },
  {
    name: 'Deni Avdija',
    team: 'WAS',
    position: 'SG,SF',
  },
  {
    name: 'Ty Jerome',
    team: 'OKL',
    position: 'PG,SG',
  },
  {
    name: 'Furkan Korkmaz',
    team: 'PHI',
    position: 'SG,SF',
  },
  {
    name: 'Patty Mills',
    team: 'BRO',
    position: 'PG',
  },
  {
    name: 'Cedi Osman',
    team: 'CLE',
    position: 'SF,PF',
  },
  {
    name: 'Paul Millsap',
    team: 'BRO',
    position: 'PF,C',
  },
  {
    name: 'Malachi Flynn',
    team: 'TOR',
    position: 'PG',
  },
  {
    name: 'Franz Wagner',
    team: 'ORL',
    position: 'SG,SF',
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
    position: 'SF,PF',
  },
  {
    name: 'Cory Joseph',
    team: 'DET',
    position: 'PG',
  },
  {
    name: 'Carmelo Anthony',
    team: 'LAL',
    position: 'SF,PF',
  },
  {
    name: 'Cam Reddish',
    team: 'ATL',
    position: 'SG,SF',
  },
  {
    name: 'Precious Achiuwa',
    team: 'TOR',
    position: 'SF,PF',
  },
  {
    name: 'Kira Lewis Jr',
    team: 'NOP',
    position: 'PG',
  },
  {
    name: 'Theo Maledon',
    team: 'OKL',
    position: 'PG',
  },
  {
    name: 'Onyeka Okongwu',
    team: 'ATL',
    position: 'PF,C',
  },
  {
    name: 'Tre Mann',
    team: 'OKL',
    position: 'SG',
  },
  {
    name: 'Malik Monk',
    team: 'LAL',
    position: 'PG,SG',
  },
  {
    name: 'Maxi Kleber',
    team: 'DAL',
    position: 'PF,C',
  },
  {
    name: 'Anfernee Simons',
    team: 'POR',
    position: 'PG,SG',
  },
  {
    name: 'JaMychal Green',
    team: 'DEN',
    position: 'PF,C',
  },
  {
    name: 'Khyri Thomas',
    team: 'HOU',
    position: 'SG',
  },
  {
    name: 'Patrick Beverley',
    team: 'MIN',
    position: 'PG,SG',
  },
  {
    name: 'Luke Kennard',
    team: 'LAC',
    position: 'SG,SF',
  },
  {
    name: 'Hassan Whiteside',
    team: 'UTA',
    position: 'PF,C',
  },
  {
    name: 'Austin Rivers',
    team: 'DEN',
    position: 'PG,SG',
  },
  {
    name: 'P.J. Tucker',
    team: 'MIA',
    position: 'PF,C',
  },
  {
    name: 'Goga Bitadze',
    team: 'IND',
    position: 'C',
  },
  {
    name: 'Taj Gibson',
    team: 'NYK',
    position: 'PF,C',
  },
  {
    name: 'Ish Smith',
    team: 'CHA',
    position: 'PG',
  },
  {
    name: 'Grayson Allen',
    team: 'MIL',
    position: 'SG,SF',
  },
  {
    name: 'Obi Toppin',
    team: 'NYK',
    position: 'SF,PF',
  },
  {
    name: 'Lou Williams',
    team: 'ATL',
    position: 'PG,SG',
  },
  {
    name: 'D.J. Augustin',
    team: 'HOU',
    position: 'PG',
  },
  {
    name: 'Mike Muscala',
    team: 'OKL',
    position: 'PF,C',
  },
  {
    name: 'Kent Bazemore',
    team: 'LAL',
    position: 'SG,SF',
  },
  {
    name: 'Josh Jackson',
    team: 'DET',
    position: 'SG,SF',
  },
  {
    name: 'Landry Shamet',
    team: 'PHX',
    position: 'PG,SG',
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
    position: 'SG,SF',
  },
  {
    name: 'George Hill',
    team: 'MIL',
    position: 'PG,SG',
  },
  {
    name: 'Tyus Jones',
    team: 'MEM',
    position: 'PG',
  },
  {
    name: 'Josh Okogie',
    team: 'MIN',
    position: 'SG,SF',
  },
  {
    name: 'Aaron Nesmith',
    team: 'BOS',
    position: 'SG,SF',
  },
  {
    name: 'Hamidou Diallo',
    team: 'DET',
    position: 'SG,SF',
  },
  {
    name: 'Jonathan Kuminga',
    team: 'GSW',
    position: 'SF,PF',
  },
  {
    name: 'Moe Harkless',
    team: 'SAC',
    position: 'SF,PF',
  },
  {
    name: 'Torrey Craig',
    team: 'IND',
    position: 'SG,SF',
  },
  {
    name: 'R.J. Hampton',
    team: 'ORL',
    position: 'PG',
  },
  {
    name: 'Isaiah Hartenstein',
    team: 'FA',
    position: 'PF',
  },
  {
    name: 'Gorgui Dieng',
    team: 'ATL',
    position: 'PF,C',
  },
  {
    name: 'Jeff Teague',
    team: 'MIL',
    position: 'PG,SG',
  },
]

export default hashtagRank
