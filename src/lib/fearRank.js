const fearRank = [
  {
    name: 'James Harden',
    team: 'PHI',
    position: 'PG/SF',
  },
  {
    name: 'Stephen Curry',
    team: 'GSW',
    position: 'PG',
  },
  {
    name: 'Nikola Jokic',
    team: 'DEN',
    position: 'C',
  },
  {
    name: 'Trae Young',
    team: 'ATL',
    position: 'PG',
  },
  {
    name: 'Kevin Durant',
    team: 'BRO',
    position: 'SF/PF',
  },
  {
    name: 'Damian Lillard',
    team: 'POR',
    position: 'PG',
  },
  {
    name: 'LaMelo Ball',
    team: 'CHA',
    position: 'PG',
  },
  {
    name: 'Luka Doncic',
    team: 'DAL',
    position: 'PG/SG',
  },
  {
    name: 'Joel Embiid',
    team: 'PHI',
    position: 'C',
  },
  {
    name: 'Jayson Tatum',
    team: 'BOS',
    position: 'SF/PF',
  },
  {
    name: 'Kyrie Irving',
    team: 'BRO',
    position: 'PG/SG',
  },
  {
    name: 'Fred VanVleet',
    team: 'TOR',
    position: 'PG/SF',
  },
  {
    name: 'Paul George',
    team: 'LAC',
    position: 'PG/SG',
  },
  {
    name: 'Tyrese Haliburton',
    team: 'IND',
    position: 'PG/SG',
  },
  {
    name: 'Devin Booker',
    team: 'PHX',
    position: 'PG/SF',
  },
  {
    name: 'Kawhi Leonard',
    team: 'LAC',
    position: 'SF/PF',
  },
  {
    name: 'Khris Middleton',
    team: 'MIL',
    position: 'SF',
  },
  {
    name: 'Darius Garland',
    team: 'CLE',
    position: 'PG/SG',
  },
  {
    name: 'Jimmy Butler',
    team: 'MIA',
    position: 'PG/SG',
  },
  {
    name: 'Donovan Mitchell',
    team: 'CLE',
    position: 'PG/SF',
  },
  {
    name: 'Terry Rozier',
    team: 'CHA',
    position: 'PG/SG',
  },
  {
    name: 'LeBron James',
    team: 'LAL',
    position: 'PG/SF/PF',
  },
  {
    name: 'Chris Paul',
    team: 'PHX',
    position: 'PG',
  },
  {
    name: 'Karl-Anthony Towns',
    team: 'MIN',
    position: 'C',
  },
  {
    name: 'DeMar DeRozan',
    team: 'CHI',
    position: 'SG/SF',
  },
  {
    name: 'Bradley Beal',
    team: 'WAS',
    position: 'SG',
  },
  {
    name: 'Cade Cunningham',
    team: 'DET',
    position: 'PG/SG',
  },
  {
    name: 'Shai Gilgeous-Alexander',
    team: 'OKL',
    position: 'PG/SF',
  },
  {
    name: 'Anthony Edwards',
    team: 'MIN',
    position: 'SG/SF',
  },
  {
    name: 'Dejounte Murray',
    team: 'ATL',
    position: 'PG/SG',
  },
  {
    name: 'Jrue Holiday',
    team: 'MIL',
    position: 'PG/SG',
  },
  {
    name: 'Kyle Lowry',
    team: 'MIA',
    position: 'PG',
  },
  {
    name: 'Desmond Bane',
    team: 'MEM',
    position: 'SG',
  },
  {
    name: 'Zach LaVine',
    team: 'CHI',
    position: 'SG/SF',
  },
  {
    name: 'Tyler Herro',
    team: 'MIA',
    position: 'PG/SF',
  },
  {
    name: 'Ja Morant',
    team: 'MEM',
    position: 'PG',
  },
  {
    name: 'Jordan Poole',
    team: 'GSW',
    position: 'PG/SF',
  },
  {
    name: 'Giannis Antetokounmpo',
    team: 'MIL',
    position: 'PF/C',
  },
  {
    name: 'Jaylen Brown',
    team: 'BOS',
    position: 'SG/SF',
  },
  {
    name: "D'Angelo Russell",
    team: 'MIN',
    position: 'PG/SG',
  },
  {
    name: 'Kristaps Porzingis',
    team: 'WAS',
    position: 'PF/C',
  },
  {
    name: 'Gary Trent Jr.',
    team: 'TOR',
    position: 'SG',
  },
  {
    name: 'Pascal Siakam',
    team: 'TOR',
    position: 'PF/C',
  },
  {
    name: 'Saddiq Bey',
    team: 'DET',
    position: 'SF/PF',
  },
  {
    name: 'Domantas Sabonis',
    team: 'SAC',
    position: 'PF/C',
  },
  {
    name: 'CJ McCollum',
    team: 'NOP',
    position: 'SG',
  },
  {
    name: 'Jamal Murray',
    team: 'DEN',
    position: 'PG',
  },
  {
    name: 'Marcus Smart',
    team: 'BOS',
    position: 'PG/SF',
  },
  {
    name: 'Julius Randle',
    team: 'NYK',
    position: 'PF',
  },
  {
    name: 'Gordon Hayward',
    team: 'CHA',
    position: 'SF',
  },
  {
    name: 'OG Anunoby',
    team: 'TOR',
    position: 'SF',
  },
  {
    name: 'Nikola Vucevic',
    team: 'CHI',
    position: 'C',
  },
  {
    name: "De'Aaron Fox",
    team: 'SAC',
    position: 'PG',
  },
  {
    name: 'Brandon Ingram',
    team: 'NOP',
    position: 'SF/PF',
  },
  {
    name: 'Buddy Hield',
    team: 'IND',
    position: 'SG/SF',
  },
  {
    name: 'Tyrese Maxey',
    team: 'PHI',
    position: 'PG/SF',
  },
  {
    name: 'Klay Thompson',
    team: 'GSW',
    position: 'SG',
  },
  {
    name: 'Josh Giddey',
    team: 'OKL',
    position: 'PG/SG',
  },
  {
    name: 'Kevin Porter Jr.',
    team: 'HOU',
    position: 'PG/SF',
  },
  {
    name: 'Jalen Brunson',
    team: 'NYK',
    position: 'PG/SG',
  },
  {
    name: 'Bam Adebayo',
    team: 'MIA',
    position: 'PF/C',
  },
  {
    name: 'Lauri Markkanen',
    team: 'UTA',
    position: 'SF/PF',
  },
  {
    name: 'Devin Vassell',
    team: 'SAS',
    position: 'SG/SF',
  },
  {
    name: 'Mike Conley',
    team: 'UTA',
    position: 'PG',
  },
  {
    name: 'Keldon Johnson',
    team: 'SAS',
    position: 'SF/PF',
  },
  {
    name: 'Anfernee Simons',
    team: 'POR',
    position: 'PG/SF',
  },
  {
    name: 'Bogdan Bogdanovic',
    team: 'ATL',
    position: 'SG/SF',
  },
  {
    name: 'Lonzo Ball',
    team: 'CHI',
    position: 'PG',
  },
  {
    name: 'Jalen Green',
    team: 'HOU',
    position: 'SG',
  },
  {
    name: 'Cole Anthony',
    team: 'ORL',
    position: 'PG',
  },
  {
    name: 'Spencer Dinwiddie',
    team: 'DAL',
    position: 'PG/SF',
  },
  {
    name: 'Franz Wagner',
    team: 'ORL',
    position: 'SF/PF',
  },
  {
    name: 'Anthony Davis',
    team: 'LAL',
    position: 'PF/C',
  },
  {
    name: 'Michael Porter Jr.',
    team: 'DEN',
    position: 'SF',
  },
  {
    name: 'Monte Morris',
    team: 'WAS',
    position: 'PG',
  },
  {
    name: 'Dillon Brooks',
    team: 'MEM',
    position: 'SG/SF',
  },
  {
    name: 'Scottie Barnes',
    team: 'TOR',
    position: 'SF/PF',
  },
  {
    name: 'Tre Jones',
    team: 'SAS',
    position: 'PG',
  },
  {
    name: 'Cameron Johnson',
    team: 'PHX',
    position: 'SF/PF',
  },
  {
    name: 'Mikal Bridges',
    team: 'PHX',
    position: 'SF',
  },
  {
    name: 'Bojan Bogdanovic',
    team: 'DET',
    position: 'PF',
  },
  {
    name: 'Bones Hyland',
    team: 'DEN',
    position: 'PG',
  },
  {
    name: 'Jonas Valanciunas',
    team: 'NOP',
    position: 'C',
  },
  {
    name: "De'Anthony Melton",
    team: 'PHI',
    position: 'PG/SG',
  },
  {
    name: 'Malcolm Brogdon',
    team: 'BOS',
    position: 'PG/SG',
  },
  {
    name: 'Tobias Harris',
    team: 'PHI',
    position: 'SF/PF',
  },
  {
    name: 'PJ Washington',
    team: 'CHA',
    position: 'PF/C',
  },
  {
    name: 'Kelly Olynyk',
    team: 'UTA',
    position: 'PF/C',
  },
  {
    name: 'Kentavious Caldwell-Pope',
    team: 'DEN',
    position: 'SG/SF',
  },
  {
    name: 'Jerami Grant',
    team: 'POR',
    position: 'SF/PF',
  },
  {
    name: 'Luguentz Dort',
    team: 'OKL',
    position: 'SG/SF',
  },
  {
    name: 'Immanuel Quickley',
    team: 'NYK',
    position: 'PG',
  },
  {
    name: 'Jabari Smith Jr',
    team: 'HOU',
    position: 'PF',
  },
  {
    name: 'Jaren Jackson Jr.',
    team: 'MEM',
    position: 'PF/C',
  },
  {
    name: 'John Collins',
    team: 'ATL',
    position: 'PF/C',
  },
  {
    name: 'Dorian Finney-Smith',
    team: 'DAL',
    position: 'SF/PF',
  },
  {
    name: 'Tim Hardaway Jr.',
    team: 'DAL',
    position: 'SG/SF',
  },
  {
    name: 'Harrison Barnes',
    team: 'SAC',
    position: 'SF/PF',
  },
  {
    name: 'Reggie Jackson',
    team: 'LAC',
    position: 'PG',
  },
  {
    name: 'Jalen Suggs',
    team: 'ORL',
    position: 'PG/SG',
  },
  {
    name: 'Malik Beasley',
    team: 'UTA',
    position: 'SG',
  },
  {
    name: 'Chris Duarte',
    team: 'IND',
    position: 'SG',
  },
  {
    name: 'Draymond Green',
    team: 'GSW',
    position: 'PF',
  },
  {
    name: 'Collin Sexton',
    team: 'UTA',
    position: 'PG/SF',
  },
  {
    name: 'Kendrick Nunn',
    team: 'LAL',
    position: 'SG',
  },
  {
    name: 'Ben Simmons',
    team: 'BRO',
    position: 'PG',
  },
  {
    name: 'Norman Powell',
    team: 'LAC',
    position: 'SG/SF',
  },
  {
    name: 'Jae Crowder',
    team: 'PHX',
    position: 'SF/PF',
  },
  {
    name: 'Kyle Kuzma',
    team: 'WAS',
    position: 'SF/PF',
  },
  {
    name: 'Herbert Jones',
    team: 'NOP',
    position: 'SF/PF',
  },
  {
    name: 'Robert Covington',
    team: 'LAC',
    position: 'SF/PF',
  },
  {
    name: 'Bobby Portis',
    team: 'MIL',
    position: 'PF/C',
  },
  {
    name: 'Jordan Clarkson',
    team: 'UTA',
    position: 'SG',
  },
  {
    name: 'Victor Oladipo',
    team: 'MIA',
    position: 'SG',
  },
  {
    name: 'Kelly Oubre Jr.',
    team: 'CHA',
    position: 'SG/PF',
  },
  {
    name: 'RJ Barrett',
    team: 'NYK',
    position: 'SF',
  },
  {
    name: 'Paolo Banchero',
    team: 'ORL',
    position: 'PF',
  },
  {
    name: 'Kevin Love',
    team: 'CLE',
    position: 'PF',
  },
  {
    name: 'Alex Caruso',
    team: 'CHI',
    position: 'PG/SG',
  },
  {
    name: 'Al Horford',
    team: 'BOS',
    position: 'PF/C',
  },
  {
    name: 'Pat Connaughton',
    team: 'MIL',
    position: 'SG/SF',
  },
  {
    name: 'Cody Martin',
    team: 'CHA',
    position: 'SF',
  },
  {
    name: 'Wendell Carter Jr.',
    team: 'ORL',
    position: 'PF/C',
  },
  {
    name: 'Chuma Okeke',
    team: 'ORL',
    position: 'PF',
  },
  {
    name: 'Will Barton',
    team: 'WAS',
    position: 'PG/SG',
  },
  {
    name: 'Caleb Martin',
    team: 'MIA',
    position: 'SG/SF',
  },
  {
    name: 'Otto Porter Jr.',
    team: 'TOR',
    position: 'SF',
  },
  {
    name: 'Markelle Fultz',
    team: 'ORL',
    position: 'PG',
  },
  {
    name: 'Grayson Allen',
    team: 'MIL',
    position: 'SG',
  },
  {
    name: 'Quentin Grimes',
    team: 'NYK',
    position: 'SG',
  },
  {
    name: 'Alperen Sengun',
    team: 'HOU',
    position: 'C',
  },
  {
    name: 'Myles Turner',
    team: 'IND',
    position: 'PF/C',
  },
  {
    name: 'Derrick White',
    team: 'BOS',
    position: 'PG/SG',
  },
  {
    name: 'Andrew Wiggins',
    team: 'GSW',
    position: 'SF/PF',
  },
  {
    name: 'Ricky Rubio',
    team: 'CLE',
    position: 'PG',
  },
  {
    name: 'Seth Curry',
    team: 'BRO',
    position: 'PG/SF',
  },
  {
    name: 'Cameron Payne',
    team: 'PHX',
    position: 'PG',
  },
  {
    name: 'Tyus Jones',
    team: 'MEM',
    position: 'PG',
  },
  {
    name: 'Deandre Ayton',
    team: 'PHX',
    position: 'C',
  },
  {
    name: 'Kevin Huerter',
    team: 'SAC',
    position: 'SG',
  },
  {
    name: 'Caris LeVert',
    team: 'CLE',
    position: 'SG/SF',
  },
  {
    name: 'Bennedict Mathurin',
    team: 'IND',
    position: 'SF',
  },
  {
    name: 'Patrick Beverley',
    team: 'LAL',
    position: 'PG',
  },
  {
    name: 'Jusuf Nurkic',
    team: 'POR',
    position: 'C',
  },
  {
    name: 'Killian Hayes',
    team: 'DET',
    position: 'PG',
  },
  {
    name: "Devonte' Graham",
    team: 'NOP',
    position: 'PG',
  },
  {
    name: 'Brook Lopez',
    team: 'MIL',
    position: 'C',
  },
  {
    name: 'Russell Westbrook',
    team: 'LAL',
    position: 'PG',
  },
  {
    name: 'Keegan Murray',
    team: 'SAC',
    position: 'PF',
  },
  {
    name: 'Christian Wood',
    team: 'DAL',
    position: 'PF/C',
  },
  {
    name: 'Josh Hart',
    team: 'POR',
    position: 'SG/SF',
  },
  {
    name: 'Davion Mitchell',
    team: 'SAC',
    position: 'PG',
  },
  {
    name: 'Reggie Bullock',
    team: 'DAL',
    position: 'PG/SG',
  },
  {
    name: 'Delon Wright',
    team: 'WAS',
    position: 'SG/PF',
  },
  {
    name: 'Evan Mobley',
    team: 'CLE',
    position: 'PF/C',
  },
  {
    name: 'Gabe Vincent',
    team: 'MIA',
    position: 'PG',
  },
  {
    name: 'Jarred Vanderbilt',
    team: 'UTA',
    position: 'PF',
  },
  {
    name: 'Donte DiVincenzo',
    team: 'GSW',
    position: 'PG/SF',
  },
  {
    name: 'Aleksej Pokusevski',
    team: 'OKL',
    position: 'PF',
  },
  {
    name: 'Ayo Dosunmu',
    team: 'CHI',
    position: 'PG/SF',
  },
  {
    name: 'Derrick Rose',
    team: 'NYK',
    position: 'PG',
  },
  {
    name: 'John Wall',
    team: 'LAC',
    position: 'PG',
  },
  {
    name: 'Jarrett Allen',
    team: 'CLE',
    position: 'C',
  },
  {
    name: 'Patrick Williams',
    team: 'CHI',
    position: 'SF/PF',
  },
  {
    name: "Royce O'Neale",
    team: 'BRO',
    position: 'SF/PF',
  },
  {
    name: 'Aaron Gordon',
    team: 'DEN',
    position: 'PF',
  },
  {
    name: 'Josh Richardson',
    team: 'SAS',
    position: 'SG/SF',
  },
  {
    name: 'Jeremiah Robinson-Earl',
    team: 'OKL',
    position: 'PF/C',
  },
  {
    name: 'Talen Horton-Tucker',
    team: 'UTA',
    position: 'SG/SF',
  },
  {
    name: 'Jalen Smith',
    team: 'IND',
    position: 'PF',
  },
  {
    name: 'Deni Avdija',
    team: 'WAS',
    position: 'SF/PF',
  },
  {
    name: 'Evan Fournier',
    team: 'NYK',
    position: 'SG/SF',
  },
  {
    name: 'Luke Kennard',
    team: 'LAC',
    position: 'SG',
  },
  {
    name: 'Robert Williams',
    team: 'BOS',
    position: 'PF/C',
  },
  {
    name: "Jae'Sean Tate",
    team: 'HOU',
    position: 'SF/PF',
  },
  {
    name: 'Jose Alvarado',
    team: 'NOP',
    position: 'PG',
  },
  {
    name: 'Duncan Robinson',
    team: 'MIA',
    position: 'SG/SF',
  },
  {
    name: 'Tre Mann',
    team: 'OKL',
    position: 'PG',
  },
  {
    name: 'Darius Bazley',
    team: 'OKL',
    position: 'SF/PF',
  },
  {
    name: 'Jaden Ivey',
    team: 'DET',
    position: 'PG',
  },
  {
    name: 'Max Strus',
    team: 'MIA',
    position: 'SG',
  },
  {
    name: 'Jaden McDaniels',
    team: 'MIN',
    position: 'SF',
  },
  {
    name: 'Gary Payton II',
    team: 'POR',
    position: 'PG',
  },
  {
    name: 'Bruce Brown',
    team: 'DEN',
    position: 'SG',
  },
  {
    name: 'Tari Eason',
    team: 'HOU',
    position: 'SF',
  },
  {
    name: 'Nassir Little',
    team: 'POR',
    position: 'SF/PF',
  },
  {
    name: 'Kyle Anderson',
    team: 'MIN',
    position: 'SF/PF',
  },
  {
    name: "De'Andre Hunter",
    team: 'ATL',
    position: 'SF/PF',
  },
  {
    name: 'Matisse Thybulle',
    team: 'PHI',
    position: 'PG/SG',
  },
  {
    name: 'P.J. Tucker',
    team: 'PHI',
    position: 'SF/PF',
  },
  {
    name: 'Coby White',
    team: 'CHI',
    position: 'PG',
  },
  {
    name: 'Zion Williamson',
    team: 'NOP',
    position: 'PF',
  },
  {
    name: 'Nickeil Alexander-Walker',
    team: 'UTA',
    position: 'SG',
  },
  {
    name: 'Ivica Zubac',
    team: 'LAC',
    position: 'C',
  },
  {
    name: 'Malik Monk',
    team: 'SAC',
    position: 'SG/SF',
  },
  {
    name: 'Grant Williams',
    team: 'BOS',
    position: 'PF',
  },
  {
    name: 'Dennis Schroder',
    team: 'LAL',
    position: 'PG',
  },
  {
    name: 'Eric Gordon',
    team: 'HOU',
    position: 'SG/SF',
  },
  {
    name: 'Mo Bamba',
    team: 'ORL',
    position: 'C',
  },
  {
    name: 'Ziaire Williams',
    team: 'MEM',
    position: 'SG',
  },
]

export default fearRank
