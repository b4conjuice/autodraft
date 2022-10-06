const espnRank = [
  {
    name: 'Nikola Jokic',
    team: 'Den',
    position: ['C'],
  },
  {
    name: 'Giannis Antetokounmpo',
    team: 'Mil',
    position: ['PF', 'C'],
  },
  {
    name: 'Luka Doncic',
    team: 'Dal',
    position: ['PG', 'SG'],
  },
  {
    name: 'LaMelo Ball',
    team: 'Cha',
    position: ['PG'],
  },
  {
    name: 'Joel Embiid',
    team: 'Phi',
    position: ['C'],
  },
  {
    name: 'Jayson Tatum',
    team: 'Bos',
    position: ['SF', 'PF'],
  },
  {
    name: 'Ja Morant',
    team: 'Mem',
    position: ['PG'],
  },
  {
    name: 'Tyrese Haliburton',
    team: 'Ind',
    position: ['PG', 'SG'],
  },
  {
    name: 'Trae Young',
    team: 'Atl',
    position: ['PG'],
  },
  {
    name: 'Karl-Anthony Towns',
    team: 'Min',
    position: ['C'],
  },
  {
    name: 'LeBron James',
    team: 'LAL',
    position: ['SF', 'PG', 'PF'],
  },
  {
    name: 'Damian Lillard',
    team: 'Por',
    position: ['PG'],
  },
  {
    name: 'James Harden',
    team: 'Phi',
    position: ['SG', 'PG'],
  },
  {
    name: 'Pascal Siakam',
    team: 'Tor',
    position: ['PF', 'C'],
  },
  {
    name: 'Kevin Durant',
    team: 'Bkn',
    position: ['SF', 'PF'],
  },
  {
    name: 'Devin Booker',
    team: 'Phx',
    position: ['SG', 'PG'],
  },
  {
    name: 'Cade Cunningham',
    team: 'Det',
    position: ['PG', 'SG'],
  },
  {
    name: 'Nikola Vucevic',
    team: 'Chi',
    position: ['C'],
  },
  {
    name: 'DeMar DeRozan',
    team: 'Chi',
    position: ['SF', 'SG'],
  },
  {
    name: 'Domantas Sabonis',
    team: 'Sac',
    position: ['PF', 'C'],
  },
  {
    name: 'Rudy Gobert',
    team: 'Min',
    position: ['C'],
  },
  {
    name: 'Stephen Curry',
    team: 'GS',
    position: ['PG'],
  },
  {
    name: 'Dejounte Murray',
    team: 'Atl',
    position: ['PG', 'SG'],
  },
  {
    name: 'Jalen Brunson',
    team: 'NY',
    position: ['PG', 'SG'],
  },
  {
    name: 'Paul George',
    team: 'LAC',
    position: ['SF', 'SG'],
  },
  {
    name: 'Anthony Davis',
    team: 'LAL',
    position: ['PF', 'C'],
  },
  {
    name: 'Julius Randle',
    team: 'NY',
    position: ['PF'],
  },
  {
    name: 'Bam Adebayo',
    team: 'Mia',
    position: ['C', 'PF'],
  },
  {
    name: 'Anthony Edwards',
    team: 'Min',
    position: ['SG', 'SF'],
  },
  {
    name: 'Jrue Holiday',
    team: 'Mil',
    position: ['PG', 'SG'],
  },
  {
    name: 'Zion Williamson',
    team: 'NO',
    position: ['PF'],
  },
  {
    name: 'Scottie Barnes',
    team: 'Tor',
    position: ['PF', 'SF'],
  },
  {
    name: 'Darius Garland',
    team: 'Cle',
    position: ['PG', 'SG'],
  },
  {
    name: 'Kyrie Irving',
    team: 'Bkn',
    position: ['PG', 'SG'],
  },
  {
    name: 'Fred VanVleet',
    team: 'Tor',
    position: ['PG', 'SG'],
  },
  {
    name: 'Kawhi Leonard',
    team: 'LAC',
    position: ['SF', 'PF'],
  },
  {
    name: 'Evan Mobley',
    team: 'Cle',
    position: ['PF', 'C'],
  },
  {
    name: 'Shai Gilgeous-Alexander',
    team: 'OKC',
    position: ['SG', 'PG'],
  },
  {
    name: "De'Aaron Fox",
    team: 'Sac',
    position: ['PG'],
  },
  {
    name: 'CJ McCollum',
    team: 'NO',
    position: ['SG'],
  },
  {
    name: 'Desmond Bane',
    team: 'Mem',
    position: ['SG'],
  },
  {
    name: 'Alperen Sengun',
    team: 'Hou',
    position: ['C'],
  },
  {
    name: 'Terry Rozier',
    team: 'Cha',
    position: ['SG', 'PG'],
  },
  {
    name: 'Brandon Ingram',
    team: 'NO',
    position: ['SF', 'PF'],
  },
  {
    name: 'Jakob Poeltl',
    team: 'SA',
    position: ['C'],
  },
  {
    name: 'Jimmy Butler',
    team: 'Mia',
    position: ['SF', 'SG'],
  },
  {
    name: 'Jaylen Brown',
    team: 'Bos',
    position: ['SG', 'SF'],
  },
  {
    name: 'Bradley Beal',
    team: 'Wsh',
    position: ['SG'],
  },
  {
    name: 'Zach LaVine',
    team: 'Chi',
    position: ['SG', 'SF'],
  },
  {
    name: 'Donovan Mitchell',
    team: 'Cle',
    position: ['SG', 'PG'],
  },
  {
    name: 'Jonas Valanciunas',
    team: 'NO',
    position: ['C'],
  },
  {
    name: 'Deandre Ayton',
    team: 'Phx',
    position: ['C'],
  },
  {
    name: 'Jamal Murray',
    team: 'Den',
    position: ['PG'],
  },
  {
    name: 'Paolo Banchero',
    team: 'Orl',
    position: ['PF'],
  },
  {
    name: 'Kristaps Porzingis',
    team: 'Wsh',
    position: ['C', 'PF'],
  },
  {
    name: 'Kevin Porter Jr.',
    team: 'Hou',
    position: ['SG', 'PG'],
  },
  {
    name: 'Josh Giddey',
    team: 'OKC',
    position: ['PG', 'SG'],
  },
  {
    name: 'Collin Sexton',
    team: 'Utah',
    position: ['SG', 'PG'],
  },
  {
    name: 'Chris Paul',
    team: 'Phx',
    position: ['PG'],
  },
  {
    name: 'Khris Middleton',
    team: 'Mil',
    position: ['SF'],
  },
  {
    name: "D'Angelo Russell",
    team: 'Min',
    position: ['PG', 'SG'],
  },
  {
    name: 'Ben Simmons',
    team: 'Bkn',
    position: ['PG'],
  },
  {
    name: 'Russell Westbrook',
    team: 'LAL',
    position: ['PG'],
  },
  {
    name: 'Buddy Hield',
    team: 'Ind',
    position: ['SG', 'SF'],
  },
  {
    name: 'Jalen Green',
    team: 'Hou',
    position: ['SG'],
  },
  {
    name: 'Andrew Wiggins',
    team: 'GS',
    position: ['SF', 'PF'],
  },
  {
    name: 'Keegan Murray',
    team: 'Sac',
    position: ['PF'],
  },
  {
    name: 'Kyle Kuzma',
    team: 'Wsh',
    position: ['PF', 'SF'],
  },
  {
    name: 'Saddiq Bey',
    team: 'Det',
    position: ['SF', 'PF'],
  },
  {
    name: 'Lauri Markkanen',
    team: 'Utah',
    position: ['PF', 'SF'],
  },
  {
    name: 'Tyrese Maxey',
    team: 'Phi',
    position: ['SG', 'PG'],
  },
  {
    name: 'Jarrett Allen',
    team: 'Cle',
    position: ['C'],
  },
  {
    name: 'Devin Vassell',
    team: 'SA',
    position: ['SF', 'SG'],
  },
  {
    name: 'Myles Turner',
    team: 'Ind',
    position: ['C', 'PF'],
  },
  {
    name: 'Tyler Herro',
    team: 'Mia',
    position: ['SG', 'PG'],
  },
  {
    name: 'Spencer Dinwiddie',
    team: 'Dal',
    position: ['SG', 'PG'],
  },
  {
    name: 'Jusuf Nurkic',
    team: 'Por',
    position: ['C'],
  },
  {
    name: 'Bobby Portis',
    team: 'Mil',
    position: ['PF', 'C'],
  },
  {
    name: 'Keldon Johnson',
    team: 'SA',
    position: ['SF', 'PF'],
  },
  {
    name: 'Franz Wagner',
    team: 'Orl',
    position: ['SF', 'PF'],
  },
  {
    name: 'Jordan Poole',
    team: 'GS',
    position: ['SG', 'PG'],
  },
  {
    name: 'Michael Porter Jr.',
    team: 'Den',
    position: ['SF'],
  },
  {
    name: 'Christian Wood',
    team: 'Dal',
    position: ['C', 'PF'],
  },
  {
    name: 'John Collins',
    team: 'Atl',
    position: ['PF', 'C'],
  },
  {
    name: 'Jalen Suggs',
    team: 'Orl',
    position: ['PG', 'SG'],
  },
  {
    name: 'Mikal Bridges',
    team: 'Phx',
    position: ['SF'],
  },
  {
    name: 'Malcolm Brogdon',
    team: 'Bos',
    position: ['PG', 'SG'],
  },
  {
    name: 'Klay Thompson',
    team: 'GS',
    position: ['SG'],
  },
  {
    name: 'Tobias Harris',
    team: 'Phi',
    position: ['SF', 'PF'],
  },
  {
    name: 'Josh Hart',
    team: 'Por',
    position: ['SG', 'SF'],
  },
  {
    name: 'Tre Jones',
    team: 'SA',
    position: ['PG'],
  },
  {
    name: 'OG Anunoby',
    team: 'Tor',
    position: ['SF'],
  },
  {
    name: 'Brandon Clarke',
    team: 'Mem',
    position: ['PF', 'C'],
  },
  {
    name: 'Anfernee Simons',
    team: 'Por',
    position: ['SG', 'PG'],
  },
  {
    name: 'Mitchell Robinson',
    team: 'NY',
    position: ['C'],
  },
  {
    name: 'Clint Capela',
    team: 'Atl',
    position: ['C'],
  },
  {
    name: 'Gary Trent Jr.',
    team: 'Tor',
    position: ['SG'],
  },
  {
    name: 'Chris Boucher',
    team: 'Tor',
    position: ['PF', 'C'],
  },
  {
    name: 'RJ Barrett',
    team: 'NY',
    position: ['SF'],
  },
  {
    name: 'P.J. Washington',
    team: 'Cha',
    position: ['PF', 'C'],
  },
  {
    name: 'Monte Morris',
    team: 'Wsh',
    position: ['PG'],
  },
  {
    name: 'Mike Conley',
    team: 'Utah',
    position: ['PG'],
  },
  {
    name: 'Wendell Carter Jr.',
    team: 'Orl',
    position: ['C', 'PF'],
  },
  {
    name: 'Draymond Green',
    team: 'GS',
    position: ['PF'],
  },
  {
    name: 'Robert Williams III',
    team: 'Bos',
    position: ['C', 'PF'],
  },
  {
    name: 'Kelly Oubre Jr.',
    team: 'Cha',
    position: ['PF', 'SG'],
  },
  {
    name: 'Jaden Ivey',
    team: 'Det',
    position: ['PG'],
  },
  {
    name: 'Malik Beasley',
    team: 'Utah',
    position: ['SG'],
  },
  {
    name: 'Jalen Smith',
    team: 'Ind',
    position: ['PF'],
  },
  {
    name: 'Ivica Zubac',
    team: 'LAC',
    position: ['C'],
  },
  {
    name: 'Montrezl Harrell',
    team: 'Phi',
    position: ['C', 'PF'],
  },
  {
    name: 'Marcus Smart',
    team: 'Bos',
    position: ['SG', 'PG'],
  },
  {
    name: 'Dillon Brooks',
    team: 'Mem',
    position: ['SG', 'SF'],
  },
  {
    name: 'Kevin Huerter',
    team: 'Sac',
    position: ['SG'],
  },
  {
    name: 'Jerami Grant',
    team: 'Por',
    position: ['PF', 'SF'],
  },
  {
    name: 'Kyle Lowry',
    team: 'Mia',
    position: ['PG'],
  },
  {
    name: 'Andre Drummond',
    team: 'Chi',
    position: ['C'],
  },
  {
    name: 'Dennis Schroder',
    team: 'LAL',
    position: ['PG'],
  },
  {
    name: 'Gordon Hayward',
    team: 'Cha',
    position: ['SF'],
  },
  {
    name: 'Harrison Barnes',
    team: 'Sac',
    position: ['SF', 'PF'],
  },
  {
    name: 'Herbert Jones',
    team: 'NO',
    position: ['PF', 'SF'],
  },
  {
    name: 'Jordan Clarkson',
    team: 'Utah',
    position: ['SG'],
  },
  {
    name: 'Jonathan Isaac',
    team: 'Orl',
    position: ['PF', 'SF'],
  },
  {
    name: 'Derrick White',
    team: 'Bos',
    position: ['PG', 'SG'],
  },
  {
    name: 'Bogdan Bogdanovic',
    team: 'Atl',
    position: ['SG', 'SF'],
  },
  {
    name: 'Steven Adams',
    team: 'Mem',
    position: ['C'],
  },
  {
    name: 'Nic Claxton',
    team: 'Bkn',
    position: ['C', 'PF'],
  },
  {
    name: 'Jabari Smith Jr.',
    team: 'Hou',
    position: ['PF'],
  },
  {
    name: 'Cole Anthony',
    team: 'Orl',
    position: ['PG'],
  },
  {
    name: 'John Wall',
    team: 'LAC',
    position: ['PG'],
  },
  {
    name: 'Bones Hyland',
    team: 'Den',
    position: ['PG'],
  },
  {
    name: 'Aaron Gordon',
    team: 'Den',
    position: ['PF'],
  },
  {
    name: 'Luguentz Dort',
    team: 'OKC',
    position: ['SG', 'SF'],
  },
  {
    name: 'T.J. McConnell',
    team: 'Ind',
    position: ['PG'],
  },
  {
    name: 'Al Horford',
    team: 'Bos',
    position: ['C', 'PF'],
  },
  {
    name: 'Onyeka Okongwu',
    team: 'Atl',
    position: ['C'],
  },
  {
    name: 'Dorian Finney-Smith',
    team: 'Dal',
    position: ['SF', 'PF'],
  },
  {
    name: 'Mason Plumlee',
    team: 'Cha',
    position: ['C'],
  },
  {
    name: 'Will Barton',
    team: 'Wsh',
    position: ['SF', 'SG'],
  },
  {
    name: 'Chris Duarte',
    team: 'Ind',
    position: ['SG'],
  },
  {
    name: 'Kelly Olynyk',
    team: 'Utah',
    position: ['C', 'PF'],
  },
  {
    name: 'Caris LeVert',
    team: 'Cle',
    position: ['SG', 'SF'],
  },
  {
    name: 'Bojan Bogdanovic',
    team: 'Det',
    position: ['PF'],
  },
  {
    name: "Jae'Sean Tate",
    team: 'Hou',
    position: ['SF', 'PF'],
  },
  {
    name: 'Lonzo Ball',
    team: 'Chi',
    position: ['PG'],
  },
  {
    name: 'Marvin Bagley III',
    team: 'Det',
    position: ['PF'],
  },
  {
    name: 'Jose Alvarado',
    team: 'NO',
    position: ['PG'],
  },
  {
    name: 'Kyle Anderson',
    team: 'Min',
    position: ['SF', 'PF'],
  },
  {
    name: 'Aleksej Pokusevski',
    team: 'OKC',
    position: ['PF'],
  },
  {
    name: 'Cameron Payne',
    team: 'Phx',
    position: ['PG'],
  },
  {
    name: 'Norman Powell',
    team: 'LAC',
    position: ['SG', 'SF'],
  },
  {
    name: 'Robert Covington',
    team: 'LAC',
    position: ['PF', 'SF'],
  },
  {
    name: 'Kevin Love',
    team: 'Cle',
    position: ['PF'],
  },
  {
    name: 'Tari Eason',
    team: 'Hou',
    position: ['SF'],
  },
  {
    name: 'Brook Lopez',
    team: 'Mil',
    position: ['C'],
  },
  {
    name: 'Terance Mann',
    team: 'LAC',
    position: ['SF', 'SG'],
  },
  {
    name: 'Mo Bamba',
    team: 'Orl',
    position: ['C'],
  },
  {
    name: 'Darius Bazley',
    team: 'OKC',
    position: ['SF', 'PF'],
  },
  {
    name: 'Isaiah Jackson',
    team: 'Ind',
    position: ['PF', 'C'],
  },
  {
    name: 'Jae Crowder',
    team: 'Phx',
    position: ['PF', 'SF'],
  },
  {
    name: 'Seth Curry',
    team: 'Bkn',
    position: ['SG', 'PG'],
  },
  {
    name: 'Kentavious Caldwell-Pope',
    team: 'Den',
    position: ['SG', 'SF'],
  },
  {
    name: 'Coby White',
    team: 'Chi',
    position: ['PG'],
  },
  {
    name: 'Jaden McDaniels',
    team: 'Min',
    position: ['SF'],
  },
  {
    name: 'Victor Oladipo',
    team: 'Mia',
    position: ['SG'],
  },
  {
    name: 'Goran Dragic',
    team: 'Chi',
    position: ['PG'],
  },
  {
    name: "Devonte' Graham",
    team: 'NO',
    position: ['PG'],
  },
  {
    name: 'Jonathan Kuminga',
    team: 'GS',
    position: ['PF', 'SF'],
  },
  {
    name: 'Deni Avdija',
    team: 'Wsh',
    position: ['SF', 'PF'],
  },
  {
    name: 'Rui Hachimura',
    team: 'Wsh',
    position: ['PF', 'SF'],
  },
  {
    name: 'Tyus Jones',
    team: 'Mem',
    position: ['PG'],
  },
  {
    name: 'Evan Fournier',
    team: 'NY',
    position: ['SG', 'SF'],
  },
  {
    name: 'Tim Hardaway Jr.',
    team: 'Dal',
    position: ['SG', 'SF'],
  },
  {
    name: 'Bruce Brown',
    team: 'Den',
    position: ['SG'],
  },
  {
    name: 'Reggie Jackson',
    team: 'LAC',
    position: ['PG'],
  },
  {
    name: 'Isaiah Stewart',
    team: 'Det',
    position: ['C', 'PF'],
  },
  {
    name: 'Patrick Beverley',
    team: 'LAL',
    position: ['PG'],
  },
  {
    name: 'Cameron Johnson',
    team: 'Phx',
    position: ['SF', 'PF'],
  },
  {
    name: 'Talen Horton-Tucker',
    team: 'Utah',
    position: ['SG', 'SF'],
  },
  {
    name: 'Killian Hayes',
    team: 'Det',
    position: ['PG'],
  },
  {
    name: 'Delon Wright',
    team: 'Wsh',
    position: ['SG', 'PF'],
  },
  {
    name: 'Nickeil Alexander-Walker',
    team: 'Utah',
    position: ['SG'],
  },
  {
    name: 'Obi Toppin',
    team: 'NY',
    position: ['PF'],
  },
  {
    name: 'Daniel Gafford',
    team: 'Wsh',
    position: ['C', 'PF'],
  },
  {
    name: 'Markelle Fultz',
    team: 'Orl',
    position: ['PG'],
  },
  {
    name: 'Kendrick Nunn',
    team: 'LAL',
    position: ['SG'],
  },
  {
    name: 'Richaun Holmes',
    team: 'Sac',
    position: ['C', 'PF'],
  },
  {
    name: "De'Anthony Melton",
    team: 'Phi',
    position: ['PG', 'SG'],
  },
  {
    name: 'Nicolas Batum',
    team: 'LAC',
    position: ['SF', 'SG'],
  },
  {
    name: "Royce O'Neale",
    team: 'Bkn',
    position: ['SF', 'PF'],
  },
  {
    name: 'Walker Kessler',
    team: 'Utah',
    position: ['C'],
  },
  {
    name: 'Kevon Looney',
    team: 'GS',
    position: ['C', 'PF'],
  },
  {
    name: 'Danilo Gallinari',
    team: 'Bos',
    position: ['PF', 'SF'],
  },
  {
    name: 'Marcus Morris Sr.',
    team: 'LAC',
    position: ['PF', 'SF'],
  },
  {
    name: "De'Andre Hunter",
    team: 'Atl',
    position: ['SF', 'PF'],
  },
  {
    name: 'Bennedict Mathurin',
    team: 'Ind',
    position: ['SF'],
  },
  {
    name: 'Duncan Robinson',
    team: 'Mia',
    position: ['SG', 'SF'],
  },
  {
    name: 'James Wiseman',
    team: 'GS',
    position: ['C'],
  },
  {
    name: 'Carmelo Anthony',
    team: 'LAL',
    position: ['PF', 'SF'],
  },
  {
    name: 'Otto Porter Jr.',
    team: 'Tor',
    position: ['SF'],
  },
  {
    name: 'Jeremiah Robinson-Earl',
    team: 'OKC',
    position: ['PF', 'C'],
  },
  {
    name: 'Doug McDermott',
    team: 'SA',
    position: ['SF'],
  },
  {
    name: 'Thaddeus Young',
    team: 'Tor',
    position: ['PF'],
  },
  {
    name: 'Alex Caruso',
    team: 'Chi',
    position: ['PG', 'SG'],
  },
  {
    name: 'Precious Achiuwa',
    team: 'Tor',
    position: ['PF', 'C'],
  },
  {
    name: 'Grayson Allen',
    team: 'Mil',
    position: ['SG'],
  },
  {
    name: 'Larry Nance Jr.',
    team: 'NO',
    position: ['PF'],
  },
  {
    name: 'Luke Kennard',
    team: 'LAC',
    position: ['SG'],
  },
  {
    name: 'Cam Reddish',
    team: 'NY',
    position: ['SF', 'SG'],
  },
  {
    name: 'Justin Holiday',
    team: 'Atl',
    position: ['SG', 'SF'],
  },
  {
    name: 'Joe Harris',
    team: 'Bkn',
    position: ['SG', 'SF'],
  },
  {
    name: 'Isaiah Hartenstein',
    team: 'NY',
    position: ['C', 'PF'],
  },
  {
    name: 'Eric Bledsoe',
    team: 'Por',
    position: ['PG', 'SG'],
  },
  {
    name: 'Mark Williams',
    team: 'Cha',
    position: ['C'],
  },
  {
    name: 'Patrick Williams',
    team: 'Chi',
    position: ['PF', 'SF'],
  },
  {
    name: 'Ochai Agbaji',
    team: 'Utah',
    position: ['SF'],
  },
  {
    name: 'Jaren Jackson Jr.',
    team: 'Mem',
    position: ['PF', 'C'],
  },
  {
    name: 'JaVale McGee',
    team: 'Dal',
    position: ['C'],
  },
  {
    name: 'DeMarcus Cousins',
    team: 'Den',
    position: ['C'],
  },
  {
    name: 'Pat Connaughton',
    team: 'Mil',
    position: ['SG', 'SF'],
  },
  {
    name: 'Hassan Whiteside',
    team: 'Utah',
    position: ['C'],
  },
  {
    name: 'Naz Reid',
    team: 'Min',
    position: ['C'],
  },
  {
    name: 'Trendon Watford',
    team: 'Por',
    position: ['PF'],
  },
  {
    name: 'Josh Christopher',
    team: 'Hou',
    position: ['SG'],
  },
  {
    name: 'Jaxson Hayes',
    team: 'NO',
    position: ['C', 'PF'],
  },
  {
    name: 'Alec Burks',
    team: 'Det',
    position: ['SG'],
  },
  {
    name: 'Maxi Kleber',
    team: 'Dal',
    position: ['PF'],
  },
  {
    name: 'Max Strus',
    team: 'Mia',
    position: ['SG'],
  },
  {
    name: 'Dwight Powell',
    team: 'Dal',
    position: ['C'],
  },
  {
    name: 'Isaiah Roby',
    team: 'SA',
    position: ['PF', 'C'],
  },
  {
    name: 'T.J. Warren',
    team: 'Bkn',
    position: ['SF'],
  },
  {
    name: 'Usman Garuba',
    team: 'Hou',
    position: ['PF'],
  },
  {
    name: 'Zach Collins',
    team: 'SA',
    position: ['C'],
  },
  {
    name: 'Cody Martin',
    team: 'Cha',
    position: ['SF'],
  },
  {
    name: 'Thomas Bryant',
    team: 'LAL',
    position: ['C'],
  },
  {
    name: 'Cory Joseph',
    team: 'Det',
    position: ['PG'],
  },
  {
    name: 'Terence Davis',
    team: 'Sac',
    position: ['SG'],
  },
  {
    name: 'Kenyon Martin Jr.',
    team: 'Hou',
    position: ['SF'],
  },
  {
    name: 'D.J. Wilson',
    team: 'Tor',
    position: ['PF'],
  },
  {
    name: 'Josh Richardson',
    team: 'SA',
    position: ['SG', 'SF'],
  },
  {
    name: 'Hamidou Diallo',
    team: 'Det',
    position: ['SG'],
  },
  {
    name: 'Chuma Okeke',
    team: 'Orl',
    position: ['PF'],
  },
  {
    name: 'Jeff Green',
    team: 'Den',
    position: ['PF'],
  },
  {
    name: 'Nerlens Noel',
    team: 'Det',
    position: ['C'],
  },
  {
    name: 'Derrick Rose',
    team: 'NY',
    position: ['PG'],
  },
  {
    name: 'Donte DiVincenzo',
    team: 'GS',
    position: ['SG', 'PG'],
  },
  {
    name: 'LaMarcus Aldridge',
    team: 'Bkn',
    position: ['PF', 'C'],
  },
  {
    name: 'Jalen Williams',
    team: 'OKC',
    position: ['SG'],
  },
  {
    name: 'Matisse Thybulle',
    team: 'Phi',
    position: ['SF', 'SG'],
  },
  {
    name: 'Patty Mills',
    team: 'Bkn',
    position: ['PG'],
  },
  {
    name: 'Kenrich Williams',
    team: 'OKC',
    position: ['SF'],
  },
  {
    name: 'James Bouknight',
    team: 'Cha',
    position: ['SG'],
  },
  {
    name: 'Malaki Branham',
    team: 'SA',
    position: ['SG'],
  },
  {
    name: 'Lonnie Walker IV',
    team: 'LAL',
    position: ['SF', 'SG'],
  },
  {
    name: 'Serge Ibaka',
    team: 'Mil',
    position: ['C', 'PF'],
  },
  {
    name: 'Dennis Smith Jr.',
    team: 'Cha',
    position: ['PG'],
  },
  {
    name: 'Justise Winslow',
    team: 'Por',
    position: ['SF'],
  },
  {
    name: 'P.J. Tucker',
    team: 'Phi',
    position: ['PF', 'SF'],
  },
  {
    name: 'Miles Bridges',
    team: 'Cha',
    position: ['PF', 'SF'],
  },
  {
    name: 'Willy Hernangomez',
    team: 'NO',
    position: ['C'],
  },
  {
    name: 'Blake Griffin',
    team: 'Bos',
    position: ['PF', 'C'],
  },
  {
    name: 'Isaac Okoro',
    team: 'Cle',
    position: ['SF', 'SG'],
  },
  {
    name: 'Dario Saric',
    team: 'Phx',
    position: ['PF'],
  },
  {
    name: 'Reggie Bullock',
    team: 'Dal',
    position: ['SF', 'SG'],
  },
  {
    name: 'Jalen Duren',
    team: 'Det',
    position: ['C'],
  },
  {
    name: 'Eric Gordon',
    team: 'Hou',
    position: ['SG', 'SF'],
  },
  {
    name: 'Nemanja Bjelica',
    team: 'GS',
    position: ['C', 'PF'],
  },
  {
    name: 'Danny Green',
    team: 'Mem',
    position: ['SG', 'SF'],
  },
  {
    name: 'John Konchar',
    team: 'Mem',
    position: ['SG'],
  },
  {
    name: 'Ricky Rubio',
    team: 'Cle',
    position: ['PG'],
  },
  {
    name: 'Shake Milton',
    team: 'Phi',
    position: ['PG'],
  },
  {
    name: 'Rajon Rondo',
    team: 'Cle',
    position: ['PG'],
  },
  {
    name: 'Quentin Grimes',
    team: 'NY',
    position: ['SG'],
  },
  {
    name: 'MarJon Beauchamp',
    team: 'Mil',
    position: ['SG'],
  },
  {
    name: 'Jeremy Lamb',
    team: 'Sac',
    position: ['SG', 'SF'],
  },
  {
    name: 'Omer Yurtseven',
    team: 'Mia',
    position: ['C'],
  },
  {
    name: 'JaMychal Green',
    team: 'GS',
    position: ['PF'],
  },
  {
    name: 'Oshae Brissett',
    team: 'Ind',
    position: ['PF'],
  },
  {
    name: 'Johnny Davis',
    team: 'Wsh',
    position: ['SG'],
  },
  {
    name: 'Taurean Prince',
    team: 'Min',
    position: ['SF'],
  },
  {
    name: 'Xavier Tillman',
    team: 'Mem',
    position: ['PF'],
  },
  {
    name: 'Rudy Gay',
    team: 'Utah',
    position: ['PF'],
  },
  {
    name: 'Joe Ingles',
    team: 'Mil',
    position: ['SF'],
  },
  {
    name: 'Davis Bertans',
    team: 'Dal',
    position: ['PF'],
  },
  {
    name: 'Ish Smith',
    team: 'Den',
    position: ['PG'],
  },
  {
    name: 'Cedi Osman',
    team: 'Cle',
    position: ['SF'],
  },
  {
    name: 'Saben Lee',
    team: 'Utah',
    position: ['PG'],
  },
  {
    name: 'Raul Neto',
    team: 'Cle',
    position: ['PG'],
  },
  {
    name: 'Aron Baynes',
    team: 'Tor',
    position: ['C'],
  },
  {
    name: 'Terrence Ross',
    team: 'Orl',
    position: ['SG', 'SF'],
  },
  {
    name: 'Khem Birch',
    team: 'Tor',
    position: ['C'],
  },
  {
    name: 'Kemba Walker',
    team: 'Det',
    position: ['PG'],
  },
  {
    name: 'Derrick Favors',
    team: 'Hou',
    position: ['C', 'PF'],
  },
  {
    name: 'Gary Harris',
    team: 'Orl',
    position: ['SG'],
  },
  {
    name: 'Caleb Martin',
    team: 'Mia',
    position: ['SG', 'SF'],
  },
  {
    name: 'Moritz Wagner',
    team: 'Orl',
    position: ['C', 'PF'],
  },
  {
    name: 'Dyson Daniels',
    team: 'NO',
    position: ['PG'],
  },
  {
    name: 'Aaron Holiday',
    team: 'Atl',
    position: ['PG'],
  },
  {
    name: 'Daniel Theis',
    team: 'Ind',
    position: ['C', 'PF'],
  },
  {
    name: 'Joshua Primo',
    team: 'SA',
    position: ['SG'],
  },
  {
    name: 'Bismack Biyombo',
    team: 'Phx',
    position: ['C'],
  },
  {
    name: 'Jeremy Sochan',
    team: 'SA',
    position: ['PF'],
  },
  {
    name: 'Landry Shamet',
    team: 'Phx',
    position: ['SG'],
  },
  {
    name: 'George Hill',
    team: 'Mil',
    position: ['PG', 'SG'],
  },
  {
    name: 'P.J. Dozier',
    team: 'Min',
    position: ['PG'],
  },
  {
    name: 'DeAndre Jordan',
    team: 'Den',
    position: ['C'],
  },
  {
    name: 'Ziaire Williams',
    team: 'Mem',
    position: ['SG'],
  },
  {
    name: 'Mike Muscala',
    team: 'OKC',
    position: ['C'],
  },
  {
    name: 'Frank Kaminsky',
    team: 'Atl',
    position: ['C'],
  },
  {
    name: 'Bryn Forbes',
    team: 'Min',
    position: ['SG'],
  },
  {
    name: 'Jalen McDaniels',
    team: 'Cha',
    position: ['PF'],
  },
  {
    name: 'Michael Carter-Williams',
    team: 'Orl',
    position: ['PG'],
  },
  {
    name: 'James Johnson',
    team: 'Ind',
    position: ['PF'],
  },
  {
    name: 'Damion Lee',
    team: 'Phx',
    position: ['SF', 'SG'],
  },
  {
    name: 'Gabe Vincent',
    team: 'Mia',
    position: ['PG'],
  },
  {
    name: 'Garrett Temple',
    team: 'NO',
    position: ['SG'],
  },
  {
    name: 'Jaylen Nowell',
    team: 'Min',
    position: ['SG'],
  },
  {
    name: 'Robin Lopez',
    team: 'Cle',
    position: ['C'],
  },
  {
    name: 'Dwight Howard',
    team: 'LAL',
    position: ['C'],
  },
  {
    name: 'Josh Jackson',
    team: 'Tor',
    position: ['SF', 'SG'],
  },
  {
    name: 'Furkan Korkmaz',
    team: 'Phi',
    position: ['SG'],
  },
  {
    name: 'Kira Lewis Jr.',
    team: 'NO',
    position: ['PG'],
  },
  {
    name: 'Austin Rivers',
    team: 'Min',
    position: ['SG'],
  },
  {
    name: 'Damian Jones',
    team: 'LAL',
    position: ['C'],
  },
  {
    name: 'Lou Williams',
    team: 'Atl',
    position: ['SG'],
  },
  {
    name: 'Maurice Harkless',
    team: 'Hou',
    position: ['SF'],
  },
  {
    name: 'Garrison Mathews',
    team: 'Hou',
    position: ['SG', 'SF'],
  },
  {
    name: 'Jordan McLaughlin',
    team: 'Min',
    position: ['PG'],
  },
  {
    name: 'Trevor Ariza',
    team: 'LAL',
    position: ['SF'],
  },
  {
    name: 'Georges Niang',
    team: 'Phi',
    position: ['PF'],
  },
  {
    name: 'Edmond Sumner',
    team: 'Bkn',
    position: ['SG'],
  },
  {
    name: 'Tristan Thompson',
    team: 'Chi',
    position: ['PF', 'C'],
  },
  {
    name: 'Paul Millsap',
    team: 'Phi',
    position: ['PF'],
  },
  {
    name: 'Danuel House Jr.',
    team: 'Phi',
    position: ['SF', 'SG'],
  },
  {
    name: 'Torrey Craig',
    team: 'Phx',
    position: ['SF', 'PF'],
  },
  {
    name: 'David Nwaba',
    team: 'OKC',
    position: ['SG', 'SF'],
  },
  {
    name: 'D.J. Augustin',
    team: 'LAL',
    position: ['PG'],
  },
  {
    name: 'Juan Toscano-Anderson',
    team: 'LAL',
    position: ['PF'],
  },
  {
    name: 'Al-Farouq Aminu',
    team: 'Bos',
    position: ['PF'],
  },
  {
    name: 'Gorgui Dieng',
    team: 'SA',
    position: ['C', 'PF'],
  },
  {
    name: 'R.J. Hampton',
    team: 'Orl',
    position: ['PG'],
  },
  {
    name: 'Elfrid Payton',
    team: 'Phx',
    position: ['PG'],
  },
  {
    name: 'Wayne Ellington',
    team: 'LAL',
    position: ['SG'],
  },
  {
    name: 'Tomas Satoransky',
    team: 'Wsh',
    position: ['PG', 'SG'],
  },
  {
    name: 'Andre Iguodala',
    team: 'GS',
    position: ['SF', 'SG'],
  },
  {
    name: 'Enes Freedom',
    team: 'Bos',
    position: ['C'],
  },
  {
    name: 'Dewayne Dedmon',
    team: 'Mia',
    position: ['C'],
  },
  {
    name: 'Chet Holmgren',
    team: 'OKC',
    position: ['PF'],
  },
  {
    name: 'Davion Mitchell',
    team: 'Sac',
    position: ['PG'],
  },
  {
    name: 'Jarred Vanderbilt',
    team: 'Utah',
    position: ['PF'],
  },
  {
    name: 'Malik Monk',
    team: 'Sac',
    position: ['SG', 'SF'],
  },
  {
    name: 'Gary Payton II',
    team: 'Por',
    position: ['PG'],
  },
  {
    name: 'Ayo Dosunmu',
    team: 'Chi',
    position: ['SG', 'PG'],
  },
  {
    name: 'Immanuel Quickley',
    team: 'NY',
    position: ['PG'],
  },
  {
    name: 'Shaedon Sharpe',
    team: 'Por',
    position: ['SG'],
  },
  {
    name: 'Tacko Fall',
    team: 'Cle',
    position: ['C'],
  },
  {
    name: 'Nikola Jovic',
    team: 'Mia',
    position: ['SF'],
  },
  {
    name: 'Grant Williams',
    team: 'Bos',
    position: ['PF'],
  },
  {
    name: 'Bol Bol',
    team: 'Orl',
    position: ['C'],
  },
  {
    name: 'Moses Moody',
    team: 'GS',
    position: ['SG'],
  },
  {
    name: 'Thanasis Antetokounmpo',
    team: 'Mil',
    position: ['SF'],
  },
  {
    name: 'Boban Marjanovic',
    team: 'Hou',
    position: ['C'],
  },
  {
    name: 'Austin Reaves',
    team: 'LAL',
    position: ['SG'],
  },
  {
    name: 'Jaylen Hoard',
    team: 'OKC',
    position: ['SF'],
  },
  {
    name: 'Tre Mann',
    team: 'OKC',
    position: ['PG'],
  },
  {
    name: 'Nassir Little',
    team: 'Por',
    position: ['SF', 'PF'],
  },
  {
    name: 'Cam Thomas',
    team: 'Bkn',
    position: ['SG'],
  },
  {
    name: 'Kostas Antetokounmpo',
    team: 'Chi',
    position: ['PF'],
  },
  {
    name: 'TyTy Washington Jr.',
    team: 'Hou',
    position: ['PG'],
  },
  {
    name: 'AJ Griffin',
    team: 'Atl',
    position: ['SF'],
  },
  {
    name: 'Juancho Hernangomez',
    team: 'Tor',
    position: ['PF'],
  },
  {
    name: 'Jaden Hardy',
    team: 'Dal',
    position: ['SG'],
  },
  {
    name: 'Payton Pritchard',
    team: 'Bos',
    position: ['PG'],
  },
  {
    name: 'Trey Murphy III',
    team: 'NO',
    position: ['SG'],
  },
  {
    name: 'Santi Aldama',
    team: 'Mem',
    position: ['PF'],
  },
  {
    name: 'Christian Braun',
    team: 'Den',
    position: ['SG'],
  },
  {
    name: 'Ousmane Dieng',
    team: 'OKC',
    position: ['SF'],
  },
  {
    name: 'Dalen Terry',
    team: 'Chi',
    position: ['PG'],
  },
  {
    name: 'Jake LaRavia',
    team: 'Mem',
    position: ['PF'],
  },
  {
    name: 'Isaiah Thomas',
    team: 'Cha',
    position: ['PG'],
  },
  {
    name: 'Jared Butler',
    team: 'Utah',
    position: ['SG'],
  },
  {
    name: 'Patrick Baldwin Jr.',
    team: 'GS',
    position: ['SF'],
  },
  {
    name: 'Jaylin Williams',
    team: 'OKC',
    position: ['C'],
  },
  {
    name: 'Jalen Johnson',
    team: 'Atl',
    position: ['SF'],
  },
  {
    name: 'Corey Kispert',
    team: 'Wsh',
    position: ['SF'],
  },
  {
    name: 'Mac McClung',
    team: 'GS',
    position: ['SG'],
  },
  {
    name: 'Blake Wesley',
    team: 'SA',
    position: ['SG'],
  },
  {
    name: 'Christian Koloko',
    team: 'Tor',
    position: ['C'],
  },
  {
    name: 'Aaron Wiggins',
    team: 'OKC',
    position: ['SG'],
  },
  {
    name: 'Peyton Watson',
    team: 'Den',
    position: ['SF'],
  },
  {
    name: 'Drew Eubanks',
    team: 'Por',
    position: ['PF'],
  },
  {
    name: 'JD Davison',
    team: 'Bos',
    position: ['PG'],
  },
  {
    name: 'Kennedy Chandler',
    team: 'Mem',
    position: ['PG'],
  },
  {
    name: 'Isaiah Mobley',
    team: 'Cle',
    position: ['PF'],
  },
  {
    name: 'Wendell Moore Jr.',
    team: 'Min',
    position: ['SF'],
  },
  {
    name: 'Malachi Flynn',
    team: 'Tor',
    position: ['PG'],
  },
  {
    name: 'Udonis Haslem',
    team: 'Mia',
    position: ['PF'],
  },
  {
    name: 'Javonte Green',
    team: 'Chi',
    position: ['SG', 'SF'],
  },
  {
    name: 'Sam Merrill',
    team: 'Sac',
    position: ['SG'],
  },
  {
    name: 'Goga Bitadze',
    team: 'Ind',
    position: ['C'],
  },
  {
    name: 'Udoka Azubuike',
    team: 'Utah',
    position: ['C'],
  },
  {
    name: "Day'Ron Sharpe",
    team: 'Bkn',
    position: ['C'],
  },
  {
    name: 'David Roddy',
    team: 'Mem',
    position: ['PF'],
  },
  {
    name: 'Jordan Nwora',
    team: 'Mil',
    position: ['SF'],
  },
  {
    name: 'Keon Johnson',
    team: 'Por',
    position: ['SG'],
  },
  {
    name: 'Kai Jones',
    team: 'Cha',
    position: ['PF'],
  },
  {
    name: 'Quinndary Weatherspoon',
    team: 'GS',
    position: ['SG'],
  },
  {
    name: 'Brandon Boston Jr.',
    team: 'LAC',
    position: ['SG'],
  },
  {
    name: 'Isaiah Livers',
    team: 'Det',
    position: ['PF'],
  },
  {
    name: 'Ian Clark',
    team: 'NO',
    position: ['SG'],
  },
  {
    name: 'Eric Mika',
    team: 'Sac',
    position: ['C'],
  },
  {
    name: 'Facundo Campazzo',
    team: 'Den',
    position: ['PG'],
  },
  {
    name: 'Dean Wade',
    team: 'Cle',
    position: ['PF'],
  },
  {
    name: 'Trey Lyles',
    team: 'Sac',
    position: ['PF'],
  },
  {
    name: 'Paul Reed',
    team: 'Phi',
    position: ['PF'],
  },
  {
    name: 'Josh Green',
    team: 'Dal',
    position: ['SG'],
  },
  {
    name: 'Terry Taylor',
    team: 'Ind',
    position: ['SG'],
  },
  {
    name: 'Amir Coffey',
    team: 'LAC',
    position: ['SG'],
  },
  {
    name: 'Stanley Johnson',
    team: 'Utah',
    position: ['SF'],
  },
  {
    name: 'Chimezie Metu',
    team: 'Sac',
    position: ['C'],
  },
  {
    name: 'Sandro Mamukelashvili',
    team: 'Mil',
    position: ['C'],
  },
  {
    name: 'Dalano Banton',
    team: 'Tor',
    position: ['PG'],
  },
  {
    name: 'Moses Brown',
    team: 'LAC',
    position: ['C'],
  },
  {
    name: 'Luka Garza',
    team: 'Min',
    position: ['C'],
  },
  {
    name: 'Derrick Jones Jr.',
    team: 'Chi',
    position: ['SF'],
  },
  {
    name: 'Zhou Qi',
    team: 'Hou',
    position: ['C'],
  },
  {
    name: 'Sam Hauser',
    team: 'Bos',
    position: ['SF'],
  },
  {
    name: 'Josh Minott',
    team: 'Min',
    position: ['PF'],
  },
  {
    name: 'Sharife Cooper',
    team: 'Cle',
    position: ['PG'],
  },
  {
    name: 'Max Christie',
    team: 'LAL',
    position: ['SG'],
  },
  {
    name: 'Aaron Nesmith',
    team: 'Ind',
    position: ['SF'],
  },
  {
    name: 'Zeke Nnaji',
    team: 'Den',
    position: ['PF'],
  },
  {
    name: 'Bryce McGowens',
    team: 'Cha',
    position: ['SG'],
  },
  {
    name: 'Lance Stephenson',
    team: 'Ind',
    position: ['SF'],
  },
  {
    name: 'Luke Kornet',
    team: 'Bos',
    position: ['C'],
  },
  {
    name: 'Isaac Bonga',
    team: 'Tor',
    position: ['SF'],
  },
  {
    name: 'Miles McBride',
    team: 'NY',
    position: ['PG'],
  },
  {
    name: 'Eric Paschall',
    team: 'Min',
    position: ['PF'],
  },
  {
    name: 'Marc Gasol',
    team: 'LAL',
    position: ['C'],
  },
  {
    name: 'Markieff Morris',
    team: 'Bkn',
    position: ['PF'],
  },
  {
    name: 'Yuta Watanabe',
    team: 'Bkn',
    position: ['SF'],
  },
  {
    name: 'Jabari Walker',
    team: 'Por',
    position: ['PF'],
  },
  {
    name: 'JT Thor',
    team: 'Cha',
    position: ['PF'],
  },
  {
    name: 'Kevin Knox II',
    team: 'Det',
    position: ['SF'],
  },
  {
    name: 'Neemias Queta',
    team: 'Sac',
    position: ['C'],
  },
  {
    name: 'E.J. Liddell',
    team: 'NO',
    position: ['PF'],
  },
  {
    name: 'Wenyen Gabriel',
    team: 'LAL',
    position: ['SF'],
  },
  {
    name: 'Frank Ntilikina',
    team: 'Dal',
    position: ['PG'],
  },
  {
    name: 'Jericho Sims',
    team: 'NY',
    position: ['PF'],
  },
  {
    name: 'Theo Maledon',
    team: 'Hou',
    position: ['PG'],
  },
  {
    name: 'Gui Santos',
    team: 'GS',
    position: ['SF'],
  },
  {
    name: 'Kent Bazemore',
    team: 'Sac',
    position: ['SG', 'SF'],
  },
  {
    name: 'Willie Reed',
    team: 'Chi',
    position: ['C'],
  },
  {
    name: 'Kessler Edwards',
    team: 'Bkn',
    position: ['SF'],
  },
  {
    name: 'Wesley Matthews',
    team: 'Mil',
    position: ['SF'],
  },
  {
    name: 'Zavier Simpson',
    team: 'Orl',
    position: ['PG'],
  },
  {
    name: 'Jock Landale',
    team: 'Phx',
    position: ['C'],
  },
  {
    name: 'Michael Cobbins',
    team: 'OKC',
    position: ['PF'],
  },
  {
    name: 'Caleb Houstan',
    team: 'Orl',
    position: ['SF'],
  },
  {
    name: 'Sekou Doumbouya',
    team: 'LAL',
    position: ['PF'],
  },
  {
    name: 'Brandon Williams',
    team: 'Por',
    position: ['PG'],
  },
  {
    name: 'Trevor Keels',
    team: 'NY',
    position: ['SG'],
  },
  {
    name: 'Andrew Nembhard',
    team: 'Ind',
    position: ['PG'],
  },
  {
    name: 'JJ Redick',
    team: 'Dal',
    position: ['SG'],
  },
  {
    name: 'Jabari Parker',
    team: 'Bos',
    position: ['PF'],
  },
  {
    name: 'Matthew Dellavedova',
    team: 'Sac',
    position: ['PG'],
  },
  {
    name: 'Jahlil Okafor',
    team: 'Atl',
    position: ['C'],
  },
  {
    name: 'Troy Brown Jr.',
    team: 'LAL',
    position: ['SF'],
  },
  {
    name: 'Mfiondu Kabengele',
    team: 'Bos',
    position: ['PF'],
  },
  {
    name: 'Jaden Springer',
    team: 'Phi',
    position: ['PG'],
  },
  {
    name: 'Trey Burke',
    team: 'OKC',
    position: ['PG'],
  },
  {
    name: 'Lamar Stevens',
    team: 'Cle',
    position: ['PF'],
  },
  {
    name: 'Tony Snell',
    team: 'NO',
    position: ['SG'],
  },
  {
    name: 'Jevon Carter',
    team: 'Mil',
    position: ['PG'],
  },
  {
    name: 'Cody Zeller',
    team: 'Utah',
    position: ['C'],
  },
  {
    name: 'Joe Johnson',
    team: 'Bos',
    position: ['SG'],
  },
  {
    name: 'Thon Maker',
    team: 'Cle',
    position: ['C'],
  },
  {
    name: 'Phil Pressey',
    team: 'GS',
    position: ['PG'],
  },
  {
    name: 'Avery Bradley',
    team: 'LAL',
    position: ['SG'],
  },
  {
    name: 'Dwayne Bacon',
    team: 'LAL',
    position: ['SG'],
  },
  {
    name: 'Josh Okogie',
    team: 'Phx',
    position: ['SG', 'SF'],
  },
  {
    name: 'Meyers Leonard',
    team: 'OKC',
    position: ['C'],
  },
  {
    name: 'Keifer Sykes',
    team: 'Ind',
    position: ['SG'],
  },
  {
    name: 'Taj Gibson',
    team: 'Wsh',
    position: ['PF'],
  },
  {
    name: 'Leandro Bolmaro',
    team: 'Utah',
    position: ['SG'],
  },
  {
    name: 'Ben McLemore',
    team: 'Por',
    position: ['SG'],
  },
  {
    name: 'Joe Wieskamp',
    team: 'SA',
    position: ['SF'],
  },
  {
    name: 'Tyrese Martin',
    team: 'Atl',
    position: ['SF'],
  },
  {
    name: 'Tony Bradley',
    team: 'Chi',
    position: ['C'],
  },
  {
    name: 'C.J. Miles',
    team: 'Bos',
    position: ['SF'],
  },
  {
    name: 'Jason Preston',
    team: 'LAC',
    position: ['PG'],
  },
  {
    name: 'Charles Bassey',
    team: 'Phi',
    position: ['C'],
  },
  {
    name: 'Cassius Winston',
    team: 'Wsh',
    position: ['PG'],
  },
  {
    name: 'Noah Vonleh',
    team: 'Bos',
    position: ['PF'],
  },
  {
    name: 'Jabari Brown',
    team: 'Mil',
    position: ['SG'],
  },
  {
    name: 'Carsen Edwards',
    team: 'Det',
    position: ['PG'],
  },
  {
    name: 'Chris Johnson',
    team: 'Hou',
    position: ['SF'],
  },
  {
    name: 'Sim Bhullar',
    team: 'Sac',
    position: ['C'],
  },
  {
    name: 'Chris Chiozza',
    team: 'Bkn',
    position: ['PG'],
  },
  {
    name: 'Kyle Guy',
    team: 'Mia',
    position: ['SG'],
  },
].flat()

const getPosition = name => espnRank.find(p => p.name === name)?.position

export default espnRank
export { getPosition }
