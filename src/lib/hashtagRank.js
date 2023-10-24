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
    name: 'Jaren Jackson Jr.',
    team: 'MEM',
    position: 'PF,C',
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
    name: 'Victor Wembanyama',
    team: 'SA',
    position: 'PF,C',
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
    name: 'DeMar DeRozan',
    team: 'CHI',
    position: 'SG,SF',
  },
  {
    name: 'Darius Garland',
    team: 'CLE',
    position: 'PG',
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
    name: 'Jamal Murray',
    team: 'DEN',
    position: 'PG,SG',
  },
  {
    name: 'Evan Mobley',
    team: 'CLE',
    position: 'PF,C',
  },
  {
    name: 'Tyrese Maxey',
    team: 'PHI',
    position: 'PG,SG',
  },
  {
    name: 'Walker Kessler',
    team: 'UTA',
    position: 'C',
  },
  {
    name: 'Deandre Ayton',
    team: 'POR',
    position: 'C',
  },
  {
    name: 'Jordan Poole',
    team: 'WAS',
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
    name: 'Pascal Siakam',
    team: 'TOR',
    position: 'PF,C',
  },
  {
    name: 'Chet Holmgren',
    team: 'OKC',
    position: 'PF,C',
  },
  {
    name: 'Jrue Holiday',
    team: 'BOS',
    position: 'PG,SG',
  },
  {
    name: 'Brandon Ingram',
    team: 'NO',
    position: 'SG,SF,PF',
  },
  {
    name: 'Scottie Barnes',
    team: 'TOR',
    position: 'SF,PF',
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
    name: 'Franz Wagner',
    team: 'ORL',
    position: 'SG,SF,PF',
  },
  {
    name: 'Alperen Sengün',
    team: 'HOU',
    position: 'C',
  },
  {
    name: 'Cameron Johnson',
    team: 'BKN',
    position: 'SF,PF',
  },
  {
    name: 'Daniel Gafford',
    team: 'WAS',
    position: 'PF,C',
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
    name: 'Khris Middleton',
    team: 'MIL',
    position: 'SF,PF',
  },
  {
    name: 'Terry Rozier',
    team: 'CHA',
    position: 'PG,SG',
  },
  {
    name: 'Markelle Fultz',
    team: 'ORL',
    position: 'PG,SG',
  },
  {
    name: 'Rudy Gobert',
    team: 'MIN',
    position: 'C',
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
    name: 'Chris Paul',
    team: 'GS',
    position: 'PG',
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
    name: 'Tobias Harris',
    team: 'PHI',
    position: 'SF,PF',
  },
  {
    name: "De'Anthony Melton",
    team: 'PHI',
    position: 'PG,SG',
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
    name: 'Ben Simmons',
    team: 'BKN',
    position: 'PG,SG,PF',
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
    name: 'Mitchell Robinson',
    team: 'NY',
    position: 'C',
  },
  {
    name: 'Bojan Bogdanovic',
    team: 'DET',
    position: 'SG,SF',
  },
  {
    name: 'Al Horford',
    team: 'BOS',
    position: 'PF,C',
  },
  {
    name: 'Jusuf Nurkic',
    team: 'PHO',
    position: 'C',
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
    name: 'Ivica Zubac',
    team: 'LAC',
    position: 'C',
  },
  {
    name: 'Jalen Duren',
    team: 'DET',
    position: 'C',
  },
  {
    name: 'Scoot Henderson',
    team: 'POR',
    position: 'PG',
  },
  {
    name: 'Bruce Brown',
    team: 'IND',
    position: 'PG,SG,SF',
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
    name: 'Herbert Jones',
    team: 'NO',
    position: 'SF,PF',
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
    name: 'Dereck Lively II',
    team: 'DAL',
    position: 'C',
  },
  {
    name: 'Mike Conley',
    team: 'MIN',
    position: 'PG',
  },
  {
    name: 'Spencer Dinwiddie',
    team: 'BKN',
    position: 'PG,SG',
  },
  {
    name: 'Robert Covington',
    team: 'LAC',
    position: 'SF,PF',
  },
  {
    name: 'Jeremy Sochan',
    team: 'SA',
    position: 'PF',
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
    name: 'Tre Jones',
    team: 'SA',
    position: 'PG',
  },
  {
    name: 'Jarred Vanderbilt',
    team: 'LAL',
    position: 'PF',
  },
  {
    name: 'Obi Toppin',
    team: 'IND',
    position: 'PF',
  },
  {
    name: 'Matisse Thybulle',
    team: 'POR',
    position: 'SG,SF',
  },
  {
    name: 'Jordan Clarkson',
    team: 'UTA',
    position: 'PG,SG',
  },
  {
    name: 'Delon Wright',
    team: 'WAS',
    position: 'PG,SG',
  },
  {
    name: 'Aaron Gordon',
    team: 'DEN',
    position: 'PF',
  },
  {
    name: 'Paul Reed',
    team: 'PHI',
    position: 'PF,C',
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
    name: 'Coby White',
    team: 'CHI',
    position: 'PG,SG',
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
    name: 'Cole Anthony',
    team: 'ORL',
    position: 'PG',
  },
  {
    name: 'Brandon Miller',
    team: 'CHA',
    position: 'SF',
  },
  {
    name: 'Harrison Barnes',
    team: 'SAC',
    position: 'SF,PF',
  },
  {
    name: 'Keldon Johnson',
    team: 'SA',
    position: 'SG,SF',
  },
  {
    name: 'Deni Avdija',
    team: 'WAS',
    position: 'SF,PF',
  },
  {
    name: 'Jalen Green',
    team: 'HOU',
    position: 'PG,SG',
  },
  {
    name: 'Jaden Ivey',
    team: 'DET',
    position: 'PG,SG',
  },
  {
    name: 'Gary Trent Jr.',
    team: 'TOR',
    position: 'PG,SG',
  },
  {
    name: 'Santi Aldama',
    team: 'MEM',
    position: 'PF,C',
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
    name: 'Kevon Looney',
    team: 'GS',
    position: 'PF,C',
  },
  {
    name: 'Dennis Schröder',
    team: 'TOR',
    position: 'PG',
  },
  {
    name: 'Xavier Tillman Sr.',
    team: 'MEM',
    position: 'PF,C',
  },
  {
    name: 'Collin Sexton',
    team: 'UTA',
    position: 'PG,SG',
  },
  {
    name: 'Malcolm Brogdon',
    team: 'POR',
    position: 'PG,SG',
  },
  {
    name: 'Jae Crowder',
    team: 'MIL',
    position: 'SF,PF',
  },
  {
    name: 'Jalen Suggs',
    team: 'ORL',
    position: 'PG,SG',
  },
  {
    name: 'Shaedon Sharpe',
    team: 'POR',
    position: 'SG,SF',
  },
  {
    name: 'Quentin Grimes',
    team: 'NY',
    position: 'SG,SF',
  },
  {
    name: 'Brandon Clarke',
    team: 'MEM',
    position: 'PF,C',
  },
  {
    name: 'Nicolas Batum',
    team: 'LAC',
    position: 'SF,PF',
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
    name: 'Jalen Johnson',
    team: 'ATL',
    position: 'SF,PF',
  },
  {
    name: 'Nick Richards',
    team: 'CHA',
    position: 'C',
  },
  {
    name: 'Bennedict Mathurin',
    team: 'IND',
    position: 'SG,SF',
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
    name: 'Corey Kispert',
    team: 'WAS',
    position: 'SG,SF',
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
    name: 'Luke Kennard',
    team: 'MEM',
    position: 'PG,SG',
  },
  {
    name: 'Gary Payton II',
    team: 'GS',
    position: 'PG,SG,SF',
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
    name: 'Gordon Hayward',
    team: 'CHA',
    position: 'SF',
  },
  {
    name: 'Caris LeVert',
    team: 'CLE',
    position: 'SG,SF',
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
    name: 'Terance Mann',
    team: 'LAC',
    position: 'SG,SF',
  },
  {
    name: 'Maxi Kleber',
    team: 'DAL',
    position: 'PF,C',
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
    name: 'Dillon Brooks',
    team: 'HOU',
    position: 'SG,SF',
  },
  {
    name: 'Jose Alvarado',
    team: 'NO',
    position: 'PG',
  },
  {
    name: 'RJ Barrett',
    team: 'NY',
    position: 'SG,SF',
  },
  {
    name: 'Kevin Porter Jr.',
    team: 'HOU',
    position: 'PG,SG',
  },
  {
    name: 'Andrew Nembhard',
    team: 'IND',
    position: 'PG,SG',
  },
  {
    name: 'Ausar Thompson',
    team: 'DET',
    position: 'SG,SF',
  },
  {
    name: 'Cody Martin',
    team: 'CHA',
    position: 'SG,SF',
  },
  {
    name: 'Grayson Allen',
    team: 'PHO',
    position: 'SG,SF',
  },
  {
    name: 'James Wiseman',
    team: 'DET',
    position: 'C',
  },
  {
    name: 'Mason Plumlee',
    team: 'LAC',
    position: 'C',
  },
  {
    name: 'Eric Gordon',
    team: 'PHO',
    position: 'SG,SF',
  },
  {
    name: 'Gary Harris',
    team: 'ORL',
    position: 'SG,SF',
  },
  {
    name: 'Charles Bassey',
    team: 'SA',
    position: 'C',
  },
  {
    name: 'Jonathan Isaac',
    team: 'ORL',
    position: 'SF,PF',
  },
  {
    name: 'Drew Eubanks',
    team: 'PHO',
    position: 'C',
  },
  {
    name: 'Bones Hyland',
    team: 'LAC',
    position: 'PG,SG',
  },
  {
    name: 'Chris Boucher',
    team: 'TOR',
    position: 'PF',
  },
  {
    name: 'Christian Braun',
    team: 'DEN',
    position: 'SG',
  },
  {
    name: 'Tim Hardaway Jr.',
    team: 'DAL',
    position: 'SG,SF',
  },
  {
    name: 'Kelly Oubre Jr.',
    team: 'PHI',
    position: 'SF',
  },
  {
    name: 'Dorian Finney-Smith',
    team: 'BKN',
    position: 'SF,PF',
  },
  {
    name: 'Julian Champagnie',
    team: 'SA',
    position: 'SF,PF',
  },
  {
    name: 'Isaiah Joe',
    team: 'OKC',
    position: 'PG,SG',
  },
  {
    name: 'Jonathan Kuminga',
    team: 'GS',
    position: 'PF',
  },
  {
    name: 'Josh Okogie',
    team: 'PHO',
    position: 'SG,SF',
  },
  {
    name: 'Max Christie',
    team: 'LAL',
    position: 'SG,SF',
  },
  {
    name: 'Jarace Walker',
    team: 'IND',
    position: 'PF',
  },
  {
    name: 'Kevin Love',
    team: 'MIA',
    position: 'PF,C',
  },
  {
    name: 'Talen Horton-Tucker',
    team: 'UTA',
    position: 'SG,SF',
  },
  {
    name: 'Moritz Wagner',
    team: 'ORL',
    position: 'C',
  },
  {
    name: 'Rui Hachimura',
    team: 'LAL',
    position: 'SF,PF',
  },
  {
    name: 'Marcus Morris Sr.',
    team: 'LAC',
    position: 'PF,C',
  },
  {
    name: 'Kenrich Williams',
    team: 'OKC',
    position: 'SF,PF',
  },
  {
    name: 'Keita Bates-Diop',
    team: 'PHO',
    position: 'SF,PF',
  },
  {
    name: 'Dominick Barlow',
    team: 'SA',
    position: 'SF',
  },
  {
    name: 'Anthony Black',
    team: 'ORL',
    position: 'PG,SG',
  },
  {
    name: 'Jaden Hardy',
    team: 'DAL',
    position: 'PG,SG',
  },
  {
    name: 'Christian Wood',
    team: 'LAL',
    position: 'PF,C',
  },
  {
    name: 'Taylor Hendricks',
    team: 'UTA',
    position: 'PF',
  },
  {
    name: 'Sam Hauser',
    team: 'BOS',
    position: 'SF,PF',
  },
  {
    name: 'Nassir Little',
    team: 'PHO',
    position: 'SF,PF',
  },
  {
    name: 'Keyonte George',
    team: 'UTA',
    position: 'SG',
  },
  {
    name: 'Aleksej Pokusevski',
    team: 'OKC',
    position: 'PF,C',
  },
  {
    name: 'AJ Griffin',
    team: 'ATL',
    position: 'SG,SF',
  },
  {
    name: 'Thomas Bryant',
    team: 'MIA',
    position: 'C',
  },
  {
    name: 'Jaden Springer',
    team: 'PHI',
    position: 'PG,SG',
  },
  {
    name: 'Ricky Rubio',
    team: 'CLE',
    position: 'PG,SG',
  },
  {
    name: 'Jalen McDaniels',
    team: 'TOR',
    position: 'SF,PF',
  },
  {
    name: 'Dario Saric',
    team: 'GS',
    position: 'PF,C',
  },
  {
    name: 'Jordan Goodwin',
    team: 'PHO',
    position: 'PG',
  },
  {
    name: 'Andre Drummond',
    team: 'CHI',
    position: 'C',
  },
  {
    name: 'Kenyon Martin Jr.',
    team: 'LAC',
    position: 'SF',
  },
  {
    name: 'Bilal Coulibaly',
    team: 'WAS',
    position: 'SF',
  },
  {
    name: 'John Konchar',
    team: 'MEM',
    position: 'SG,SF',
  },
  {
    name: 'Gradey Dick',
    team: 'TOR',
    position: 'SG',
  },
  {
    name: 'Ziaire Williams',
    team: 'MEM',
    position: 'SF',
  },
  {
    name: 'MarJon Beauchamp',
    team: 'MIL',
    position: 'SG,SF',
  },
  {
    name: 'Cam Reddish',
    team: 'LAL',
    position: 'SF,PF',
  },
  {
    name: 'Damion Lee',
    team: 'PHO',
    position: 'SG,SF',
  },
  {
    name: 'P.J. Tucker',
    team: 'PHI',
    position: 'SF',
  },
  {
    name: 'Malaki Branham',
    team: 'SA',
    position: 'PG,SG,SF',
  },
  {
    name: 'Nickeil Alexander-Walker',
    team: 'MIN',
    position: 'SG,SF',
  },
  {
    name: 'Jaylin Williams',
    team: 'OKC',
    position: 'PF,C',
  },
  {
    name: 'Reggie Jackson',
    team: 'DEN',
    position: 'PG',
  },
  {
    name: 'Chuma Okeke',
    team: 'ORL',
    position: 'SF,PF',
  },
  {
    name: 'Jett Howard',
    team: 'ORL',
    position: 'SG,SF',
  },
  {
    name: 'Seth Curry',
    team: 'DAL',
    position: 'PG,SG',
  },
  {
    name: 'Naji Marshall',
    team: 'NO',
    position: 'SG,SF',
  },
  {
    name: 'Cameron Payne',
    team: 'SA',
    position: 'PG',
  },
  {
    name: 'Taurean Prince',
    team: 'LAL',
    position: 'SF,PF',
  },
  {
    name: 'Troy Brown Jr.',
    team: 'MIN',
    position: 'SF,PF',
  },
  {
    name: 'Monte Morris',
    team: 'DET',
    position: 'PG',
  },
  {
    name: 'Cam Thomas',
    team: 'BKN',
    position: 'SG,SF',
  },
  {
    name: 'Leonard Miller',
    team: 'MIN',
    position: 'SF',
  },
  {
    name: 'Shake Milton',
    team: 'MIN',
    position: 'PG,SG',
  },
  {
    name: 'Isaiah Livers',
    team: 'DET',
    position: 'SF,PF',
  },
  {
    name: 'Orlando Robinson',
    team: 'MIA',
    position: 'C',
  },
  {
    name: 'Isaac Okoro',
    team: 'CLE',
    position: 'SG,SF',
  },
  {
    name: 'Ochai Agbaji',
    team: 'UTA',
    position: 'PG,SG',
  },
  {
    name: 'Aaron Nesmith',
    team: 'IND',
    position: 'SF,PF',
  },
  {
    name: 'Cason Wallace',
    team: 'OKC',
    position: 'SG',
  },
  {
    name: 'Georges Niang',
    team: 'CLE',
    position: 'PF',
  },
  {
    name: 'Trey Lyles',
    team: 'SAC',
    position: 'PF,C',
  },
  {
    name: 'Alec Burks',
    team: 'DET',
    position: 'PG,SG,SF',
  },
  {
    name: 'T.J. McConnell',
    team: 'IND',
    position: 'PG',
  },
  {
    name: 'Torrey Craig',
    team: 'CHI',
    position: 'SF,PF',
  },
  {
    name: 'Jordan Hawkins',
    team: 'NO',
    position: 'SG',
  },
  {
    name: "Jae'Sean Tate",
    team: 'HOU',
    position: 'SF,PF',
  },
  {
    name: 'Chris Duarte',
    team: 'SAC',
    position: 'SF',
  },
  {
    name: 'Danilo Gallinari',
    team: 'WAS',
    position: 'SF',
  },
  {
    name: 'Dyson Daniels',
    team: 'NO',
    position: 'PG,SG',
  },
  {
    name: 'Nikola Jovic',
    team: 'MIA',
    position: 'PF,C',
  },
  {
    name: 'Jalen Smith',
    team: 'IND',
    position: 'PF,C',
  },
  {
    name: 'Payton Pritchard',
    team: 'BOS',
    position: 'PG,SG',
  },
  {
    name: 'Jock Landale',
    team: 'HOU',
    position: 'C',
  },
  {
    name: 'Dwight Powell',
    team: 'DAL',
    position: 'C',
  },
  {
    name: 'Josh Minott',
    team: 'MIN',
    position: 'SF,PF',
  },
  {
    name: 'Joe Ingles',
    team: 'ORL',
    position: 'SF,PF',
  },
  {
    name: 'Danny Green',
    team: 'PHI',
    position: 'SG',
  },
  {
    name: 'Christian Koloko',
    team: 'TOR',
    position: 'C',
  },
]

export default hashtagRank
