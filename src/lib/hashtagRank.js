const hashtagRank = [
  {
    name: 'Victor Wembanyama',
    team: 'SA',
    position: 'C',
  },
  {
    name: 'Nikola Jokic',
    team: 'DEN',
    position: 'C',
  },
  {
    name: 'Shai Gilgeous-Alexander',
    team: 'OKC',
    position: 'PG',
  },
  {
    name: 'Luka Doncic',
    team: 'DAL',
    position: 'PG',
  },
  {
    name: 'Joel Embiid',
    team: 'PHI',
    position: 'C',
  },
  {
    name: 'Anthony Davis',
    team: 'LAL',
    position: 'PF/C',
  },
  {
    name: 'Giannis Antetokounmpo',
    team: 'MIL',
    position: 'PF/C',
  },
  {
    name: 'Tyrese Haliburton',
    team: 'IND',
    position: 'PG/SG',
  },
  {
    name: 'Trae Young',
    team: 'ATL',
    position: 'PG',
  },
  {
    name: 'Jayson Tatum',
    team: 'BOS',
    position: 'SF/PF',
  },
  {
    name: 'James Harden',
    team: 'LAC',
    position: 'PG/SG',
  },
  {
    name: 'Stephen Curry',
    team: 'GS',
    position: 'PG',
  },
  {
    name: 'Donovan Mitchell',
    team: 'CLE',
    position: 'PG/SG',
  },
  {
    name: 'Kyrie Irving',
    team: 'DAL',
    position: 'PG/SG',
  },
  {
    name: 'Kevin Durant',
    team: 'PHO',
    position: 'PF',
  },
  {
    name: 'LeBron James',
    team: 'LAL',
    position: 'SF/PF',
  },
  {
    name: 'Scottie Barnes',
    team: 'TOR',
    position: 'SG/SF/PF',
  },
  {
    name: 'Damian Lillard',
    team: 'MIL',
    position: 'PG',
  },
  {
    name: 'Devin Booker',
    team: 'PHO',
    position: 'PG/SG',
  },
  {
    name: 'LaMelo Ball',
    team: 'CHA',
    position: 'PG',
  },
  {
    name: 'Domantas Sabonis',
    team: 'SAC',
    position: 'PF/C',
  },
  {
    name: 'Karl-Anthony Towns',
    team: 'NY',
    position: 'PF/C',
  },
  {
    name: 'Lauri Markkanen',
    team: 'UTA',
    position: 'SF/PF',
  },
  {
    name: 'Chet Holmgren',
    team: 'OKC',
    position: 'C',
  },
  {
    name: 'Kawhi Leonard',
    team: 'LAC',
    position: 'SF/PF',
  },
  {
    name: 'Jalen Brunson',
    team: 'NY',
    position: 'PG',
  },
  {
    name: 'Paul George',
    team: 'PHI',
    position: 'SF/PF',
  },
  {
    name: 'Anthony Edwards',
    team: 'MIN',
    position: 'SG/SF',
  },
  {
    name: 'Jimmy Butler',
    team: 'MIA',
    position: 'SG/SF/PF',
  },
  {
    name: 'Fred VanVleet',
    team: 'HOU',
    position: 'PG',
  },
  {
    name: 'Jaren Jackson Jr.',
    team: 'MEM',
    position: 'PF/C',
  },
  {
    name: 'Tyrese Maxey',
    team: 'PHI',
    position: 'PG/SG',
  },
  {
    name: "De'Aaron Fox",
    team: 'SAC',
    position: 'PG',
  },
  {
    name: 'Derrick White',
    team: 'BOS',
    position: 'PG/SG',
  },
  {
    name: 'Ja Morant',
    team: 'MEM',
    position: 'PG',
  },
  {
    name: 'Evan Mobley',
    team: 'CLE',
    position: 'PF/C',
  },
  {
    name: 'Desmond Bane',
    team: 'MEM',
    position: 'SG/SF',
  },
  {
    name: 'Jalen Williams',
    team: 'OKC',
    position: 'PF',
  },
  {
    name: 'Jalen Johnson',
    team: 'ATL',
    position: 'PF',
  },
  {
    name: 'Dejounte Murray',
    team: 'NO',
    position: 'PG/SG',
  },
  {
    name: 'Jamal Murray',
    team: 'DEN',
    position: 'PG',
  },
  {
    name: 'Alperen Sengün',
    team: 'HOU',
    position: 'C',
  },
  {
    name: 'Bam Adebayo',
    team: 'MIA',
    position: 'C',
  },
  {
    name: 'Kristaps Porzingis',
    team: 'BOS',
    position: 'PF/C',
  },
  {
    name: 'Myles Turner',
    team: 'IND',
    position: 'C',
  },
  {
    name: 'Cade Cunningham',
    team: 'DET',
    position: 'PG/SG',
  },
  {
    name: 'Immanuel Quickley',
    team: 'TOR',
    position: 'PG/SG',
  },
  {
    name: 'DeMar DeRozan',
    team: 'SAC',
    position: 'SF/PF',
  },
  {
    name: 'Franz Wagner',
    team: 'ORL',
    position: 'SF/PF',
  },
  {
    name: 'Rudy Gobert',
    team: 'MIN',
    position: 'C',
  },
  {
    name: 'Jarrett Allen',
    team: 'CLE',
    position: 'C',
  },
  {
    name: 'Nikola Vucevic',
    team: 'CHI',
    position: 'C',
  },
  {
    name: 'Darius Garland',
    team: 'CLE',
    position: 'PG',
  },
  {
    name: 'Jaylen Brown',
    team: 'BOS',
    position: 'SG/SF',
  },
  {
    name: 'Bradley Beal',
    team: 'PHO',
    position: 'SG/SF',
  },
  {
    name: 'Deandre Ayton',
    team: 'POR',
    position: 'C',
  },
  {
    name: "D'Angelo Russell",
    team: 'LAL',
    position: 'PG/SG',
  },
  {
    name: 'Tobias Harris',
    team: 'DET',
    position: 'SF/PF',
  },
  {
    name: 'Jrue Holiday',
    team: 'BOS',
    position: 'PG/SG',
  },
  {
    name: 'Jalen Duren',
    team: 'DET',
    position: 'C',
  },
  {
    name: 'Zion Williamson',
    team: 'NO',
    position: 'PF',
  },
  {
    name: 'Pascal Siakam',
    team: 'IND',
    position: 'PF',
  },
  {
    name: 'Zach LaVine',
    team: 'CHI',
    position: 'SG/SF',
  },
  {
    name: 'Jordan Poole',
    team: 'WAS',
    position: 'PG/SG',
  },
  {
    name: 'Nicolas Claxton',
    team: 'BKN',
    position: 'C',
  },
  {
    name: 'Miles Bridges',
    team: 'CHA',
    position: 'SF/PF',
  },
  {
    name: 'Tyler Herro',
    team: 'MIA',
    position: 'PG/SG',
  },
  {
    name: 'Isaiah Hartenstein',
    team: 'OKC',
    position: 'C',
  },
  {
    name: 'Walker Kessler',
    team: 'UTA',
    position: 'C',
  },
  {
    name: 'Mikal Bridges',
    team: 'NY',
    position: 'SG/SF',
  },
  {
    name: 'Devin Vassell',
    team: 'SA',
    position: 'SG/SF',
  },
  {
    name: 'Brandon Ingram',
    team: 'NO',
    position: 'SF',
  },
  {
    name: 'Dereck Lively II',
    team: 'DAL',
    position: 'C',
  },
  {
    name: 'Anfernee Simons',
    team: 'POR',
    position: 'PG/SG',
  },
  {
    name: 'Mark Williams',
    team: 'CHA',
    position: 'C',
  },
  {
    name: 'Josh Giddey',
    team: 'CHI',
    position: 'SG/SF',
  },
  {
    name: 'Collin Sexton',
    team: 'UTA',
    position: 'PG/SG',
  },
  {
    name: 'Jabari Smith Jr.',
    team: 'HOU',
    position: 'PF/C',
  },
  {
    name: 'Bogdan Bogdanovic',
    team: 'ATL',
    position: 'SG/SF',
  },
  {
    name: 'Paolo Banchero',
    team: 'ORL',
    position: 'SF/PF',
  },
  {
    name: 'Austin Reaves',
    team: 'LAL',
    position: 'SG/SF',
  },
  {
    name: 'Keegan Murray',
    team: 'SAC',
    position: 'SF/PF',
  },
  {
    name: 'Onyeka Okongwu',
    team: 'ATL',
    position: 'C',
  },
  {
    name: 'OG Anunoby',
    team: 'NY',
    position: 'SF/PF',
  },
  {
    name: 'Alex Caruso',
    team: 'OKC',
    position: 'PG/SG',
  },
  {
    name: 'Coby White',
    team: 'CHI',
    position: 'PG/SG',
  },
  {
    name: 'Michael Porter Jr.',
    team: 'DEN',
    position: 'SF',
  },
  {
    name: 'Jalen Suggs',
    team: 'ORL',
    position: 'PG/SG',
  },
  {
    name: 'Daniel Gafford',
    team: 'DAL',
    position: 'C',
  },
  {
    name: 'Draymond Green',
    team: 'GS',
    position: 'PF/C',
  },
  {
    name: 'Jakob Poeltl',
    team: 'TOR',
    position: 'C',
  },
  {
    name: 'Amen Thompson',
    team: 'HOU',
    position: 'SF/PF',
  },
  {
    name: 'CJ McCollum',
    team: 'NO',
    position: 'PG/SG',
  },
  {
    name: 'Herbert Jones',
    team: 'NO',
    position: 'SF/PF',
  },
  {
    name: 'Ivica Zubac',
    team: 'LAC',
    position: 'C',
  },
  {
    name: 'Cam Thomas',
    team: 'BKN',
    position: 'SG',
  },
  {
    name: 'Khris Middleton',
    team: 'MIL',
    position: 'SF',
  },
  {
    name: 'Mike Conley',
    team: 'MIN',
    position: 'PG',
  },
  {
    name: 'Jonas Valanciunas',
    team: 'WAS',
    position: 'C',
  },
  {
    name: 'Brandon Miller',
    team: 'CHA',
    position: 'SG/SF',
  },
  {
    name: 'Tyus Jones',
    team: 'PHO',
    position: 'PG',
  },
  {
    name: 'Brook Lopez',
    team: 'MIL',
    position: 'C',
  },
  {
    name: 'Jerami Grant',
    team: 'POR',
    position: 'PF',
  },
  {
    name: 'Kyle Kuzma',
    team: 'WAS',
    position: 'SF/PF',
  },
  {
    name: 'John Collins',
    team: 'UTA',
    position: 'PF',
  },
  {
    name: 'Trey Murphy III',
    team: 'NO',
    position: 'SG/SF',
  },
  {
    name: 'Norman Powell',
    team: 'LAC',
    position: 'SG/SF',
  },
  {
    name: 'Clint Capela',
    team: 'ATL',
    position: 'C',
  },
  {
    name: 'Buddy Hield',
    team: 'GS',
    position: 'SG/SF',
  },
  {
    name: 'Taylor Hendricks',
    team: 'UTA',
    position: 'PF',
  },
  {
    name: 'Trayce Jackson-Davis',
    team: 'GS',
    position: 'PF/C',
  },
  {
    name: 'Jalen Green',
    team: 'HOU',
    position: 'SG',
  },
  {
    name: 'Julius Randle',
    team: 'MIN',
    position: 'PF',
  },
  {
    name: 'Jusuf Nurkic',
    team: 'PHO',
    position: 'C',
  },
  {
    name: 'Cameron Johnson',
    team: 'BKN',
    position: 'SF/PF',
  },
  {
    name: 'Terry Rozier',
    team: 'MIA',
    position: 'PG/SG',
  },
  {
    name: 'Naz Reid',
    team: 'MIN',
    position: 'PF/C',
  },
  {
    name: 'Dennis Schröder',
    team: 'BKN',
    position: 'PG',
  },
  {
    name: 'Jonathan Kuminga',
    team: 'GS',
    position: 'PF',
  },
  {
    name: 'Marcus Smart',
    team: 'MEM',
    position: 'PG/SG',
  },
  {
    name: 'Jalen Smith',
    team: 'CHI',
    position: 'PF/C',
  },
  {
    name: 'Corey Kispert',
    team: 'WAS',
    position: 'SG/SF',
  },
  {
    name: 'Donte DiVincenzo',
    team: 'MIN',
    position: 'SG',
  },
  {
    name: 'Chris Paul',
    team: 'SA',
    position: 'PG',
  },
  {
    name: 'Grayson Allen',
    team: 'PHO',
    position: 'PG/SG',
  },
  {
    name: 'Klay Thompson',
    team: 'DAL',
    position: 'SG/SF',
  },
  {
    name: 'Terance Mann',
    team: 'LAC',
    position: 'SG/SF',
  },
  {
    name: 'Bobby Portis',
    team: 'MIL',
    position: 'PF',
  },
  {
    name: 'Keyonte George',
    team: 'UTA',
    position: 'PG/SG',
  },
  {
    name: 'Kentavious Caldwell-Pope',
    team: 'ORL',
    position: 'SG',
  },
  {
    name: 'Jaden Ivey',
    team: 'DET',
    position: 'SG',
  },
  {
    name: 'RJ Barrett',
    team: 'TOR',
    position: 'SG/SF',
  },
  {
    name: 'P.J. Washington',
    team: 'DAL',
    position: 'PF',
  },
  {
    name: 'Brandin Podziemski',
    team: 'GS',
    position: 'SG',
  },
  {
    name: 'Malik Monk',
    team: 'SAC',
    position: 'SG/SF',
  },
  {
    name: 'Al Horford',
    team: 'BOS',
    position: 'PF/C',
  },
  {
    name: 'Ausar Thompson',
    team: 'DET',
    position: 'SF/PF',
  },
  {
    name: 'Keon Ellis',
    team: 'SAC',
    position: 'SG',
  },
  {
    name: 'Josh Hart',
    team: 'NY',
    position: 'SG/SF',
  },
  {
    name: 'Rui Hachimura',
    team: 'LAL',
    position: 'SF/PF',
  },
  {
    name: 'Alexandre Sarr',
    team: 'WAS',
    position: 'PF/C',
  },
  {
    name: 'Wendell Carter Jr.',
    team: 'ORL',
    position: 'C',
  },
  {
    name: 'Jeremy Sochan',
    team: 'SA',
    position: 'PF',
  },
  {
    name: 'Aaron Nesmith',
    team: 'IND',
    position: 'SF',
  },
  {
    name: "De'Anthony Melton",
    team: 'GS',
    position: 'PG/SG',
  },
  {
    name: 'Kelly Olynyk',
    team: 'TOR',
    position: 'PF/C',
  },
  {
    name: 'Marvin Bagley III',
    team: 'WAS',
    position: 'PF/C',
  },
  {
    name: 'Bruce Brown',
    team: 'TOR',
    position: 'SG/SF',
  },
  {
    name: 'Kevin Porter Jr.',
    team: 'LAC',
    position: 'SG',
  },
  {
    name: 'Nick Richards',
    team: 'CHA',
    position: 'C',
  },
  {
    name: 'Noah Clowney',
    team: 'BKN',
    position: 'PF',
  },
  {
    name: 'Mitchell Robinson',
    team: 'NY',
    position: 'C',
  },
  {
    name: 'Tari Eason',
    team: 'HOU',
    position: 'SF',
  },
  {
    name: 'Aaron Gordon',
    team: 'DEN',
    position: 'PF',
  },
  {
    name: 'Tre Jones',
    team: 'SA',
    position: 'PG',
  },
  {
    name: 'Kelly Oubre Jr.',
    team: 'PHI',
    position: 'SG/SF',
  },
  {
    name: 'Zach Edey',
    team: 'MEM',
    position: 'C',
  },
  {
    name: 'Scoot Henderson',
    team: 'POR',
    position: 'PG',
  },
  {
    name: 'Dyson Daniels',
    team: 'ATL',
    position: 'PG/SG',
  },
  {
    name: 'Kyle Lowry',
    team: 'PHI',
    position: 'PG',
  },
  {
    name: 'Jaden McDaniels',
    team: 'MIN',
    position: 'SF',
  },
  {
    name: 'Patrick Williams',
    team: 'CHI',
    position: 'PF',
  },
  {
    name: 'Karlo Matkovic',
    team: 'NO',
    position: 'PF',
  },
  {
    name: 'Luguentz Dort',
    team: 'OKC',
    position: 'SG/SF',
  },
  {
    name: 'Malcolm Brogdon',
    team: 'WAS',
    position: 'PG/SG',
  },
  {
    name: 'T.J. McConnell',
    team: 'IND',
    position: 'PG',
  },
  {
    name: 'Max Strus',
    team: 'CLE',
    position: 'SG/SF',
  },
  {
    name: 'Deni Avdija',
    team: 'POR',
    position: 'SF/PF',
  },
  {
    name: 'Shaedon Sharpe',
    team: 'POR',
    position: 'SG/SF',
  },
  {
    name: 'Ben Simmons',
    team: 'BKN',
    position: 'PG/PF',
  },
  {
    name: 'Jonathan Isaac',
    team: 'ORL',
    position: 'PF',
  },
  {
    name: 'Daniel Theis',
    team: 'NO',
    position: 'C',
  },
  {
    name: 'Jaime Jaquez Jr.',
    team: 'MIA',
    position: 'SG/SF',
  },
  {
    name: 'Kevin Huerter',
    team: 'SAC',
    position: 'SG/SF',
  },
  {
    name: 'Gary Trent Jr.',
    team: 'MIL',
    position: 'SG',
  },
  {
    name: 'Keldon Johnson',
    team: 'SA',
    position: 'SF',
  },
  {
    name: 'Luke Kennard',
    team: 'MEM',
    position: 'SG',
  },
  {
    name: 'Jordan Clarkson',
    team: 'UTA',
    position: 'SG',
  },
  {
    name: 'Cole Anthony',
    team: 'ORL',
    position: 'PG',
  },
  {
    name: 'Reed Sheppard',
    team: 'HOU',
    position: 'SG',
  },
  {
    name: 'Andrew Wiggins',
    team: 'GS',
    position: 'SF/PF',
  },
  {
    name: 'Jarred Vanderbilt',
    team: 'LAL',
    position: 'PF',
  },
  {
    name: 'Bilal Coulibaly',
    team: 'WAS',
    position: 'SF',
  },
  {
    name: 'Donovan Clingan',
    team: 'POR',
    position: 'C',
  },
  {
    name: 'Russell Westbrook',
    team: 'DEN',
    position: 'PG',
  },
  {
    name: 'Andrew Nembhard',
    team: 'IND',
    position: 'PG/SG',
  },
  {
    name: 'Caris LeVert',
    team: 'CLE',
    position: 'SG/SF',
  },
  {
    name: 'Miles McBride',
    team: 'NY',
    position: 'PG',
  },
  {
    name: 'Caleb Martin',
    team: 'PHI',
    position: 'SG/SF',
  },
  {
    name: 'Duncan Robinson',
    team: 'MIA',
    position: 'SF',
  },
  {
    name: 'Nikola Jovic',
    team: 'MIA',
    position: 'PF',
  },
  {
    name: 'Josh Richardson',
    team: 'MIA',
    position: 'SG/SF',
  },
  {
    name: 'Brandon Clarke',
    team: 'MEM',
    position: 'PF',
  },
  {
    name: 'Bennedict Mathurin',
    team: 'IND',
    position: 'SG/SF',
  },
  {
    name: 'Christian Braun',
    team: 'DEN',
    position: 'SG',
  },
  {
    name: 'Zaccharie Risacher',
    team: 'ATL',
    position: 'SF/PF',
  },
  {
    name: 'Peyton Watson',
    team: 'DEN',
    position: 'SF',
  },
  {
    name: 'Josh Green',
    team: 'CHA',
    position: 'SG/SF',
  },
  {
    name: 'Andre Drummond',
    team: 'PHI',
    position: 'C',
  },
  {
    name: 'Nickeil Alexander-Walker',
    team: 'MIN',
    position: 'SG',
  },
]

export default hashtagRank
