const hashtagRank = [
  {
    name: 'Nikola Jokic',
    team: 'DEN',
    position: 'C',
  },
  {
    name: 'Joel Embiid',
    team: 'PHI',
    position: 'C',
  },
  {
    name: 'Shai Gilgeous-Alexander',
    team: 'OKC',
    position: 'PG,SG',
  },
  {
    name: 'Tyrese Haliburton',
    team: 'IND',
    position: 'PG,SG',
  },
  {
    name: 'Jayson Tatum',
    team: 'BOS',
    position: 'SF,PF',
  },
  {
    name: 'Luka Doncic',
    team: 'DAL',
    position: 'PG',
  },
  {
    name: 'Stephen Curry',
    team: 'GS',
    position: 'PG',
  },
  {
    name: 'Kevin Durant',
    team: 'PHO',
    position: 'SF,PF',
  },
  {
    name: 'Damian Lillard',
    team: 'MIL',
    position: 'PG',
  },
  {
    name: 'Kyrie Irving',
    team: 'DAL',
    position: 'PG,SG',
  },
  {
    name: 'Anthony Davis',
    team: 'LAL',
    position: 'PF,C',
  },
  {
    name: 'LaMelo Ball',
    team: 'CHA',
    position: 'PG,SG',
  },
  {
    name: 'Donovan Mitchell',
    team: 'CLE',
    position: 'PG,SG',
  },
  {
    name: 'Devin Booker',
    team: 'PHO',
    position: 'SG,SF',
  },
  {
    name: 'Trae Young',
    team: 'ATL',
    position: 'PG',
  },
  {
    name: 'Domantas Sabonis',
    team: 'SAC',
    position: 'PF,C',
  },
  {
    name: 'Jaren Jackson Jr.',
    team: 'MEM',
    position: 'PF,C',
  },
  {
    name: 'James Harden',
    team: 'PHI',
    position: 'PG,SG',
  },
  {
    name: 'Jimmy Butler',
    team: 'MIA',
    position: 'SF,PF',
  },
  {
    name: 'Kawhi Leonard',
    team: 'LAC',
    position: 'SG,SF',
  },
  {
    name: 'Giannis Antetokounmpo',
    team: 'MIL',
    position: 'PF,C',
  },
  {
    name: 'Karl-Anthony Towns',
    team: 'MIN',
    position: 'PF,C',
  },
  {
    name: 'Anthony Edwards',
    team: 'MIN',
    position: 'SG,SF',
  },
  {
    name: 'Mikal Bridges',
    team: 'BKN',
    position: 'SG,SF',
  },
  {
    name: 'Lauri Markkanen',
    team: 'UTA',
    position: 'SF,PF',
  },
  {
    name: 'Desmond Bane',
    team: 'MEM',
    position: 'SG,SF',
  },
  {
    name: 'Paul George',
    team: 'LAC',
    position: 'SG,SF,PF',
  },
  {
    name: 'Bam Adebayo',
    team: 'MIA',
    position: 'C',
  },
  {
    name: 'LeBron James',
    team: 'LAL',
    position: 'SF,PF',
  },
  {
    name: 'Kristaps Porzingis',
    team: 'BOS',
    position: 'PF,C',
  },
  {
    name: 'Myles Turner',
    team: 'IND',
    position: 'C',
  },
  {
    name: 'Darius Garland',
    team: 'CLE',
    position: 'PG',
  },
  {
    name: 'DeMar DeRozan',
    team: 'CHI',
    position: 'SG',
  },
  {
    name: 'Fred VanVleet',
    team: 'HOU',
    position: 'PG',
  },
  {
    name: 'Dejounte Murray',
    team: 'ATL',
    position: 'PG,SG',
  },
  {
    name: 'Jaylen Brown',
    team: 'BOS',
    position: 'SG,SF',
  },
  {
    name: 'Jalen Brunson',
    team: 'NY',
    position: 'PG',
  },
  {
    name: 'Victor Wembanyama',
    team: 'SA',
    position: 'PF,C',
  },
  {
    name: 'Zach LaVine',
    team: 'CHI',
    position: 'SG,SF',
  },
  {
    name: 'OG Anunoby',
    team: 'TOR',
    position: 'SG,SF',
  },
  {
    name: 'Cade Cunningham',
    team: 'DET',
    position: 'PG,SG',
  },
  {
    name: "De'Aaron Fox",
    team: 'SAC',
    position: 'PG',
  },
  {
    name: 'Evan Mobley',
    team: 'CLE',
    position: 'PF,C',
  },
  {
    name: 'Jamal Murray',
    team: 'DEN',
    position: 'PG,SG',
  },
  {
    name: 'Walker Kessler',
    team: 'UTA',
    position: 'C',
  },
  {
    name: 'Tyrese Maxey',
    team: 'PHI',
    position: 'PG,SG',
  },
  {
    name: 'Nikola Vucevic',
    team: 'CHI',
    position: 'C',
  },
  {
    name: 'Nicolas Claxton',
    team: 'BKN',
    position: 'C',
  },
  {
    name: 'Jordan Poole',
    team: 'WAS',
    position: 'PG,SG',
  },
  {
    name: 'Deandre Ayton',
    team: 'POR',
    position: 'C',
  },
  {
    name: 'Pascal Siakam',
    team: 'TOR',
    position: 'PF,C',
  },
  {
    name: 'Jrue Holiday',
    team: 'BOS',
    position: 'PG,SG',
  },
  {
    name: 'Chet Holmgren',
    team: 'OKC',
    position: 'PF,C',
  },
  {
    name: 'Brandon Ingram',
    team: 'NO',
    position: 'SG,SF,PF',
  },
  {
    name: 'Zion Williamson',
    team: 'NO',
    position: 'PF,C',
  },
  {
    name: 'Ja Morant',
    team: 'MEM',
    position: 'PG',
  },
  {
    name: 'Bradley Beal',
    team: 'PHO',
    position: 'PG,SG',
  },
  {
    name: 'Jarrett Allen',
    team: 'CLE',
    position: 'C',
  },
  {
    name: 'Alperen Sengün',
    team: 'HOU',
    position: 'C',
  },
  {
    name: 'Franz Wagner',
    team: 'ORL',
    position: 'SG,SF,PF',
  },
  {
    name: 'Cameron Johnson',
    team: 'BKN',
    position: 'SF,PF',
  },
  {
    name: 'Daniel Gafford',
    team: 'WAS',
    position: 'PF',
  },
  {
    name: 'Anfernee Simons',
    team: 'POR',
    position: 'PG,SG',
  },
  {
    name: 'Devin Vassell',
    team: 'SA',
    position: 'SG,SF',
  },
  {
    name: 'Brook Lopez',
    team: 'MIL',
    position: 'C',
  },
  {
    name: 'Onyeka Okongwu',
    team: 'ATL',
    position: 'C',
  },
  {
    name: 'Jalen Williams',
    team: 'OKC',
    position: 'SG,SF',
  },
  {
    name: 'Mark Williams',
    team: 'CHA',
    position: 'C',
  },
  {
    name: 'Julius Randle',
    team: 'NY',
    position: 'PF',
  },
  {
    name: 'Josh Hart',
    team: 'NY',
    position: 'SG,SF',
  },
  {
    name: 'Tyler Herro',
    team: 'MIA',
    position: 'PG,SG',
  },
  {
    name: 'Jerami Grant',
    team: 'POR',
    position: 'PF',
  },
  {
    name: 'Markelle Fultz',
    team: 'ORL',
    position: 'PG,SG',
  },
  {
    name: 'Terry Rozier',
    team: 'CHA',
    position: 'PG,SG',
  },
  {
    name: 'Rudy Gobert',
    team: 'MIN',
    position: 'C',
  },
  {
    name: 'Khris Middleton',
    team: 'MIL',
    position: 'SF,PF',
  },
  {
    name: 'Scottie Barnes',
    team: 'TOR',
    position: 'SF,PF',
  },
  {
    name: 'Josh Giddey',
    team: 'OKC',
    position: 'SG,SF,PF',
  },
  {
    name: 'Klay Thompson',
    team: 'GS',
    position: 'SG,SF',
  },
  {
    name: 'Tyus Jones',
    team: 'WAS',
    position: 'PG',
  },
  {
    name: 'Jakob Poeltl',
    team: 'TOR',
    position: 'C',
  },
  {
    name: "D'Angelo Russell",
    team: 'LAL',
    position: 'PG,SG',
  },
  {
    name: 'Kyle Kuzma',
    team: 'WAS',
    position: 'SF,PF',
  },
  {
    name: 'Clint Capela',
    team: 'ATL',
    position: 'C',
  },
  {
    name: 'Austin Reaves',
    team: 'LAL',
    position: 'SG,SF',
  },
  {
    name: 'CJ McCollum',
    team: 'NO',
    position: 'PG,SG',
  },
  {
    name: 'Zach Collins',
    team: 'SA',
    position: 'PF,C',
  },
  {
    name: 'John Collins',
    team: 'UTA',
    position: 'PF',
  },
  {
    name: 'Chris Paul',
    team: 'GS',
    position: 'PG',
  },
  {
    name: "De'Anthony Melton",
    team: 'PHI',
    position: 'PG,SG',
  },
  {
    name: 'Tobias Harris',
    team: 'PHI',
    position: 'SF,PF',
  },
  {
    name: 'Jonas Valanciunas',
    team: 'NO',
    position: 'C',
  },
  {
    name: 'Derrick White',
    team: 'BOS',
    position: 'PG,SG',
  },
  {
    name: 'Robert Williams III',
    team: 'POR',
    position: 'C',
  },
  {
    name: 'Trey Murphy III',
    team: 'NO',
    position: 'SF,PF',
  },
  {
    name: 'P.J. Washington',
    team: 'CHA',
    position: 'PF',
  },
  {
    name: 'Draymond Green',
    team: 'GS',
    position: 'PF,C',
  },
  {
    name: 'Michael Porter Jr.',
    team: 'DEN',
    position: 'SF',
  },
  {
    name: 'Jabari Smith Jr.',
    team: 'HOU',
    position: 'PF,C',
  },
  {
    name: 'Mitchell Robinson',
    team: 'NY',
    position: 'C',
  },
  {
    name: 'Paolo Banchero',
    team: 'ORL',
    position: 'SF,PF',
  },
  {
    name: 'Miles Bridges',
    team: 'CHA',
    position: 'SF,PF',
  },
  {
    name: 'Jusuf Nurkic',
    team: 'PHO',
    position: 'C',
  },
  {
    name: 'Al Horford',
    team: 'BOS',
    position: 'PF,C',
  },
  {
    name: 'Paul Reed',
    team: 'PHI',
    position: 'PF,C',
  },
  {
    name: 'Bojan Bogdanovic',
    team: 'DET',
    position: 'SG,SF',
  },
  {
    name: 'Buddy Hield',
    team: 'IND',
    position: 'SG,SF',
  },
  {
    name: 'Keegan Murray',
    team: 'SAC',
    position: 'SF,PF',
  },
  {
    name: 'Jalen Duren',
    team: 'DET',
    position: 'C',
  },
  {
    name: 'Ivica Zubac',
    team: 'LAC',
    position: 'C',
  },
  {
    name: 'Bruce Brown',
    team: 'IND',
    position: 'PG,SG,SF',
  },
  {
    name: 'Scoot Henderson',
    team: 'POR',
    position: 'PG',
  },
  {
    name: 'Herbert Jones',
    team: 'NO',
    position: 'SF,PF',
  },
  {
    name: 'Immanuel Quickley',
    team: 'NY',
    position: 'PG,SG',
  },
  {
    name: 'Bobby Portis',
    team: 'MIL',
    position: 'PF,C',
  },
  {
    name: 'Wendell Carter Jr.',
    team: 'ORL',
    position: 'C',
  },
  {
    name: 'Marcus Smart',
    team: 'MEM',
    position: 'PG',
  },
  {
    name: 'Mike Conley',
    team: 'MIN',
    position: 'PG',
  },
  {
    name: 'Spencer Dinwiddie',
    team: 'BKN',
    position: 'PG',
  },
  {
    name: 'Tre Jones',
    team: 'SA',
    position: 'PG',
  },
  {
    name: 'Kentavious Caldwell-Pope',
    team: 'DEN',
    position: 'SG,SF',
  },
  {
    name: 'Andrew Wiggins',
    team: 'GS',
    position: 'SF,PF',
  },
  {
    name: 'Kyle Anderson',
    team: 'MIN',
    position: 'SF,PF',
  },
  {
    name: 'Kevin Huerter',
    team: 'SAC',
    position: 'SG,SF',
  },
  {
    name: 'Tari Eason',
    team: 'HOU',
    position: 'SF,PF',
  },
  {
    name: 'Jaden McDaniels',
    team: 'MIN',
    position: 'SF,PF',
  },
  {
    name: 'Jarred Vanderbilt',
    team: 'LAL',
    position: 'PF',
  },
  {
    name: 'Ben Simmons',
    team: 'BKN',
    position: 'PG,SG,PF',
  },
  {
    name: 'Matisse Thybulle',
    team: 'POR',
    position: 'SG,SF',
  },
  {
    name: 'Obi Toppin',
    team: 'IND',
    position: 'PF',
  },
  {
    name: 'Delon Wright',
    team: 'WAS',
    position: 'PG,SG',
  },
  {
    name: 'Jordan Clarkson',
    team: 'UTA',
    position: 'PG,SG',
  },
  {
    name: 'Aaron Gordon',
    team: 'DEN',
    position: 'PF',
  },
  {
    name: 'Norman Powell',
    team: 'LAC',
    position: 'SG,SF',
  },
  {
    name: 'Bogdan Bogdanovic',
    team: 'ATL',
    position: 'SG,SF,PF',
  },
  {
    name: 'Patrick Williams',
    team: 'CHI',
    position: 'PF',
  },
  {
    name: 'Josh Richardson',
    team: 'MIA',
    position: 'SG',
  },
  {
    name: 'Caleb Martin',
    team: 'MIA',
    position: 'SG,SF',
  },
  {
    name: 'Donte DiVincenzo',
    team: 'NY',
    position: 'SG,SF',
  },
  {
    name: 'Kyle Lowry',
    team: 'MIA',
    position: 'PG',
  },
  {
    name: 'Saddiq Bey',
    team: 'ATL',
    position: 'SF,PF',
  },
  {
    name: 'Alex Caruso',
    team: 'CHI',
    position: 'PG,SG',
  },
  {
    name: 'Jevon Carter',
    team: 'CHI',
    position: 'PG,SG',
  },
  {
    name: 'Brandon Miller',
    team: 'CHA',
    position: 'SF',
  },
  {
    name: 'Cole Anthony',
    team: 'ORL',
    position: 'PG',
  },
  {
    name: 'Malcolm Brogdon',
    team: 'POR',
    position: 'PG,SG',
  },
  {
    name: 'Dereck Lively II',
    team: 'DAL',
    position: 'C',
  },
  {
    name: 'Harrison Barnes',
    team: 'SAC',
    position: 'SF,PF',
  },
  {
    name: 'Deni Avdija',
    team: 'WAS',
    position: 'SF,PF',
  },
  {
    name: 'Jaden Ivey',
    team: 'DET',
    position: 'PG,SG',
  },
  {
    name: 'Jalen Green',
    team: 'HOU',
    position: 'PG,SG',
  },
  {
    name: 'Malik Beasley',
    team: 'MIL',
    position: 'SG,SF',
  },
  {
    name: 'Isaiah Hartenstein',
    team: 'NY',
    position: 'C',
  },
  {
    name: 'Keldon Johnson',
    team: 'SA',
    position: 'SG,SF',
  },
  {
    name: 'Kevon Looney',
    team: 'GS',
    position: 'PF',
  },
  {
    name: 'Steven Adams',
    team: 'MEM',
    position: 'C',
  },
  {
    name: 'Dennis Schröder',
    team: 'TOR',
    position: 'PG',
  },
  {
    name: 'Collin Sexton',
    team: 'UTA',
    position: 'PG,SG',
  },
  {
    name: 'Jae Crowder',
    team: 'MIL',
    position: 'SF,PF',
  },
  {
    name: 'Shaedon Sharpe',
    team: 'POR',
    position: 'SG,SF',
  },
  {
    name: 'Brandon Clarke',
    team: 'MEM',
    position: 'PF,C',
  },
  {
    name: 'Quentin Grimes',
    team: 'NY',
    position: 'SG,SF',
  },
  {
    name: 'Nicolas Batum',
    team: 'LAC',
    position: 'SF,PF',
  },
  {
    name: 'Coby White',
    team: 'CHI',
    position: 'PG,SG',
  },
  {
    name: 'Malik Monk',
    team: 'SAC',
    position: 'SG,SF',
  },
  {
    name: 'Grant Williams',
    team: 'DAL',
    position: 'PF',
  },
  {
    name: 'Nick Richards',
    team: 'CHA',
    position: 'C',
  },
  {
    name: 'Gary Trent Jr.',
    team: 'TOR',
    position: 'PG,SG',
  },
  {
    name: 'Isaiah Stewart',
    team: 'DET',
    position: 'PF,C',
  },
  {
    name: 'Russell Westbrook',
    team: 'LAC',
    position: 'PG',
  },
  {
    name: 'Bennedict Mathurin',
    team: 'IND',
    position: 'SG,SF',
  },
  {
    name: 'Corey Kispert',
    team: 'WAS',
    position: 'SG,SF',
  },
  {
    name: 'Gary Payton II',
    team: 'GS',
    position: 'PG,SG,SF',
  },
  {
    name: 'Pat Connaughton',
    team: 'MIL',
    position: 'SG,SF',
  },
  {
    name: 'Max Strus',
    team: 'CLE',
    position: 'SG,SF',
  },
  {
    name: 'Jeremy Sochan',
    team: 'SA',
    position: 'PF',
  },
  {
    name: 'Luke Kennard',
    team: 'MEM',
    position: 'PG,SG',
  },
  {
    name: 'Luguentz Dort',
    team: 'OKC',
    position: 'SG,SF',
  },
  {
    name: 'Kelly Olynyk',
    team: 'UTA',
    position: 'PF,C',
  },
  {
    name: 'Kris Dunn',
    team: 'UTA',
    position: 'PG',
  },
  {
    name: 'Larry Nance Jr.',
    team: 'NO',
    position: 'PF,C',
  },
  {
    name: 'Josh Green',
    team: 'DAL',
    position: 'SG,SF',
  },
  {
    name: 'Caris LeVert',
    team: 'CLE',
    position: 'SG,SF',
  },
  {
    name: 'Gordon Hayward',
    team: 'CHA',
    position: 'SF',
  },
  {
    name: 'Patrick Beverley',
    team: 'PHI',
    position: 'PG',
  },
  {
    name: "Royce O'Neale",
    team: 'BKN',
    position: 'SG,SF',
  },
  {
    name: 'Maxi Kleber',
    team: 'DAL',
    position: 'PF,C',
  },
  {
    name: 'Terance Mann',
    team: 'LAC',
    position: 'SG,SF',
  },
  {
    name: 'Isaiah Jackson',
    team: 'IND',
    position: 'PF,C',
  },
  {
    name: 'Gabe Vincent',
    team: 'LAL',
    position: 'PG,SG',
  },
  {
    name: 'Richaun Holmes',
    team: 'DAL',
    position: 'PF,C',
  },
  {
    name: "De'Andre Hunter",
    team: 'ATL',
    position: 'SF,PF',
  },
  {
    name: 'Amen Thompson',
    team: 'HOU',
    position: 'SF',
  },
  {
    name: 'Naz Reid',
    team: 'MIN',
    position: 'PF,C',
  },
  {
    name: 'Marvin Bagley III',
    team: 'DET',
    position: 'PF,C',
  },
  {
    name: 'Ayo Dosunmu',
    team: 'CHI',
    position: 'SG',
  },
  {
    name: 'Jose Alvarado',
    team: 'NO',
    position: 'PG',
  },
  {
    name: 'Dillon Brooks',
    team: 'HOU',
    position: 'SG,SF',
  },
  {
    name: 'RJ Barrett',
    team: 'NY',
    position: 'SG,SF',
  },
  {
    name: 'Ausar Thompson',
    team: 'DET',
    position: 'SG,SF',
  },
]

export default hashtagRank
