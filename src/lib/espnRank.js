const espnRank = [
  [
    {
      name: 'Nikola Jokic',
      team: 'Den',
      position: ['C'],
    },
    {
      name: 'Karl-Anthony Towns',
      team: 'Min',
      position: ['C'],
    },
    {
      name: 'Trae Young',
      team: 'Atl',
      position: ['PG'],
    },
    {
      name: 'Joel Embiid',
      team: 'Phi',
      position: ['C'],
    },
    {
      name: 'Stephen Curry',
      team: 'GS',
      position: ['PG'],
    },
    {
      name: 'Jayson Tatum',
      team: 'Bos',
      position: ['PF', 'SF'],
    },
    {
      name: 'Giannis Antetokounmpo',
      team: 'Mil',
      position: ['PF', 'C'],
    },
    {
      name: 'LeBron James',
      team: 'LAL',
      position: ['SF', 'PG', 'PF'],
    },
    {
      name: 'LaMelo Ball',
      team: 'Cha',
      position: ['PG'],
    },
    {
      name: 'James Harden',
      team: 'Phi',
      position: ['SG', 'PG'],
    },
    {
      name: 'Dejounte Murray',
      team: 'SA',
      position: ['PG', 'SG'],
    },
    {
      name: 'Tyrese Haliburton',
      team: 'Ind',
      position: ['PG', 'SG'],
    },
    {
      name: 'DeMar DeRozan',
      team: 'Chi',
      position: ['SG', 'SF'],
    },
    {
      name: 'Kevin Durant',
      team: 'Bkn',
      position: ['SF', 'PF'],
    },
    {
      name: 'Miles Bridges',
      team: 'Cha',
      position: ['SF', 'PF'],
    },
    {
      name: 'Devin Booker',
      team: 'Phx',
      position: ['SG', 'PG'],
    },
    {
      name: 'Jaren Jackson Jr.',
      team: 'Mem',
      position: ['PF', 'C'],
    },
    {
      name: 'Donovan Mitchell',
      team: 'Utah',
      position: ['SG', 'PG'],
    },
    {
      name: 'Jonas Valanciunas',
      team: 'NO',
      position: ['C'],
    },
    {
      name: 'Robert Williams III',
      team: 'Bos',
      position: ['C', 'PF'],
    },
    {
      name: 'Chris Paul',
      team: 'Phx',
      position: ['PG'],
    },
    {
      name: 'Rudy Gobert',
      team: 'Utah',
      position: ['C'],
    },
    {
      name: 'Fred VanVleet',
      team: 'Tor',
      position: ['SG', 'PG'],
    },
    {
      name: 'Darius Garland',
      team: 'Cle',
      position: ['PG', 'SG'],
    },
    {
      name: 'Luka Doncic',
      team: 'Dal',
      position: ['PG', 'SG'],
    },
    {
      name: 'Nikola Vucevic',
      team: 'Chi',
      position: ['C'],
    },
    {
      name: 'Desmond Bane',
      team: 'Mem',
      position: ['SG', 'SF'],
    },
    {
      name: 'Domantas Sabonis',
      team: 'Sac',
      position: ['PF', 'C'],
    },
    {
      name: 'Zach LaVine',
      team: 'Chi',
      position: ['SG', 'SF'],
    },
    {
      name: 'Jrue Holiday',
      team: 'Mil',
      position: ['PG', 'SG'],
    },
    {
      name: 'Terry Rozier',
      team: 'Cha',
      position: ['PG', 'SG'],
    },
    {
      name: 'Khris Middleton',
      team: 'Mil',
      position: ['SF', 'SG'],
    },
    {
      name: 'Mikal Bridges',
      team: 'Phx',
      position: ['SF'],
    },
    {
      name: 'Anthony Edwards',
      team: 'Min',
      position: ['SG', 'SF'],
    },
    {
      name: 'Jordan Poole',
      team: 'GS',
      position: ['SG', 'PG'],
    },
    {
      name: 'Jimmy Butler',
      team: 'Mia',
      position: ['SF', 'SG'],
    },
    {
      name: 'Pascal Siakam',
      team: 'Tor',
      position: ['PF', 'C'],
    },
    {
      name: 'Shai Gilgeous-Alexander',
      team: 'OKC',
      position: ['SG', 'PG'],
    },
    {
      name: 'Jarrett Allen',
      team: 'Cle',
      position: ['C'],
    },
    {
      name: 'Ja Morant',
      team: 'Mem',
      position: ['PG'],
    },
    {
      name: 'Franz Wagner',
      team: 'Orl',
      position: ['SF', 'PF'],
    },
    {
      name: 'Julius Randle',
      team: 'NY',
      position: ['PF'],
    },
    {
      name: 'Tyrese Maxey',
      team: 'Phi',
      position: ['SG', 'PG'],
    },
    {
      name: 'Jalen Brunson',
      team: 'Dal',
      position: ['PG', 'SG'],
    },
    {
      name: 'Derrick White',
      team: 'Bos',
      position: ['PG', 'SG'],
    },
    {
      name: 'Herbert Jones',
      team: 'NO',
      position: ['SF', 'PF'],
    },
    {
      name: 'Tobias Harris',
      team: 'Phi',
      position: ['SF', 'PF'],
    },
    {
      name: 'Al Horford',
      team: 'Bos',
      position: ['C', 'PF'],
    },
    {
      name: 'Scottie Barnes',
      team: 'Tor',
      position: ['PF', 'SF'],
    },
    {
      name: 'Harrison Barnes',
      team: 'Sac',
      position: ['SF', 'PF'],
    },
  ],
  [
    {
      name: 'Evan Mobley',
      team: 'Cle',
      position: ['PF', 'C'],
    },
    {
      name: 'Mo Bamba',
      team: 'Orl',
      position: ['C'],
    },
    {
      name: 'Deandre Ayton',
      team: 'Phx',
      position: ['C'],
    },
    {
      name: 'Buddy Hield',
      team: 'Ind',
      position: ['SG', 'SF'],
    },
    {
      name: 'Kyle Lowry',
      team: 'Mia',
      position: ['PG'],
    },
    {
      name: "D'Angelo Russell",
      team: 'Min',
      position: ['PG', 'SG'],
    },
    {
      name: 'Bam Adebayo',
      team: 'Mia',
      position: ['C', 'PF'],
    },
    {
      name: 'Cade Cunningham',
      team: 'Det',
      position: ['PG', 'SG'],
    },
    {
      name: 'Kyle Kuzma',
      team: 'Wsh',
      position: ['PF', 'SF'],
    },
    {
      name: 'Bobby Portis',
      team: 'Mil',
      position: ['PF', 'C'],
    },
    {
      name: 'Mike Conley',
      team: 'Utah',
      position: ['PG'],
    },
    {
      name: 'Christian Wood',
      team: 'Hou',
      position: ['C', 'PF'],
    },
    {
      name: 'Robert Covington',
      team: 'LAC',
      position: ['PF', 'SF'],
    },
    {
      name: 'Jaylen Brown',
      team: 'Bos',
      position: ['SG', 'SF'],
    },
    {
      name: 'Saddiq Bey',
      team: 'Det',
      position: ['SF'],
    },
    {
      name: 'Kristaps Porzingis',
      team: 'Wsh',
      position: ['C', 'PF'],
    },
    {
      name: 'Tyler Herro',
      team: 'Mia',
      position: ['SG', 'PG'],
    },
    {
      name: 'Marcus Smart',
      team: 'Bos',
      position: ['SG', 'PG'],
    },
    {
      name: 'Ivica Zubac',
      team: 'LAC',
      position: ['C'],
    },
    {
      name: 'Gary Trent Jr.',
      team: 'Tor',
      position: ['SG', 'SF'],
    },
    {
      name: 'Jakob Poeltl',
      team: 'SA',
      position: ['C'],
    },
    {
      name: 'Wendell Carter Jr.',
      team: 'Orl',
      position: ['C', 'PF'],
    },
    {
      name: "De'Aaron Fox",
      team: 'Sac',
      position: ['PG'],
    },
    {
      name: 'John Collins',
      team: 'Atl',
      position: ['PF', 'C'],
    },
    {
      name: 'CJ McCollum',
      team: 'NO',
      position: ['SG'],
    },
    {
      name: "Royce O'Neale",
      team: 'Utah',
      position: ['SF', 'PF'],
    },
    {
      name: 'Russell Westbrook',
      team: 'LAL',
      position: ['PG'],
    },
    {
      name: 'Seth Curry',
      team: 'Bkn',
      position: ['SG', 'PG'],
    },
    {
      name: 'Kentavious Caldwell-Pope',
      team: 'Wsh',
      position: ['SG', 'SF'],
    },
    {
      name: 'Mitchell Robinson',
      team: 'NY',
      position: ['C'],
    },
    {
      name: 'Cole Anthony',
      team: 'Orl',
      position: ['PG'],
    },
    {
      name: 'Monte Morris',
      team: 'Den',
      position: ['PG'],
    },
    {
      name: 'Will Barton',
      team: 'Den',
      position: ['SF', 'SG'],
    },
    {
      name: 'Brandon Ingram',
      team: 'NO',
      position: ['SF', 'PF'],
    },
    {
      name: 'Daniel Gafford',
      team: 'Wsh',
      position: ['C', 'PF'],
    },
    {
      name: 'Aaron Gordon',
      team: 'Den',
      position: ['PF', 'SF'],
    },
    {
      name: 'Alec Burks',
      team: 'NY',
      position: ['SG', 'PG'],
    },
    {
      name: "Jae'Sean Tate",
      team: 'Hou',
      position: ['SF', 'PF'],
    },
    {
      name: 'Dorian Finney-Smith',
      team: 'Dal',
      position: ['SF', 'PF'],
    },
    {
      name: 'Bojan Bogdanovic',
      team: 'Utah',
      position: ['PF', 'SF'],
    },
    {
      name: 'Anthony Davis',
      team: 'LAL',
      position: ['PF', 'C'],
    },
    {
      name: 'Myles Turner',
      team: 'Ind',
      position: ['C', 'PF'],
    },
    {
      name: 'Jordan Clarkson',
      team: 'Utah',
      position: ['SG'],
    },
    {
      name: 'Malik Monk',
      team: 'LAL',
      position: ['SG', 'SF'],
    },
    {
      name: 'Carmelo Anthony',
      team: 'LAL',
      position: ['PF', 'SF'],
    },
    {
      name: 'Jarred Vanderbilt',
      team: 'Min',
      position: ['PF'],
    },
    {
      name: 'Reggie Jackson',
      team: 'LAC',
      position: ['PG'],
    },
    {
      name: 'Josh Hart',
      team: 'Por',
      position: ['SG', 'SF'],
    },
    {
      name: 'Kevin Love',
      team: 'Cle',
      position: ['PF'],
    },
    {
      name: 'Clint Capela',
      team: 'Atl',
      position: ['C'],
    },
  ],
  [
    {
      name: 'Keldon Johnson',
      team: 'SA',
      position: ['SF', 'PF'],
    },
    {
      name: 'Jusuf Nurkic',
      team: 'Por',
      position: ['C'],
    },
    {
      name: 'Andrew Wiggins',
      team: 'GS',
      position: ['SF', 'SG'],
    },
    {
      name: 'Cameron Johnson',
      team: 'Phx',
      position: ['SF', 'PF'],
    },
    {
      name: 'JaVale McGee',
      team: 'Phx',
      position: ['C'],
    },
    {
      name: 'Montrezl Harrell',
      team: 'Cha',
      position: ['C', 'PF'],
    },
    {
      name: 'Anfernee Simons',
      team: 'Por',
      position: ['SG', 'PG'],
    },
    {
      name: 'Terance Mann',
      team: 'LAC',
      position: ['SF', 'SG'],
    },
    {
      name: 'Chris Boucher',
      team: 'Tor',
      position: ['C', 'PF'],
    },
    {
      name: "De'Anthony Melton",
      team: 'Mem',
      position: ['PG', 'SG'],
    },
    {
      name: 'Dennis Schroder',
      team: 'Hou',
      position: ['PG'],
    },
    {
      name: 'Devin Vassell',
      team: 'SA',
      position: ['SG', 'SF'],
    },
    {
      name: 'Dwight Powell',
      team: 'Dal',
      position: ['C'],
    },
    {
      name: 'Evan Fournier',
      team: 'NY',
      position: ['SG', 'SF'],
    },
    {
      name: 'Jerami Grant',
      team: 'Det',
      position: ['SF', 'PF'],
    },
    {
      name: "Devonte' Graham",
      team: 'NO',
      position: ['PG', 'SG'],
    },
    {
      name: 'Grant Williams',
      team: 'Bos',
      position: ['PF'],
    },
    {
      name: 'Matisse Thybulle',
      team: 'Phi',
      position: ['SF', 'SG'],
    },
    {
      name: 'Bogdan Bogdanovic',
      team: 'Atl',
      position: ['SG', 'SF'],
    },
    {
      name: 'Jae Crowder',
      team: 'Phx',
      position: ['PF', 'SF'],
    },
    {
      name: 'Brandon Clarke',
      team: 'Mem',
      position: ['PF', 'C'],
    },
    {
      name: 'Gordon Hayward',
      team: 'Cha',
      position: ['SF'],
    },
    {
      name: 'Isaiah Hartenstein',
      team: 'LAC',
      position: ['PF', 'C'],
    },
    {
      name: 'P.J. Washington',
      team: 'Cha',
      position: ['PF', 'C'],
    },
    {
      name: 'Patty Mills',
      team: 'Bkn',
      position: ['PG'],
    },
    {
      name: 'Lauri Markkanen',
      team: 'Cle',
      position: ['PF', 'SF'],
    },
    {
      name: 'Kevin Huerter',
      team: 'Atl',
      position: ['SG', 'SF'],
    },
    {
      name: 'Jaden McDaniels',
      team: 'Min',
      position: ['SF'],
    },
    {
      name: 'Chuma Okeke',
      team: 'Orl',
      position: ['PF'],
    },
    {
      name: 'Bradley Beal',
      team: 'Wsh',
      position: ['SG'],
    },
    {
      name: 'Isaiah Stewart',
      team: 'Det',
      position: ['C', 'PF'],
    },
    {
      name: 'Darius Bazley',
      team: 'OKC',
      position: ['SF', 'PF'],
    },
    {
      name: 'Steven Adams',
      team: 'Mem',
      position: ['C'],
    },
    {
      name: 'Immanuel Quickley',
      team: 'NY',
      position: ['PG'],
    },
    {
      name: 'Kelly Oubre Jr.',
      team: 'Cha',
      position: ['PF', 'SF'],
    },
    {
      name: 'Bruce Brown',
      team: 'Bkn',
      position: ['SG'],
    },
    {
      name: 'Otto Porter Jr.',
      team: 'GS',
      position: ['SF'],
    },
    {
      name: 'Luke Kennard',
      team: 'LAC',
      position: ['SG'],
    },
    {
      name: 'Josh Giddey',
      team: 'OKC',
      position: ['PG', 'SG'],
    },
    {
      name: 'Kevon Looney',
      team: 'GS',
      position: ['PF', 'C'],
    },
    {
      name: 'Spencer Dinwiddie',
      team: 'Dal',
      position: ['SG', 'PG'],
    },
    {
      name: 'Naz Reid',
      team: 'Min',
      position: ['C'],
    },
    {
      name: 'Ayo Dosunmu',
      team: 'Chi',
      position: ['SG', 'PG'],
    },
    {
      name: 'Jaxson Hayes',
      team: 'NO',
      position: ['C', 'PF'],
    },
    {
      name: 'Deni Avdija',
      team: 'Wsh',
      position: ['SF'],
    },
    {
      name: 'Grayson Allen',
      team: 'Mil',
      position: ['SG'],
    },
    {
      name: 'Alperen Sengun',
      team: 'Hou',
      position: ['C'],
    },
    {
      name: 'Patrick Beverley',
      team: 'Min',
      position: ['PG'],
    },
    {
      name: 'Hassan Whiteside',
      team: 'Utah',
      position: ['C'],
    },
    {
      name: 'Pat Connaughton',
      team: 'Mil',
      position: ['SG', 'SF'],
    },
  ],
  [
    {
      name: 'OG Anunoby',
      team: 'Tor',
      position: ['SF', 'PF'],
    },
    {
      name: 'Justin Holiday',
      team: 'Sac',
      position: ['SG', 'SF'],
    },
    {
      name: 'Jeff Green',
      team: 'Den',
      position: ['PF'],
    },
    {
      name: 'Lonzo Ball',
      team: 'Chi',
      position: ['PG'],
    },
    {
      name: 'Andre Drummond',
      team: 'Bkn',
      position: ['C'],
    },
    {
      name: 'LaMarcus Aldridge',
      team: 'Bkn',
      position: ['PF', 'C'],
    },
    {
      name: 'Tyus Jones',
      team: 'Mem',
      position: ['PG'],
    },
    {
      name: 'P.J. Tucker',
      team: 'Mia',
      position: ['SF', 'PF'],
    },
    {
      name: 'Cody Martin',
      team: 'Cha',
      position: ['SF'],
    },
    {
      name: 'Cory Joseph',
      team: 'Det',
      position: ['PG'],
    },
    {
      name: 'Luguentz Dort',
      team: 'OKC',
      position: ['SG', 'SF'],
    },
    {
      name: 'Duncan Robinson',
      team: 'Mia',
      position: ['SG', 'SF'],
    },
    {
      name: 'Gary Payton II',
      team: 'GS',
      position: ['PG'],
    },
    {
      name: 'Danilo Gallinari',
      team: 'Atl',
      position: ['PF', 'SF'],
    },
    {
      name: 'Jalen Green',
      team: 'Hou',
      position: ['SG'],
    },
    {
      name: 'Richaun Holmes',
      team: 'Sac',
      position: ['C', 'PF'],
    },
    {
      name: 'Trey Lyles',
      team: 'Sac',
      position: ['PF'],
    },
    {
      name: 'Javonte Green',
      team: 'Chi',
      position: ['SG', 'SF'],
    },
    {
      name: 'Malcolm Brogdon',
      team: 'Ind',
      position: ['PG', 'SG'],
    },
    {
      name: 'Gary Harris',
      team: 'Orl',
      position: ['SG'],
    },
    {
      name: 'Malik Beasley',
      team: 'Min',
      position: ['SG', 'SF'],
    },
    {
      name: 'Norman Powell',
      team: 'LAC',
      position: ['SG', 'SF'],
    },
    {
      name: 'Draymond Green',
      team: 'GS',
      position: ['PF'],
    },
    {
      name: 'Eric Gordon',
      team: 'Hou',
      position: ['SG', 'SF'],
    },
    {
      name: 'Caleb Martin',
      team: 'Mia',
      position: ['SG', 'SF'],
    },
    {
      name: 'Delon Wright',
      team: 'Atl',
      position: ['SG', 'PG'],
    },
    {
      name: 'Josh Richardson',
      team: 'SA',
      position: ['SG', 'SF'],
    },
    {
      name: 'Marcus Morris Sr.',
      team: 'LAC',
      position: ['PF', 'SF'],
    },
    {
      name: 'Coby White',
      team: 'Chi',
      position: ['PG'],
    },
    {
      name: 'Nicolas Batum',
      team: 'LAC',
      position: ['SF', 'SG'],
    },
    {
      name: 'Paul George',
      team: 'LAC',
      position: ['SF', 'SG'],
    },
    {
      name: 'RJ Barrett',
      team: 'NY',
      position: ['SF', 'SG'],
    },
    {
      name: 'Chris Duarte',
      team: 'Ind',
      position: ['SG'],
    },
    {
      name: 'Kyrie Irving',
      team: 'Bkn',
      position: ['PG', 'SG'],
    },
    {
      name: 'Caris LeVert',
      team: 'Cle',
      position: ['SG', 'SF'],
    },
    {
      name: 'Gabe Vincent',
      team: 'Mia',
      position: ['PG'],
    },
    {
      name: 'Georges Niang',
      team: 'Phi',
      position: ['PF'],
    },
    {
      name: 'Eric Bledsoe',
      team: 'Por',
      position: ['PG', 'SG'],
    },
    {
      name: 'Damian Lillard',
      team: 'Por',
      position: ['PG'],
    },
    {
      name: 'Dewayne Dedmon',
      team: 'Mia',
      position: ['C'],
    },
    {
      name: 'Bones Hyland',
      team: 'Den',
      position: ['PG'],
    },
    {
      name: 'Kenyon Martin Jr.',
      team: 'Hou',
      position: ['SF'],
    },
    {
      name: 'Torrey Craig',
      team: 'Phx',
      position: ['SF', 'PF'],
    },
    {
      name: 'Kyle Anderson',
      team: 'Mem',
      position: ['SF', 'PF'],
    },
    {
      name: 'Cameron Payne',
      team: 'Phx',
      position: ['PG'],
    },
    {
      name: 'Onyeka Okongwu',
      team: 'Atl',
      position: ['C'],
    },
    {
      name: 'Garrison Mathews',
      team: 'Hou',
      position: ['SG', 'SF'],
    },
    {
      name: 'JaMychal Green',
      team: 'Den',
      position: ['PF'],
    },
    {
      name: 'Isaac Okoro',
      team: 'Cle',
      position: ['SF'],
    },
    {
      name: 'Amir Coffey',
      team: 'LAC',
      position: ['SG'],
    },
  ],
  [
    {
      name: 'Drew Eubanks',
      team: 'Por',
      position: ['PF'],
    },
    {
      name: 'Max Strus',
      team: 'Mia',
      position: ['SG'],
    },
    {
      name: 'Maxi Kleber',
      team: 'Dal',
      position: ['PF'],
    },
    {
      name: 'Corey Kispert',
      team: 'Wsh',
      position: ['SF'],
    },
    {
      name: 'Killian Hayes',
      team: 'Det',
      position: ['PG'],
    },
    {
      name: 'Kevin Porter Jr.',
      team: 'Hou',
      position: ['SG', 'PG'],
    },
    {
      name: 'Chimezie Metu',
      team: 'Sac',
      position: ['C'],
    },
    {
      name: 'Davion Mitchell',
      team: 'Sac',
      position: ['PG'],
    },
    {
      name: 'Lonnie Walker IV',
      team: 'SA',
      position: ['SF', 'SG'],
    },
    {
      name: 'Hamidou Diallo',
      team: 'Det',
      position: ['SG'],
    },
    {
      name: 'Taurean Prince',
      team: 'Min',
      position: ['SF', 'PF'],
    },
    {
      name: 'Facundo Campazzo',
      team: 'Den',
      position: ['PG'],
    },
    {
      name: 'Cam Reddish',
      team: 'NY',
      position: ['SF', 'SG'],
    },
    {
      name: 'Reggie Bullock',
      team: 'Dal',
      position: ['SF', 'SG'],
    },
    {
      name: 'Mason Plumlee',
      team: 'Cha',
      position: ['C'],
    },
    {
      name: 'Obi Toppin',
      team: 'NY',
      position: ['PF'],
    },
    {
      name: 'Ricky Rubio',
      team: 'Ind',
      position: ['PG'],
    },
    {
      name: 'Bryn Forbes',
      team: 'Den',
      position: ['SG', 'PG'],
    },
    {
      name: 'Raul Neto',
      team: 'Wsh',
      position: ['PG'],
    },
    {
      name: 'Aleksej Pokusevski',
      team: 'OKC',
      position: ['PF'],
    },
    {
      name: 'Talen Horton-Tucker',
      team: 'LAL',
      position: ['SG', 'SF'],
    },
    {
      name: 'Alex Caruso',
      team: 'Chi',
      position: ['PG', 'SG'],
    },
    {
      name: 'Nemanja Bjelica',
      team: 'GS',
      position: ['PF'],
    },
    {
      name: 'Josh Christopher',
      team: 'Hou',
      position: ['SG'],
    },
    {
      name: 'Terrence Ross',
      team: 'Orl',
      position: ['SG', 'SF'],
    },
    {
      name: 'John Konchar',
      team: 'Mem',
      position: ['SG'],
    },
    {
      name: 'Danny Green',
      team: 'Phi',
      position: ['SG', 'SF'],
    },
    {
      name: 'Tre Mann',
      team: 'OKC',
      position: ['PG'],
    },
    {
      name: 'Aaron Holiday',
      team: 'Phx',
      position: ['PG', 'SG'],
    },
    {
      name: 'Nickeil Alexander-Walker',
      team: 'Utah',
      position: ['SG'],
    },
    {
      name: 'Nassir Little',
      team: 'Por',
      position: ['SF', 'PF'],
    },
    {
      name: 'Moritz Wagner',
      team: 'Orl',
      position: ['C', 'PF'],
    },
    {
      name: 'Jalen Smith',
      team: 'Ind',
      position: ['PF'],
    },
    {
      name: 'Austin Reaves',
      team: 'LAL',
      position: ['SG'],
    },
    {
      name: 'Damion Lee',
      team: 'GS',
      position: ['SF', 'SG'],
    },
    {
      name: 'Precious Achiuwa',
      team: 'Tor',
      position: ['PF', 'C'],
    },
    {
      name: 'Trendon Watford',
      team: 'Por',
      position: ['PF'],
    },
    {
      name: 'Damian Jones',
      team: 'Sac',
      position: ['C'],
    },
    {
      name: "DeAndre' Bembry",
      team: 'Mil',
      position: ['SF'],
    },
    {
      name: 'Nic Claxton',
      team: 'Bkn',
      position: ['C', 'PF'],
    },
    {
      name: 'Jalen Suggs',
      team: 'Orl',
      position: ['PG', 'SG'],
    },
    {
      name: "De'Andre Hunter",
      team: 'Atl',
      position: ['SF', 'PF'],
    },
    {
      name: 'George Hill',
      team: 'Mil',
      position: ['PG', 'SG'],
    },
    {
      name: 'Klay Thompson',
      team: 'GS',
      position: ['SG'],
    },
    {
      name: 'Oshae Brissett',
      team: 'Ind',
      position: ['PF'],
    },
    {
      name: 'Cedi Osman',
      team: 'Cle',
      position: ['SF'],
    },
    {
      name: 'Jaylen Nowell',
      team: 'Min',
      position: ['SG'],
    },
    {
      name: 'Doug McDermott',
      team: 'SA',
      position: ['SF', 'PF'],
    },
    {
      name: 'Willy Hernangomez',
      team: 'NO',
      position: ['C'],
    },
    {
      name: 'Landry Shamet',
      team: 'Phx',
      position: ['SG'],
    },
  ],
  [
    {
      name: 'Cam Thomas',
      team: 'Bkn',
      position: ['SG'],
    },
    {
      name: 'Serge Ibaka',
      team: 'Mil',
      position: ['C', 'PF'],
    },
    {
      name: 'Avery Bradley',
      team: 'LAL',
      position: ['SG'],
    },
    {
      name: 'Mike Muscala',
      team: 'OKC',
      position: ['C', 'PF'],
    },
    {
      name: 'Furkan Korkmaz',
      team: 'Phi',
      position: ['SG'],
    },
    {
      name: 'Marvin Bagley III',
      team: 'Det',
      position: ['PF'],
    },
    {
      name: 'Tim Hardaway Jr.',
      team: 'Dal',
      position: ['SG', 'SF'],
    },
    {
      name: 'DeMarcus Cousins',
      team: 'Den',
      position: ['C'],
    },
    {
      name: 'Taj Gibson',
      team: 'NY',
      position: ['PF'],
    },
    {
      name: 'Kemba Walker',
      team: 'NY',
      position: ['PG'],
    },
    {
      name: 'Dwight Howard',
      team: 'LAL',
      position: ['C'],
    },
    {
      name: 'Payton Pritchard',
      team: 'Bos',
      position: ['PG'],
    },
    {
      name: 'Larry Nance Jr.',
      team: 'NO',
      position: ['PF'],
    },
    {
      name: 'Isaiah Roby',
      team: 'OKC',
      position: ['PF', 'C'],
    },
    {
      name: 'Tre Jones',
      team: 'SA',
      position: ['PG'],
    },
    {
      name: 'Jose Alvarado',
      team: 'NO',
      position: ['PG'],
    },
    {
      name: 'Derrick Jones Jr.',
      team: 'Chi',
      position: ['SF'],
    },
    {
      name: 'Jonathan Kuminga',
      team: 'GS',
      position: ['SF', 'PF'],
    },
    {
      name: 'Ben McLemore',
      team: 'Por',
      position: ['SG'],
    },
    {
      name: 'Dillon Brooks',
      team: 'Mem',
      position: ['SG', 'SF'],
    },
    {
      name: 'Rudy Gay',
      team: 'Utah',
      position: ['PF'],
    },
    {
      name: 'Austin Rivers',
      team: 'Den',
      position: ['SG'],
    },
    {
      name: 'Jordan Nwora',
      team: 'Mil',
      position: ['SF'],
    },
    {
      name: 'Ish Smith',
      team: 'Wsh',
      position: ['PG'],
    },
    {
      name: 'Joe Ingles',
      team: 'Por',
      position: ['SF', 'SG', 'PF'],
    },
    {
      name: 'James Johnson',
      team: 'Bkn',
      position: ['PF', 'SF'],
    },
    {
      name: 'Josh Green',
      team: 'Dal',
      position: ['SG'],
    },
    {
      name: 'Derrick Rose',
      team: 'NY',
      position: ['PG'],
    },
    {
      name: 'Shake Milton',
      team: 'Phi',
      position: ['PG', 'SG'],
    },
    {
      name: 'Ziaire Williams',
      team: 'Mem',
      position: ['SG'],
    },
    {
      name: 'Blake Griffin',
      team: 'Bkn',
      position: ['PF'],
    },
    {
      name: 'Kenrich Williams',
      team: 'OKC',
      position: ['SF'],
    },
    {
      name: 'Jeremy Lamb',
      team: 'Sac',
      position: ['SG', 'SF'],
    },
    {
      name: 'Kelly Olynyk',
      team: 'Det',
      position: ['C', 'PF'],
    },
    {
      name: 'Garrett Temple',
      team: 'NO',
      position: ['SG', 'SF'],
    },
    {
      name: 'Jordan McLaughlin',
      team: 'Min',
      position: ['PG'],
    },
    {
      name: 'Khem Birch',
      team: 'Tor',
      position: ['C'],
    },
    {
      name: 'Keita Bates-Diop',
      team: 'SA',
      position: ['SF'],
    },
    {
      name: 'Juan Toscano-Anderson',
      team: 'GS',
      position: ['PF', 'SF'],
    },
    {
      name: 'Stanley Johnson',
      team: 'LAL',
      position: ['SF'],
    },
    {
      name: 'Daniel Theis',
      team: 'Bos',
      position: ['C', 'PF'],
    },
    {
      name: 'Aaron Wiggins',
      team: 'OKC',
      position: ['SG'],
    },
    {
      name: 'Jeremiah Robinson-Earl',
      team: 'OKC',
      position: ['PF', 'C'],
    },
    {
      name: 'Goga Bitadze',
      team: 'Ind',
      position: ['C'],
    },
    {
      name: 'Donte DiVincenzo',
      team: 'Sac',
      position: ['SG', 'PG'],
    },
    {
      name: 'Omer Yurtseven',
      team: 'Mia',
      position: ['C'],
    },
    {
      name: 'Frank Jackson',
      team: 'Det',
      position: ['PG'],
    },
    {
      name: 'Thaddeus Young',
      team: 'Tor',
      position: ['PF', 'SF', 'C'],
    },
    {
      name: 'Dean Wade',
      team: 'Cle',
      position: ['PF'],
    },
    {
      name: 'Maurice Harkless',
      team: 'Sac',
      position: ['SF'],
    },
  ],
  [
    {
      name: 'Lou Williams',
      team: 'Atl',
      position: ['SG'],
    },
    {
      name: 'Troy Brown Jr.',
      team: 'Chi',
      position: ['SF'],
    },
    {
      name: 'Lance Stephenson',
      team: 'Ind',
      position: ['SF'],
    },
    {
      name: 'DeAndre Jordan',
      team: 'Phi',
      position: ['C'],
    },
    {
      name: 'Kessler Edwards',
      team: 'Bkn',
      position: ['SF'],
    },
    {
      name: 'T.J. McConnell',
      team: 'Ind',
      position: ['PG'],
    },
    {
      name: 'Jock Landale',
      team: 'SA',
      position: ['C'],
    },
    {
      name: 'Quentin Grimes',
      team: 'NY',
      position: ['SG'],
    },
    {
      name: 'Rui Hachimura',
      team: 'Wsh',
      position: ['PF', 'SF'],
    },
    {
      name: 'Terence Davis',
      team: 'Sac',
      position: ['SG'],
    },
    {
      name: 'Jalen McDaniels',
      team: 'Cha',
      position: ['PF'],
    },
    {
      name: 'D.J. Augustin',
      team: 'LAL',
      position: ['PG'],
    },
    {
      name: 'Tony Bradley',
      team: 'Chi',
      position: ['C'],
    },
    {
      name: 'Nerlens Noel',
      team: 'NY',
      position: ['C'],
    },
    {
      name: 'Jevon Carter',
      team: 'Mil',
      position: ['PG'],
    },
    {
      name: 'Isaiah Jackson',
      team: 'Ind',
      position: ['PF', 'C'],
    },
    {
      name: 'Justise Winslow',
      team: 'Por',
      position: ['SF', 'PF'],
    },
    {
      name: 'Ty Jerome',
      team: 'OKC',
      position: ['PG'],
    },
    {
      name: 'David Nwaba',
      team: 'Hou',
      position: ['SG', 'SF'],
    },
    {
      name: 'CJ Elleby',
      team: 'Por',
      position: ['SG'],
    },
    {
      name: 'Frank Ntilikina',
      team: 'Dal',
      position: ['PG'],
    },
    {
      name: 'Trent Forrest',
      team: 'Utah',
      position: ['SG'],
    },
    {
      name: 'Xavier Tillman',
      team: 'Mem',
      position: ['PF'],
    },
    {
      name: 'Trey Murphy III',
      team: 'NO',
      position: ['SG'],
    },
    {
      name: 'Lamar Stevens',
      team: 'Cle',
      position: ['PF'],
    },
    {
      name: 'Andre Iguodala',
      team: 'GS',
      position: ['SF', 'SG'],
    },
    {
      name: 'R.J. Hampton',
      team: 'Orl',
      position: ['PG'],
    },
    {
      name: 'Armoni Brooks',
      team: 'Tor',
      position: ['PG'],
    },
    {
      name: 'Dennis Smith Jr.',
      team: 'Por',
      position: ['PG'],
    },
    {
      name: 'Alex Len',
      team: 'Sac',
      position: ['C'],
    },
    {
      name: 'Thomas Bryant',
      team: 'Wsh',
      position: ['C'],
    },
    {
      name: 'Rajon Rondo',
      team: 'Cle',
      position: ['PG'],
    },
    {
      name: 'Brandon Boston Jr.',
      team: 'LAC',
      position: ['SG'],
    },
    {
      name: 'Wayne Ellington',
      team: 'LAL',
      position: ['SG'],
    },
    {
      name: 'Eric Paschall',
      team: 'Utah',
      position: ['PF'],
    },
    {
      name: 'Davon Reed',
      team: 'Den',
      position: ['SG'],
    },
    {
      name: 'Theo Maledon',
      team: 'OKC',
      position: ['PG'],
    },
    {
      name: 'Saben Lee',
      team: 'Det',
      position: ['PG'],
    },
    {
      name: 'Terry Taylor',
      team: 'Ind',
      position: ['SG'],
    },
    {
      name: 'Josh Jackson',
      team: 'Sac',
      position: ['SF', 'SG'],
    },
    {
      name: 'Derrick Favors',
      team: 'OKC',
      position: ['C', 'PF'],
    },
    {
      name: 'Duane Washington Jr.',
      team: 'Ind',
      position: ['PG'],
    },
    {
      name: 'Svi Mykhailiuk',
      team: 'Tor',
      position: ['SG'],
    },
    {
      name: 'Zeke Nnaji',
      team: 'Den',
      position: ['PF'],
    },
    {
      name: 'Gorgui Dieng',
      team: 'Atl',
      position: ['C', 'PF'],
    },
    {
      name: 'Joshua Primo',
      team: 'SA',
      position: ['SG'],
    },
    {
      name: 'Naji Marshall',
      team: 'NO',
      position: ['SF'],
    },
    {
      name: 'Tomas Satoransky',
      team: 'Wsh',
      position: ['PG', 'SG'],
    },
    {
      name: 'Danuel House Jr.',
      team: 'Utah',
      position: ['SF', 'SG'],
    },
    {
      name: 'Davis Bertans',
      team: 'Dal',
      position: ['PF'],
    },
  ],
  [
    {
      name: 'Rodney McGruder',
      team: 'Det',
      position: ['SG'],
    },
    {
      name: 'Enes Freedom',
      team: 'Bos',
      position: ['C'],
    },
    {
      name: 'Nick Richards',
      team: 'Cha',
      position: ['C'],
    },
    {
      name: "Day'Ron Sharpe",
      team: 'Bkn',
      position: ['C'],
    },
    {
      name: 'Sterling Brown',
      team: 'Dal',
      position: ['SG', 'SF'],
    },
    {
      name: 'Tony Snell',
      team: 'NO',
      position: ['SG'],
    },
    {
      name: 'Zach Collins',
      team: 'SA',
      position: ['C'],
    },
    {
      name: 'Dalano Banton',
      team: 'Tor',
      position: ['PG'],
    },
    {
      name: 'Wesley Matthews',
      team: 'Mil',
      position: ['SF'],
    },
    {
      name: 'Cody Zeller',
      team: 'Por',
      position: ['C'],
    },
    {
      name: 'Timothe Luwawu-Cabarrot',
      team: 'Atl',
      position: ['SF'],
    },
    {
      name: 'Robin Lopez',
      team: 'Orl',
      position: ['C'],
    },
    {
      name: 'Anthony Gill',
      team: 'Wsh',
      position: ['PF'],
    },
    {
      name: 'Tristan Thompson',
      team: 'Chi',
      position: ['C', 'PF'],
    },
    {
      name: 'Romeo Langford',
      team: 'SA',
      position: ['SG'],
    },
    {
      name: 'Moses Moody',
      team: 'GS',
      position: ['SG'],
    },
    {
      name: 'Goran Dragic',
      team: 'Bkn',
      position: ['PG'],
    },
    {
      name: 'Killian Tillie',
      team: 'Mem',
      position: ['C'],
    },
    {
      name: 'Kent Bazemore',
      team: 'LAL',
      position: ['SG', 'SF'],
    },
    {
      name: 'Brandon Goodwin',
      team: 'Cle',
      position: ['PG'],
    },
    {
      name: 'Isaiah Joe',
      team: 'Phi',
      position: ['SG'],
    },
    {
      name: 'Vit Krejci',
      team: 'OKC',
      position: ['PG'],
    },
    {
      name: 'Joe Harris',
      team: 'Bkn',
      position: ['SG', 'SF'],
    },
    {
      name: 'Rodney Hood',
      team: 'LAC',
      position: ['SG'],
    },
    {
      name: 'Charles Bassey',
      team: 'Phi',
      position: ['C'],
    },
    {
      name: 'Greg Brown III',
      team: 'Por',
      position: ['PF'],
    },
    {
      name: 'Frank Kaminsky',
      team: 'Phx',
      position: ['C', 'PF'],
    },
    {
      name: 'Malachi Flynn',
      team: 'Tor',
      position: ['PG'],
    },
    {
      name: 'Paul Reed',
      team: 'Phi',
      position: ['PF'],
    },
    {
      name: 'Lindy Waters III',
      team: 'OKC',
      position: ['SF'],
    },
    {
      name: 'Sandro Mamukelashvili',
      team: 'Mil',
      position: ['C'],
    },
    {
      name: 'Jared Butler',
      team: 'Utah',
      position: ['SG'],
    },
    {
      name: 'Bismack Biyombo',
      team: 'Phx',
      position: ['C'],
    },
    {
      name: 'Paul Millsap',
      team: 'Phi',
      position: ['PF'],
    },
    {
      name: 'Marquese Chriss',
      team: 'Dal',
      position: ['PF'],
    },
    {
      name: 'Dylan Windler',
      team: 'Cle',
      position: ['SF'],
    },
    {
      name: 'Kelan Martin',
      team: 'Bos',
      position: ['SG'],
    },
    {
      name: 'Matt Thomas',
      team: 'Chi',
      position: ['SG'],
    },
    {
      name: 'Trey Burke',
      team: 'Dal',
      position: ['PG', 'SG'],
    },
    {
      name: 'Kris Dunn',
      team: 'Por',
      position: ['PG'],
    },
    {
      name: 'Aaron Nesmith',
      team: 'Bos',
      position: ['SF'],
    },
    {
      name: 'Brad Wanamaker',
      team: 'Wsh',
      position: ['PG'],
    },
    {
      name: 'Thanasis Antetokounmpo',
      team: 'Mil',
      position: ['SF'],
    },
    {
      name: 'Jericho Sims',
      team: 'NY',
      position: ['PF'],
    },
    {
      name: 'Gary Clark',
      team: 'NO',
      position: ['PF'],
    },
    {
      name: 'Justin Champagnie',
      team: 'Tor',
      position: ['SF'],
    },
    {
      name: 'Udoka Azubuike',
      team: 'Utah',
      position: ['C'],
    },
    {
      name: 'Keon Johnson',
      team: 'Por',
      position: ['SG'],
    },
    {
      name: 'Nathan Knight',
      team: 'Min',
      position: ['C'],
    },
    {
      name: 'Yuta Watanabe',
      team: 'Tor',
      position: ['SF'],
    },
  ],
  [
    {
      name: 'Markelle Fultz',
      team: 'Orl',
      position: ['PG'],
    },
    {
      name: 'Josh Okogie',
      team: 'Min',
      position: ['SG', 'SF'],
    },
    {
      name: 'Kira Lewis Jr.',
      team: 'NO',
      position: ['PG'],
    },
    {
      name: 'David Duke Jr.',
      team: 'Bkn',
      position: ['SG'],
    },
    {
      name: 'Admiral Schofield',
      team: 'Orl',
      position: ['SF'],
    },
    {
      name: 'Olivier Sarr',
      team: 'OKC',
      position: ['C'],
    },
    {
      name: 'P.J. Dozier',
      team: 'Bos',
      position: ['PG'],
    },
    {
      name: 'Keifer Sykes',
      team: 'Ind',
      position: ['SG'],
    },
    {
      name: 'Markieff Morris',
      team: 'Mia',
      position: ['PF'],
    },
    {
      name: 'Isaiah Thomas',
      team: 'Cha',
      position: ['PG'],
    },
    {
      name: 'Collin Sexton',
      team: 'Cle',
      position: ['SG', 'PG'],
    },
    {
      name: 'Brandon Williams',
      team: 'Por',
      position: ['PG'],
    },
    {
      name: 'Skylar Mays',
      team: 'Atl',
      position: ['SG'],
    },
    {
      name: 'James Bouknight',
      team: 'Cha',
      position: ['SG'],
    },
    {
      name: 'Elijah Hughes',
      team: 'Por',
      position: ['SG'],
    },
    {
      name: 'JT Thor',
      team: 'Cha',
      position: ['PF'],
    },
    {
      name: 'Chris Chiozza',
      team: 'GS',
      position: ['PG'],
    },
    {
      name: 'Luka Garza',
      team: 'Det',
      position: ['C'],
    },
    {
      name: 'Elfrid Payton',
      team: 'Phx',
      position: ['PG'],
    },
    {
      name: 'Ignas Brazdeikis',
      team: 'Orl',
      position: ['PF'],
    },
    {
      name: 'Isaiah Livers',
      team: 'Det',
      position: ['PF'],
    },
    {
      name: 'Devontae Cacok',
      team: 'SA',
      position: ['C'],
    },
    {
      name: 'KZ Okpala',
      team: 'OKC',
      position: ['SF'],
    },
    {
      name: 'Brook Lopez',
      team: 'Mil',
      position: ['C'],
    },
    {
      name: 'Markus Howard',
      team: 'Den',
      position: ['PG'],
    },
    {
      name: 'Justin Anderson',
      team: 'Ind',
      position: ['SF'],
    },
    {
      name: 'Trevor Ariza',
      team: 'LAL',
      position: ['SF'],
    },
    {
      name: 'Mamadi Diakite',
      team: 'OKC',
      position: ['PF'],
    },
    {
      name: 'Jabari Parker',
      team: 'Bos',
      position: ['PF'],
    },
    {
      name: 'Bruno Fernando',
      team: 'Hou',
      position: ['C'],
    },
    {
      name: 'Daishen Nix',
      team: 'Hou',
      position: ['SG'],
    },
    {
      name: 'Semi Ojeleye',
      team: 'LAC',
      position: ['PF'],
    },
    {
      name: 'Denzel Valentine',
      team: 'Utah',
      position: ['SG', 'SF'],
    },
    {
      name: 'Vlatko Cancar',
      team: 'Den',
      position: ['SF'],
    },
    {
      name: 'Hassani Gravett',
      team: 'Orl',
      position: ['PG'],
    },
    {
      name: 'Usman Garuba',
      team: 'Hou',
      position: ['PF'],
    },
    {
      name: 'Greg Monroe',
      team: 'Mil',
      position: ['C'],
    },
    {
      name: 'Cassius Stanley',
      team: 'Det',
      position: ['SG'],
    },
    {
      name: 'Juancho Hernangomez',
      team: 'Utah',
      position: ['PF', 'SF'],
    },
    {
      name: 'Jake Layman',
      team: 'Min',
      position: ['SF'],
    },
    {
      name: 'Willie Cauley-Stein',
      team: 'Phi',
      position: ['C'],
    },
    {
      name: 'Miles McBride',
      team: 'NY',
      position: ['PG'],
    },
    {
      name: 'Ish Wainright',
      team: 'Phx',
      position: ['PF'],
    },
    {
      name: 'D.J. Wilson',
      team: 'Tor',
      position: ['PF'],
    },
    {
      name: 'Michael Porter Jr.',
      team: 'Den',
      position: ['SF', 'PF'],
    },
    {
      name: 'Kyle Guy',
      team: 'Mia',
      position: ['SG'],
    },
    {
      name: 'Derrick Walton Jr.',
      team: 'Det',
      position: ['PG'],
    },
    {
      name: 'Tyler Cook',
      team: 'Chi',
      position: ['PF'],
    },
    {
      name: 'Ed Davis',
      team: 'Cle',
      position: ['PF'],
    },
    {
      name: 'Quinndary Weatherspoon',
      team: 'GS',
      position: ['SG'],
    },
  ],
  [
    {
      name: 'Chris Silva',
      team: 'Mia',
      position: ['PF'],
    },
    {
      name: 'Santi Aldama',
      team: 'Mem',
      position: ['PF'],
    },
    {
      name: 'Patrick Williams',
      team: 'Chi',
      position: ['SF', 'PF'],
    },
    {
      name: 'Leandro Bolmaro',
      team: 'Min',
      position: ['SG'],
    },
    {
      name: 'Brandon Knight',
      team: 'Dal',
      position: ['PG'],
    },
    {
      name: 'Jarrett Culver',
      team: 'Mem',
      position: ['SG', 'SF'],
    },
    {
      name: 'Theo Pinson',
      team: 'Dal',
      position: ['SG'],
    },
    {
      name: 'Freddie Gillespie',
      team: 'Orl',
      position: ['PF'],
    },
    {
      name: 'Sam Hauser',
      team: 'Bos',
      position: ['SF'],
    },
    {
      name: 'Moses Brown',
      team: 'Cle',
      position: ['C'],
    },
    {
      name: 'Boban Marjanovic',
      team: 'Dal',
      position: ['C'],
    },
    {
      name: 'Jalen Johnson',
      team: 'Atl',
      position: ['SF'],
    },
    {
      name: 'Abdel Nader',
      team: 'Phx',
      position: ['SF'],
    },
    {
      name: 'Udonis Haslem',
      team: 'Mia',
      position: ['PF'],
    },
    {
      name: 'Jay Scrubb',
      team: 'LAC',
      position: ['SG'],
    },
    {
      name: 'Wenyen Gabriel',
      team: 'LAL',
      position: ['SF'],
    },
    {
      name: 'Alize Johnson',
      team: 'NO',
      position: ['PF'],
    },
    {
      name: 'Paul Watson',
      team: 'OKC',
      position: ['SG'],
    },
    {
      name: 'James Ennis III',
      team: 'Den',
      position: ['SF'],
    },
    {
      name: 'Xavier Moon',
      team: 'LAC',
      position: ['PG'],
    },
    {
      name: 'Justin Robinson',
      team: 'Det',
      position: ['PG'],
    },
    {
      name: 'Tyler Johnson',
      team: 'SA',
      position: ['PG'],
    },
    {
      name: 'Kevin Pangos',
      team: 'Cle',
      position: ['PG'],
    },
    {
      name: 'Sekou Doumbouya',
      team: 'LAL',
      position: ['PF'],
    },
    {
      name: 'Cameron Oliver',
      team: 'Atl',
      position: ['PF'],
    },
    {
      name: 'Joe Wieskamp',
      team: 'SA',
      position: ['SF'],
    },
    {
      name: 'Kevin Knox II',
      team: 'Atl',
      position: ['SF'],
    },
    {
      name: 'Bol Bol',
      team: 'Orl',
      position: ['C'],
    },
    {
      name: 'Mychal Mulder',
      team: 'Mia',
      position: ['SG'],
    },
    {
      name: 'Gabriel Deck',
      team: 'OKC',
      position: ['SF'],
    },
    {
      name: 'Solomon Hill',
      team: 'NY',
      position: ['SF'],
    },
    {
      name: 'BJ Johnson',
      team: 'Orl',
      position: ['SF'],
    },
    {
      name: 'Neemias Queta',
      team: 'Sac',
      position: ['C'],
    },
    {
      name: 'Isaac Bonga',
      team: 'Tor',
      position: ['SF'],
    },
    {
      name: 'Tim Frazier',
      team: 'Cle',
      position: ['PG'],
    },
    {
      name: 'Reggie Perry',
      team: 'Ind',
      position: ['C'],
    },
    {
      name: 'Victor Oladipo',
      team: 'Mia',
      position: ['SG'],
    },
    {
      name: 'Tremont Waters',
      team: 'Wsh',
      position: ['PG'],
    },
    {
      name: 'Cameron McGriff',
      team: 'Por',
      position: ['SF'],
    },
    {
      name: 'Jamorko Pickett',
      team: 'Det',
      position: ['PF'],
    },
    {
      name: 'Chaundee Brown Jr.',
      team: 'Atl',
      position: ['SG'],
    },
    {
      name: 'Wes Iwundu',
      team: 'Atl',
      position: ['SF'],
    },
    {
      name: 'Haywood Highsmith',
      team: 'Mia',
      position: ['SF'],
    },
    {
      name: 'Jeff Dowtin',
      team: 'Orl',
      position: ['PG'],
    },
    {
      name: 'Cassius Winston',
      team: 'Wsh',
      position: ['PG'],
    },
    {
      name: 'Keljin Blevins',
      team: 'Por',
      position: ['SF'],
    },
    {
      name: 'Cheick Diallo',
      team: 'Det',
      position: ['PF'],
    },
    {
      name: 'Petr Cornelie',
      team: 'Den',
      position: ['PF'],
    },
    {
      name: 'Marcus Garrett',
      team: 'Mia',
      position: ['SG'],
    },
    {
      name: 'Louis King',
      team: 'Sac',
      position: ['PF'],
    },
  ],
].flat()

const getPosition = name => espnRank.find(p => p.name === name)?.position

export default espnRank
export { getPosition }
