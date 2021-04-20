const players = [
  {
    name: 'Nikola Jokic',
    team: 'Den',
    position: ['C'],
  },
  {
    name: 'Stephen Curry',
    team: 'GS',
    position: ['PG'],
  },
  {
    name: 'Nikola Vucevic',
    team: 'Chi',
    position: ['C'],
  },
  {
    name: 'Damian Lillard',
    team: 'Por',
    position: ['PG'],
  },
  {
    name: 'Zach LaVine',
    team: 'Chi',
    position: ['SG'],
  },
  {
    name: 'James Harden',
    team: 'Bkn',
    position: ['SG', 'PG'],
  },
  {
    name: 'Kawhi Leonard',
    team: 'LAC',
    position: ['SF', 'PF'],
  },
  {
    name: 'Luka Doncic',
    team: 'Dal',
    position: ['PG', 'SF'],
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
    name: 'Julius Randle',
    team: 'NY',
    position: ['PF', 'C'],
  },
  {
    name: 'Bradley Beal',
    team: 'Wsh',
    position: ['SG'],
  },
  {
    name: 'Giannis Antetokounmpo',
    team: 'Mil',
    position: ['PF', 'SF'],
  },
  {
    name: 'Jayson Tatum',
    team: 'Bos',
    position: ['PF', 'SF'],
  },
  {
    name: 'Bam Adebayo',
    team: 'Mia',
    position: ['C', 'PF'],
  },
  {
    name: 'Trae Young',
    team: 'Atl',
    position: ['PG'],
  },
  {
    name: 'Khris Middleton',
    team: 'Mil',
    position: ['SF', 'SG'],
  },
  {
    name: 'Joel Embiid',
    team: 'Phi',
    position: ['C'],
  },
  {
    name: 'Kyrie Irving',
    team: 'Bkn',
    position: ['PG', 'SG'],
  },
  {
    name: 'Brandon Ingram',
    team: 'NO',
    position: ['SF', 'PF'],
  },
  {
    name: 'Tobias Harris',
    team: 'Phi',
    position: ['SF', 'PF'],
  },
  {
    name: 'Domantas Sabonis',
    team: 'Ind',
    position: ['PF', 'C'],
  },
  {
    name: 'Paul George',
    team: 'LAC',
    position: ['SF', 'SG'],
  },
  {
    name: 'Deandre Ayton',
    team: 'Phx',
    position: ['C'],
  },
  {
    name: 'Donovan Mitchell',
    team: 'Utah',
    position: ['SG', 'PG'],
  },
  {
    name: 'Chris Boucher',
    team: 'Tor',
    position: ['PF', 'C'],
  },
  {
    name: 'Jaylen Brown',
    team: 'Bos',
    position: ['SG', 'SF'],
  },
  {
    name: 'Devin Booker',
    team: 'Phx',
    position: ['SG', 'PG'],
  },
  {
    name: 'Myles Turner',
    team: 'Ind',
    position: ['C', 'PF'],
  },
  {
    name: 'Richaun Holmes',
    team: 'Sac',
    position: ['C', 'PF'],
  },
  {
    name: 'Terry Rozier',
    team: 'Cha',
    position: ['PG', 'SG'],
  },
  {
    name: 'Jimmy Butler',
    team: 'Mia',
    position: ['SF', 'SG'],
  },
  {
    name: "De'Aaron Fox",
    team: 'Sac',
    position: ['PG'],
  },
  {
    name: 'Zion Williamson',
    team: 'NO',
    position: ['PF'],
  },
  {
    name: 'Karl-Anthony Towns',
    team: 'Min',
    position: ['C'],
  },
  {
    name: 'Clint Capela',
    team: 'Atl',
    position: ['C'],
  },
  {
    name: 'Jamal Murray',
    team: 'Den',
    position: ['PG', 'SG'],
  },
  {
    name: 'Fred VanVleet',
    team: 'Tor',
    position: ['SG', 'PG'],
  },
  {
    name: 'Malcolm Brogdon',
    team: 'Ind',
    position: ['PG', 'SG'],
  },
  {
    name: 'DeMar DeRozan',
    team: 'SA',
    position: ['SG', 'SF'],
  },
  {
    name: 'Jrue Holiday',
    team: 'Mil',
    position: ['PG', 'SG'],
  },
  {
    name: 'Jonas Valanciunas',
    team: 'Mem',
    position: ['C'],
  },
  {
    name: 'Mikal Bridges',
    team: 'Phx',
    position: ['SF'],
  },
  {
    name: 'Norman Powell',
    team: 'Por',
    position: ['SG', 'SF'],
  },
  {
    name: 'Jerami Grant',
    team: 'Det',
    position: ['SF', 'PF'],
  },
  {
    name: 'LeBron James',
    team: 'LAL',
    position: ['SF', 'PG', 'PF'],
  },
  {
    name: 'Robert Covington',
    team: 'Por',
    position: ['PF', 'SF'],
  },
  {
    name: 'Enes Kanter',
    team: 'Por',
    position: ['C'],
  },
  {
    name: 'John Collins',
    team: 'Atl',
    position: ['PF', 'C'],
  },
  {
    name: 'Pascal Siakam',
    team: 'Tor',
    position: ['PF', 'C'],
  },
  {
    name: 'Draymond Green',
    team: 'GS',
    position: ['PF', 'C'],
  },
  {
    name: 'Dejounte Murray',
    team: 'SA',
    position: ['PG', 'SG'],
  },
  {
    name: 'Michael Porter Jr.',
    team: 'Den',
    position: ['SF', 'PF'],
  },
  {
    name: 'Kelly Olynyk',
    team: 'Hou',
    position: ['C', 'PF'],
  },
  {
    name: 'Kyle Anderson',
    team: 'Mem',
    position: ['SF', 'PF'],
  },
  {
    name: 'Harrison Barnes',
    team: 'Sac',
    position: ['SF', 'PF'],
  },
  {
    name: 'Andrew Wiggins',
    team: 'GS',
    position: ['SF', 'SG'],
  },
  {
    name: 'Russell Westbrook',
    team: 'Wsh',
    position: ['PG'],
  },
  {
    name: 'T.J. McConnell',
    team: 'Ind',
    position: ['PG'],
  },
  {
    name: 'Joe Ingles',
    team: 'Utah',
    position: ['SF', 'PF'],
  },
  {
    name: 'Miles Bridges',
    team: 'Cha',
    position: ['SF', 'PF'],
  },
  {
    name: 'Brook Lopez',
    team: 'Mil',
    position: ['C'],
  },
  {
    name: 'Tyrese Haliburton',
    team: 'Sac',
    position: ['PG', 'SG'],
  },
  {
    name: 'Buddy Hield',
    team: 'Sac',
    position: ['SG'],
  },
  {
    name: 'Mike Conley',
    team: 'Utah',
    position: ['PG'],
  },
  {
    name: 'Gordon Hayward',
    team: 'Cha',
    position: ['SF'],
  },
  {
    name: 'Collin Sexton',
    team: 'Cle',
    position: ['SG', 'PG'],
  },
  {
    name: 'Jarrett Allen',
    team: 'Cle',
    position: ['C'],
  },
  {
    name: 'Dennis Schroder',
    team: 'LAL',
    position: ['PG'],
  },
  {
    name: 'Robert Williams III',
    team: 'Bos',
    position: ['PF', 'C'],
  },
  {
    name: 'Kyle Lowry',
    team: 'Tor',
    position: ['PG'],
  },
  {
    name: 'Ivica Zubac',
    team: 'LAC',
    position: ['C'],
  },
  {
    name: 'Joe Harris',
    team: 'Bkn',
    position: ['SG', 'SF'],
  },
  {
    name: 'Danny Green',
    team: 'Phi',
    position: ['SG', 'SF'],
  },
  {
    name: "Jae'Sean Tate",
    team: 'Hou',
    position: ['SF'],
  },
  {
    name: 'Thaddeus Young',
    team: 'Chi',
    position: ['PF', 'SF', 'C'],
  },
  {
    name: 'Nerlens Noel',
    team: 'NY',
    position: ['C'],
  },
  {
    name: 'Jordan Clarkson',
    team: 'Utah',
    position: ['SG'],
  },
  {
    name: 'Montrezl Harrell',
    team: 'LAL',
    position: ['C', 'PF'],
  },
  {
    name: 'Kristaps Porzingis',
    team: 'Dal',
    position: ['PF', 'C'],
  },
  {
    name: 'P.J. Washington',
    team: 'Cha',
    position: ['PF', 'C'],
  },
  {
    name: 'LaMelo Ball',
    team: 'Cha',
    position: ['PG'],
  },
  {
    name: 'Ben Simmons',
    team: 'Phi',
    position: ['PG'],
  },
  {
    name: 'Mason Plumlee',
    team: 'Det',
    position: ['C'],
  },
  {
    name: 'Shai Gilgeous-Alexander',
    team: 'OKC',
    position: ['SG', 'PG'],
  },
  {
    name: 'Nicolas Batum',
    team: 'LAC',
    position: ['SF', 'SG', 'PF'],
  },
  {
    name: 'Lonzo Ball',
    team: 'NO',
    position: ['PG'],
  },
  {
    name: 'Duncan Robinson',
    team: 'Mia',
    position: ['SG', 'SF'],
  },
  {
    name: 'Kevin Huerter',
    team: 'Atl',
    position: ['SG', 'SF'],
  },
  {
    name: 'Darius Garland',
    team: 'Cle',
    position: ['PG', 'SG'],
  },
  {
    name: 'Anthony Edwards',
    team: 'Min',
    position: ['SG', 'SF'],
  },
  {
    name: "Royce O'Neale",
    team: 'Utah',
    position: ['SF', 'PF'],
  },
  {
    name: 'Kevin Durant',
    team: 'Bkn',
    position: ['SF', 'PF'],
  },
  {
    name: 'Ricky Rubio',
    team: 'Min',
    position: ['PG'],
  },
  {
    name: 'Jakob Poeltl',
    team: 'SA',
    position: ['C'],
  },
  {
    name: 'Coby White',
    team: 'Chi',
    position: ['PG'],
  },
  {
    name: 'Bojan Bogdanovic',
    team: 'Utah',
    position: ['SF', 'PF'],
  },
  {
    name: 'Delon Wright',
    team: 'Sac',
    position: ['SG', 'PG'],
  },
  {
    name: 'RJ Barrett',
    team: 'NY',
    position: ['SG', 'SF'],
  },
  {
    name: 'Bobby Portis',
    team: 'Mil',
    position: ['PF', 'C'],
  },
  {
    name: 'Dillon Brooks',
    team: 'Mem',
    position: ['SG', 'SF'],
  },
  {
    name: 'Justin Holiday',
    team: 'Ind',
    position: ['SG', 'SF'],
  },
  {
    name: 'Will Barton',
    team: 'Den',
    position: ['SF', 'SG'],
  },
  {
    name: 'Carmelo Anthony',
    team: 'Por',
    position: ['PF', 'SF'],
  },
  {
    name: 'Naz Reid',
    team: 'Min',
    position: ['C'],
  },
  {
    name: 'Kemba Walker',
    team: 'Bos',
    position: ['PG'],
  },
  {
    name: 'Isaiah Stewart',
    team: 'Det',
    position: ['C', 'PF'],
  },
  {
    name: 'OG Anunoby',
    team: 'Tor',
    position: ['SF', 'PF'],
  },
  {
    name: 'Donte DiVincenzo',
    team: 'Mil',
    position: ['SG', 'PG'],
  },
  {
    name: 'Patrick Williams',
    team: 'Chi',
    position: ['SF'],
  },
  {
    name: 'Ja Morant',
    team: 'Mem',
    position: ['PG'],
  },
  {
    name: 'Christian Wood',
    team: 'Hou',
    position: ['C', 'PF'],
  },
  {
    name: 'Kendrick Nunn',
    team: 'Mia',
    position: ['SG'],
  },
  {
    name: 'Daniel Theis',
    team: 'Chi',
    position: ['C', 'PF'],
  },
  {
    name: 'Terrence Ross',
    team: 'Orl',
    position: ['SG', 'SF'],
  },
  {
    name: 'DeAndre Jordan',
    team: 'Bkn',
    position: ['C'],
  },
  {
    name: 'Kelly Oubre Jr.',
    team: 'GS',
    position: ['PF', 'SF'],
  },
  {
    name: 'Tim Hardaway Jr.',
    team: 'Dal',
    position: ['SG', 'SF'],
  },
  {
    name: 'Saddiq Bey',
    team: 'Det',
    position: ['SF'],
  },
  {
    name: 'CJ McCollum',
    team: 'Por',
    position: ['SG'],
  },
  {
    name: 'Jae Crowder',
    team: 'Phx',
    position: ['PF', 'SF'],
  },
  {
    name: 'Jalen Brunson',
    team: 'Dal',
    position: ['PG'],
  },
  {
    name: 'Marcus Smart',
    team: 'Bos',
    position: ['SG', 'PG'],
  },
  {
    name: 'Kyle Kuzma',
    team: 'LAL',
    position: ['PF', 'SF'],
  },
  {
    name: 'Gary Trent Jr.',
    team: 'Tor',
    position: ['SG', 'SF'],
  },
  {
    name: 'Josh Richardson',
    team: 'Dal',
    position: ['SG', 'SF'],
  },
  {
    name: 'Wendell Carter Jr.',
    team: 'Orl',
    position: ['C'],
  },
  {
    name: 'Tyler Herro',
    team: 'Mia',
    position: ['SG', 'PG'],
  },
  {
    name: 'Derrick Favors',
    team: 'Utah',
    position: ['C', 'PF'],
  },
  {
    name: "Devonte' Graham",
    team: 'Cha',
    position: ['PG', 'SG'],
  },
  {
    name: 'Patty Mills',
    team: 'SA',
    position: ['PG'],
  },
  {
    name: 'Malik Beasley',
    team: 'Min',
    position: ['SG', 'SF'],
  },
  {
    name: 'Brandon Clarke',
    team: 'Mem',
    position: ['PF'],
  },
  {
    name: 'Keldon Johnson',
    team: 'SA',
    position: ['SF', 'PF'],
  },
  {
    name: 'Tomas Satoransky',
    team: 'Chi',
    position: ['PG', 'SG'],
  },
  {
    name: 'Reggie Jackson',
    team: 'LAC',
    position: ['PG'],
  },
  {
    name: 'Josh Jackson',
    team: 'Det',
    position: ['SF', 'SG'],
  },
  {
    name: 'Josh Hart',
    team: 'NO',
    position: ['SG', 'SF'],
  },
  {
    name: 'Bruce Brown',
    team: 'Bkn',
    position: ['SG'],
  },
  {
    name: 'Cory Joseph',
    team: 'Det',
    position: ['PG', 'SG'],
  },
  {
    name: 'Kentavious Caldwell-Pope',
    team: 'LAL',
    position: ['SG', 'SF'],
  },
  {
    name: 'Marcus Morris Sr.',
    team: 'LAC',
    position: ['PF', 'SF'],
  },
  {
    name: 'Doug McDermott',
    team: 'Ind',
    position: ['SF', 'PF'],
  },
  {
    name: 'Shake Milton',
    team: 'Phi',
    position: ['PG', 'SG'],
  },
  {
    name: 'Serge Ibaka',
    team: 'LAC',
    position: ['C', 'PF'],
  },
  {
    name: 'John Wall',
    team: 'Hou',
    position: ['PG'],
  },
  {
    name: 'Grayson Allen',
    team: 'Mem',
    position: ['SG'],
  },
  {
    name: 'Eric Bledsoe',
    team: 'NO',
    position: ['PG', 'SG'],
  },
  {
    name: 'Tyus Jones',
    team: 'Mem',
    position: ['PG'],
  },
  {
    name: 'Matisse Thybulle',
    team: 'Phi',
    position: ['SF'],
  },
  {
    name: 'Dorian Finney-Smith',
    team: 'Dal',
    position: ['PF', 'SF'],
  },
  {
    name: 'Rudy Gay',
    team: 'SA',
    position: ['PF'],
  },
  {
    name: 'Reggie Bullock',
    team: 'NY',
    position: ['SF', 'SG'],
  },
  {
    name: 'Caris LeVert',
    team: 'Ind',
    position: ['SG', 'SF'],
  },
  {
    name: 'Lou Williams',
    team: 'Atl',
    position: ['SG'],
  },
  {
    name: 'Desmond Bane',
    team: 'Mem',
    position: ['SG'],
  },
  {
    name: 'Seth Curry',
    team: 'Phi',
    position: ['SG', 'PG'],
  },
  {
    name: 'Cameron Johnson',
    team: 'Phx',
    position: ['SF', 'SG'],
  },
  {
    name: 'Alec Burks',
    team: 'NY',
    position: ['SG'],
  },
  {
    name: 'Isaiah Roby',
    team: 'OKC',
    position: ['PF', 'C'],
  },
  {
    name: 'Talen Horton-Tucker',
    team: 'LAL',
    position: ['SG', 'SF'],
  },
  {
    name: 'Jeff Green',
    team: 'Bkn',
    position: ['PF'],
  },
  {
    name: 'Danilo Gallinari',
    team: 'Atl',
    position: ['PF', 'SF'],
  },
  {
    name: 'Anthony Davis',
    team: 'LAL',
    position: ['PF', 'C'],
  },
  {
    name: 'Kenrich Williams',
    team: 'OKC',
    position: ['SF'],
  },
  {
    name: 'Sterling Brown',
    team: 'Hou',
    position: ['SG', 'SF'],
  },
  {
    name: 'Damion Lee',
    team: 'GS',
    position: ['SG', 'SF'],
  },
  {
    name: 'Robin Lopez',
    team: 'Wsh',
    position: ['C'],
  },
  {
    name: 'Pat Connaughton',
    team: 'Mil',
    position: ['SG', 'SF'],
  },
  {
    name: "De'Anthony Melton",
    team: 'Mem',
    position: ['PG'],
  },
  {
    name: 'Steven Adams',
    team: 'NO',
    position: ['C'],
  },
  {
    name: 'Immanuel Quickley',
    team: 'NY',
    position: ['PG'],
  },
  {
    name: 'Paul Millsap',
    team: 'Den',
    position: ['PF', 'C'],
  },
  {
    name: 'Jeremy Lamb',
    team: 'Ind',
    position: ['SG', 'SF'],
  },
  {
    name: 'Larry Nance Jr.',
    team: 'Cle',
    position: ['PF', 'C'],
  },
  {
    name: 'Victor Oladipo',
    team: 'Mia',
    position: ['SG'],
  },
  {
    name: 'Lauri Markkanen',
    team: 'Chi',
    position: ['PF'],
  },
  {
    name: 'Bogdan Bogdanovic',
    team: 'Atl',
    position: ['SG', 'SF'],
  },
  {
    name: 'Maxi Kleber',
    team: 'Dal',
    position: ['PF'],
  },
  {
    name: 'Marc Gasol',
    team: 'LAL',
    position: ['C'],
  },
  {
    name: 'Evan Fournier',
    team: 'Bos',
    position: ['SG', 'SF'],
  },
  {
    name: 'Rui Hachimura',
    team: 'Wsh',
    position: ['PF', 'SF'],
  },
  {
    name: 'Raul Neto',
    team: 'Wsh',
    position: ['PG'],
  },
  {
    name: 'Davis Bertans',
    team: 'Wsh',
    position: ['PF'],
  },
  {
    name: 'Derrick White',
    team: 'SA',
    position: ['PG', 'SG'],
  },
  {
    name: 'Al Horford',
    team: 'OKC',
    position: ['PF', 'C'],
  },
  {
    name: 'Kent Bazemore',
    team: 'GS',
    position: ['SG', 'SF'],
  },
  {
    name: 'Derrick Rose',
    team: 'NY',
    position: ['PG'],
  },
  {
    name: 'Goran Dragic',
    team: 'Mia',
    position: ['PG'],
  },
  {
    name: 'Derrick Jones Jr.',
    team: 'Por',
    position: ['SF', 'SG'],
  },
  {
    name: 'Andre Iguodala',
    team: 'Mia',
    position: ['SF', 'SG'],
  },
  {
    name: 'Monte Morris',
    team: 'Den',
    position: ['PG'],
  },
  {
    name: 'Xavier Tillman',
    team: 'Mem',
    position: ['PF'],
  },
  {
    name: 'Cameron Payne',
    team: 'Phx',
    position: ['PG'],
  },
  {
    name: 'JaMychal Green',
    team: 'Den',
    position: ['PF', 'C'],
  },
  {
    name: 'Dwight Howard',
    team: 'Phi',
    position: ['C'],
  },
  {
    name: 'Andre Drummond',
    team: 'LAL',
    position: ['C'],
  },
  {
    name: 'Jaden McDaniels',
    team: 'Min',
    position: ['SF'],
  },
  {
    name: 'Luke Kennard',
    team: 'LAC',
    position: ['SG'],
  },
  {
    name: 'Isaac Okoro',
    team: 'Cle',
    position: ['SF'],
  },
  {
    name: 'Luguentz Dort',
    team: 'OKC',
    position: ['SG', 'SF'],
  },
  {
    name: "D'Angelo Russell",
    team: 'Min',
    position: ['PG', 'SG'],
  },
  {
    name: 'Khem Birch',
    team: 'Tor',
    position: ['C'],
  },
  {
    name: 'Jarred Vanderbilt',
    team: 'Min',
    position: ['PF'],
  },
  {
    name: 'Mitchell Robinson',
    team: 'NY',
    position: ['C'],
  },
  {
    name: 'Theo Maledon',
    team: 'OKC',
    position: ['PG'],
  },
  {
    name: 'Facundo Campazzo',
    team: 'Den',
    position: ['PG'],
  },
  {
    name: 'Terance Mann',
    team: 'LAC',
    position: ['SF'],
  },
  {
    name: 'Aaron Gordon',
    team: 'Den',
    position: ['PF'],
  },
  {
    name: 'Nickeil Alexander-Walker',
    team: 'NO',
    position: ['SG'],
  },
  {
    name: 'Payton Pritchard',
    team: 'Bos',
    position: ['PG'],
  },
  {
    name: 'D.J. Augustin',
    team: 'Hou',
    position: ['PG'],
  },
  {
    name: 'Taurean Prince',
    team: 'Cle',
    position: ['SF', 'PF'],
  },
  {
    name: 'Garrett Temple',
    team: 'Chi',
    position: ['SG', 'SF'],
  },
  {
    name: 'Svi Mykhailiuk',
    team: 'OKC',
    position: ['SG', 'SF'],
  },
  {
    name: 'Elfrid Payton',
    team: 'NY',
    position: ['PG'],
  },
  {
    name: 'Alex Len',
    team: 'Wsh',
    position: ['C'],
  },
  {
    name: 'Alex Caruso',
    team: 'LAL',
    position: ['SG'],
  },
  {
    name: 'James Ennis III',
    team: 'Orl',
    position: ['SF', 'SG'],
  },
  {
    name: 'Juan Toscano-Anderson',
    team: 'GS',
    position: ['SF', 'PF'],
  },
  {
    name: 'Darius Bazley',
    team: 'OKC',
    position: ['SF', 'PF'],
  },
  {
    name: 'Chuma Okeke',
    team: 'Orl',
    position: ['PF'],
  },
  {
    name: 'Cody Zeller',
    team: 'Cha',
    position: ['C'],
  },
  {
    name: 'Dwayne Bacon',
    team: 'Orl',
    position: ['SG'],
  },
  {
    name: 'Daniel Gafford',
    team: 'Wsh',
    position: ['C', 'PF'],
  },
  {
    name: 'Jaxson Hayes',
    team: 'NO',
    position: ['C'],
  },
  {
    name: 'Markieff Morris',
    team: 'LAL',
    position: ['PF'],
  },
  {
    name: 'Landry Shamet',
    team: 'Bkn',
    position: ['SG'],
  },
  {
    name: 'LaMarcus Aldridge',
    team: 'Bkn',
    position: ['PF', 'C'],
  },
  {
    name: 'Bryn Forbes',
    team: 'Mil',
    position: ['SG', 'PG'],
  },
  {
    name: 'Patrick Beverley',
    team: 'LAC',
    position: ['PG'],
  },
  {
    name: 'Lonnie Walker IV',
    team: 'SA',
    position: ['SF', 'SG'],
  },
  {
    name: 'Cedi Osman',
    team: 'Cle',
    position: ['SF'],
  },
  {
    name: 'Wayne Ellington',
    team: 'Det',
    position: ['SG'],
  },
  {
    name: 'Tony Bradley',
    team: 'OKC',
    position: ['C'],
  },
  {
    name: 'James Johnson',
    team: 'NO',
    position: ['PF', 'SF'],
  },
  {
    name: 'Dario Saric',
    team: 'Phx',
    position: ['PF'],
  },
  {
    name: 'Deni Avdija',
    team: 'Wsh',
    position: ['SF'],
  },
  {
    name: 'Furkan Korkmaz',
    team: 'Phi',
    position: ['SG'],
  },
  {
    name: 'Josh Okogie',
    team: 'Min',
    position: ['SG', 'SF'],
  },
  {
    name: 'Eric Gordon',
    team: 'Hou',
    position: ['SG'],
  },
  {
    name: 'JaVale McGee',
    team: 'Den',
    position: ['C'],
  },
  {
    name: 'Devin Vassell',
    team: 'SA',
    position: ['SG', 'SF'],
  },
  {
    name: "De'Andre Hunter",
    team: 'Atl',
    position: ['SF', 'PF'],
  },
  {
    name: 'James Wiseman',
    team: 'GS',
    position: ['C'],
  },
  {
    name: 'Hamidou Diallo',
    team: 'Det',
    position: ['SG'],
  },
  {
    name: 'Bismack Biyombo',
    team: 'Cha',
    position: ['C'],
  },
  {
    name: 'Cole Anthony',
    team: 'Orl',
    position: ['PG'],
  },
  {
    name: 'Kevon Looney',
    team: 'GS',
    position: ['PF', 'C'],
  },
  {
    name: 'Malik Monk',
    team: 'Cha',
    position: ['SG'],
  },
  {
    name: 'Jeff Teague',
    team: 'Mil',
    position: ['PG'],
  },
  {
    name: 'Jordan Poole',
    team: 'GS',
    position: ['SG', 'PG'],
  },
  {
    name: 'Garrison Mathews',
    team: 'Wsh',
    position: ['SG'],
  },
  {
    name: 'Tristan Thompson',
    team: 'Bos',
    position: ['C', 'PF'],
  },
  {
    name: 'Denzel Valentine',
    team: 'Chi',
    position: ['SG', 'SF'],
  },
  {
    name: 'Dean Wade',
    team: 'Cle',
    position: ['PF'],
  },
  {
    name: 'Mike Muscala',
    team: 'OKC',
    position: ['C', 'PF'],
  },
  {
    name: 'Solomon Hill',
    team: 'Atl',
    position: ['SF'],
  },
  {
    name: 'Georges Niang',
    team: 'Utah',
    position: ['PF'],
  },
  {
    name: 'Stanley Johnson',
    team: 'Tor',
    position: ['SF'],
  },
  {
    name: 'Brad Wanamaker',
    team: 'Cha',
    position: ['PG'],
  },
  {
    name: 'Jordan McLaughlin',
    team: 'Min',
    position: ['PG'],
  },
  {
    name: 'Terence Davis',
    team: 'Sac',
    position: ['SG'],
  },
  {
    name: 'Taj Gibson',
    team: 'NY',
    position: ['PF', 'C'],
  },
  {
    name: 'Edmond Sumner',
    team: 'Ind',
    position: ['SG'],
  },
  {
    name: 'Aaron Holiday',
    team: 'Ind',
    position: ['PG', 'SG'],
  },
  {
    name: 'P.J. Tucker',
    team: 'Mil',
    position: ['SF', 'PF'],
  },
  {
    name: 'Tony Snell',
    team: 'Atl',
    position: ['SG', 'SF'],
  },
  {
    name: 'Aron Baynes',
    team: 'Tor',
    position: ['C'],
  },
  {
    name: 'Drew Eubanks',
    team: 'SA',
    position: ['PF'],
  },
  {
    name: "DeAndre' Bembry",
    team: 'Tor',
    position: ['SF', 'SG'],
  },
  {
    name: 'Gorgui Dieng',
    team: 'SA',
    position: ['C', 'PF'],
  },
  {
    name: 'Anfernee Simons',
    team: 'Por',
    position: ['SG', 'PG'],
  },
  {
    name: 'Jaylen Nowell',
    team: 'Min',
    position: ['SG'],
  },
  {
    name: 'Kenyon Martin Jr.',
    team: 'Hou',
    position: ['SF'],
  },
  {
    name: 'Marvin Bagley III',
    team: 'Sac',
    position: ['PF', 'C'],
  },
  {
    name: 'Goga Bitadze',
    team: 'Ind',
    position: ['C'],
  },
  {
    name: 'Isaiah Hartenstein',
    team: 'Cle',
    position: ['PF'],
  },
  {
    name: 'DeMarcus Cousins',
    team: 'LAC',
    position: ['C'],
  },
  {
    name: 'Aleksej Pokusevski',
    team: 'OKC',
    position: ['PF'],
  },
  {
    name: 'Trey Burke',
    team: 'Dal',
    position: ['PG', 'SG'],
  },
  {
    name: 'Dwight Powell',
    team: 'Dal',
    position: ['C'],
  },
  {
    name: 'David Nwaba',
    team: 'Hou',
    position: ['SG', 'SF'],
  },
  {
    name: 'Otto Porter Jr.',
    team: 'Orl',
    position: ['SF'],
  },
  {
    name: 'Willie Cauley-Stein',
    team: 'Dal',
    position: ['C'],
  },
  {
    name: 'Timothe Luwawu-Cabarrot',
    team: 'Bkn',
    position: ['SF'],
  },
  {
    name: 'Blake Griffin',
    team: 'Bkn',
    position: ['PF'],
  },
  {
    name: 'Wesley Matthews',
    team: 'LAL',
    position: ['SF', 'SG'],
  },
  {
    name: 'Moses Brown',
    team: 'OKC',
    position: ['C'],
  },
  {
    name: 'Tyrese Maxey',
    team: 'Phi',
    position: ['SG', 'PG'],
  },
  {
    name: 'Yuta Watanabe',
    team: 'Tor',
    position: ['SF'],
  },
  {
    name: 'Rajon Rondo',
    team: 'LAC',
    position: ['PG'],
  },
  {
    name: 'Jake Layman',
    team: 'Min',
    position: ['SF'],
  },
  {
    name: 'Hassan Whiteside',
    team: 'Sac',
    position: ['C'],
  },
  {
    name: 'Kevin Porter Jr.',
    team: 'Hou',
    position: ['SG', 'PG'],
  },
  {
    name: 'PJ Dozier',
    team: 'Den',
    position: ['PG'],
  },
  {
    name: 'Mo Bamba',
    team: 'Orl',
    position: ['C'],
  },
  {
    name: 'JJ Redick',
    team: 'Dal',
    position: ['SG'],
  },
  {
    name: 'Cam Reddish',
    team: 'Atl',
    position: ['SF', 'SG'],
  },
  {
    name: 'Grant Williams',
    team: 'Bos',
    position: ['PF'],
  },
  {
    name: 'Torrey Craig',
    team: 'Phx',
    position: ['SF'],
  },
  {
    name: 'Jusuf Nurkic',
    team: 'Por',
    position: ['C'],
  },
  {
    name: 'John Konchar',
    team: 'Mem',
    position: ['SG'],
  },
  {
    name: 'Kira Lewis Jr.',
    team: 'NO',
    position: ['PG'],
  },
  {
    name: 'Eric Paschall',
    team: 'GS',
    position: ['PF', 'C'],
  },
  {
    name: 'Ty Jerome',
    team: 'OKC',
    position: ['PG'],
  },
  {
    name: 'Moritz Wagner',
    team: 'Bos',
    position: ['C', 'PF'],
  },
  {
    name: 'Danuel House Jr.',
    team: 'Hou',
    position: ['SF', 'SG'],
  },
  {
    name: 'Willy Hernangomez',
    team: 'NO',
    position: ['C'],
  },
  {
    name: 'Dylan Windler',
    team: 'Cle',
    position: ['SF', 'SG'],
  },
  {
    name: 'Nicolas Claxton',
    team: 'Bkn',
    position: ['PF', 'C'],
  },
  {
    name: 'Saben Lee',
    team: 'Det',
    position: ['PG'],
  },
  {
    name: 'Dennis Smith Jr.',
    team: 'Det',
    position: ['PG'],
  },
  {
    name: 'Jevon Carter',
    team: 'Phx',
    position: ['PG', 'SG'],
  },
  {
    name: 'Nassir Little',
    team: 'Por',
    position: ['SF'],
  },
  {
    name: 'Gary Harris',
    team: 'Orl',
    position: ['SG'],
  },
  {
    name: 'Jalen McDaniels',
    team: 'Cha',
    position: ['PF'],
  },
  {
    name: 'Ben McLemore',
    team: 'LAL',
    position: ['SG'],
  },
  {
    name: 'Obi Toppin',
    team: 'NY',
    position: ['PF'],
  },
  {
    name: 'Michael Carter-Williams',
    team: 'Orl',
    position: ['PG'],
  },
  {
    name: 'Semi Ojeleye',
    team: 'Bos',
    position: ['PF', 'SF'],
  },
  {
    name: 'Justin Jackson',
    team: 'OKC',
    position: ['SF'],
  },
  {
    name: 'Cody Martin',
    team: 'Cha',
    position: ['SF'],
  },
  {
    name: 'Ish Smith',
    team: 'Wsh',
    position: ['PG'],
  },
  {
    name: 'Onyeka Okongwu',
    team: 'Atl',
    position: ['C'],
  },
  {
    name: 'Rodney Hood',
    team: 'Tor',
    position: ['SG', 'SF'],
  },
  {
    name: 'Malachi Flynn',
    team: 'Tor',
    position: ['PG'],
  },
  {
    name: 'George Hill',
    team: 'Phi',
    position: ['PG', 'SG'],
  },
  {
    name: 'Nemanja Bjelica',
    team: 'Mia',
    position: ['PF'],
  },
  {
    name: 'Juancho Hernangomez',
    team: 'Min',
    position: ['PF', 'SF'],
  },
  {
    name: 'Frank Kaminsky',
    team: 'Phx',
    position: ['C', 'PF'],
  },
  {
    name: 'Frank Jackson',
    team: 'Det',
    position: ['PG'],
  },
  {
    name: 'Patrick Patterson',
    team: 'LAC',
    position: ['PF'],
  },
  {
    name: 'Caleb Martin',
    team: 'Cha',
    position: ['SF'],
  },
  {
    name: 'Precious Achiuwa',
    team: 'Mia',
    position: ['PF'],
  },
  {
    name: 'Lamar Stevens',
    team: 'Cle',
    position: ['PF'],
  },
  {
    name: 'Al-Farouq Aminu',
    team: 'Chi',
    position: ['PF'],
  },
  {
    name: 'Gabe Vincent',
    team: 'Mia',
    position: ['PG'],
  },
  {
    name: 'Mike Scott',
    team: 'Phi',
    position: ['PF'],
  },
  {
    name: 'Abdel Nader',
    team: 'Phx',
    position: ['SF'],
  },
  {
    name: 'Ed Davis',
    team: 'Min',
    position: ['PF', 'C'],
  },
  {
    name: 'Langston Galloway',
    team: 'Phx',
    position: ['SG'],
  },
  {
    name: 'Troy Brown Jr.',
    team: 'Chi',
    position: ['SF'],
  },
  {
    name: 'Damyean Dotson',
    team: 'Cle',
    position: ['SG'],
  },
  {
    name: 'Thomas Bryant',
    team: 'Wsh',
    position: ['C'],
  },
  {
    name: 'Trevor Ariza',
    team: 'Mia',
    position: ['SF'],
  },
  {
    name: 'Avery Bradley',
    team: 'Hou',
    position: ['SG'],
  },
  {
    name: 'Tyler Johnson',
    team: 'Bkn',
    position: ['PG', 'SG'],
  },
  {
    name: 'Kevin Knox II',
    team: 'NY',
    position: ['SF'],
  },
  {
    name: 'Darius Miller',
    team: 'OKC',
    position: ['SF'],
  },
  {
    name: 'Thanasis Antetokounmpo',
    team: 'Mil',
    position: ['SF'],
  },
  {
    name: 'Austin Rivers',
    team: 'OKC',
    position: ['SG'],
  },
  {
    name: 'Kevin Love',
    team: 'Cle',
    position: ['PF'],
  },
  {
    name: 'Chasson Randle',
    team: 'Orl',
    position: ['PG'],
  },
  {
    name: 'Gary Clark',
    team: 'Den',
    position: ['PF'],
  },
  {
    name: 'R.J. Hampton',
    team: 'Orl',
    position: ['PG'],
  },
  {
    name: 'Javonte Green',
    team: 'Chi',
    position: ['SG'],
  },
  {
    name: 'Justin Patton',
    team: 'Hou',
    position: ['C'],
  },
  {
    name: 'Jordan Nwora',
    team: 'Mil',
    position: ['SF'],
  },
  {
    name: 'Maurice Harkless',
    team: 'Sac',
    position: ['SF'],
  },
  {
    name: 'Zeke Nnaji',
    team: 'Den',
    position: ['PF'],
  },
  {
    name: 'Harry Giles III',
    team: 'Por',
    position: ['PF', 'C'],
  },
  {
    name: 'Mychal Mulder',
    team: 'GS',
    position: ['SG'],
  },
  {
    name: 'Sekou Doumbouya',
    team: 'Det',
    position: ['PF'],
  },
  {
    name: 'Chimezie Metu',
    team: 'Sac',
    position: ['C'],
  },
  {
    name: "E'Twaun Moore",
    team: 'Phx',
    position: ['SG', 'SF'],
  },
  {
    name: 'D.J. Wilson',
    team: 'Hou',
    position: ['PF'],
  },
  {
    name: 'Paul Watson',
    team: 'Tor',
    position: ['SG'],
  },
  {
    name: 'Glenn Robinson III',
    team: 'Sac',
    position: ['SF', 'SG'],
  },
  {
    name: 'Damian Jones',
    team: 'Sac',
    position: ['C'],
  },
  {
    name: 'Killian Hayes',
    team: 'Det',
    position: ['PG'],
  },
  {
    name: 'Max Strus',
    team: 'Mia',
    position: ['SG'],
  },
  {
    name: 'Nico Mannion',
    team: 'GS',
    position: ['PG'],
  },
  {
    name: 'Jarrett Culver',
    team: 'Min',
    position: ['SG', 'SF'],
  },
  {
    name: 'Naji Marshall',
    team: 'NO',
    position: ['SF'],
  },
  {
    name: 'Miye Oni',
    team: 'Utah',
    position: ['SG'],
  },
  {
    name: 'Wes Iwundu',
    team: 'NO',
    position: ['SF'],
  },
  {
    name: 'Brandon Goodwin',
    team: 'Atl',
    position: ['PG'],
  },
  {
    name: 'Boban Marjanovic',
    team: 'Dal',
    position: ['C'],
  },
  {
    name: 'Alize Johnson',
    team: 'Bkn',
    position: ['PF'],
  },
  {
    name: 'Chris Chiozza',
    team: 'Bkn',
    position: ['PG'],
  },
  {
    name: 'Nicolo Melli',
    team: 'Dal',
    position: ['PF'],
  },
  {
    name: 'Rodney McGruder',
    team: 'Det',
    position: ['SG', 'SF'],
  },
  {
    name: 'Trey Lyles',
    team: 'SA',
    position: ['PF', 'C'],
  },
  {
    name: 'Isaac Bonga',
    team: 'Wsh',
    position: ['SF'],
  },
  {
    name: 'Luke Kornet',
    team: 'Bos',
    position: ['C', 'PF'],
  },
  {
    name: 'Aaron Nesmith',
    team: 'Bos',
    position: ['SF'],
  },
  {
    name: 'Jahlil Okafor',
    team: 'Det',
    position: ['C'],
  },
  {
    name: 'Markelle Fultz',
    team: 'Orl',
    position: ['PG'],
  },
  {
    name: 'Sam Merrill',
    team: 'Mil',
    position: ['SG'],
  },
  {
    name: 'Ryan Arcidiacono',
    team: 'Chi',
    position: ['PG'],
  },
  {
    name: 'Skylar Mays',
    team: 'Atl',
    position: ['SG'],
  },
  {
    name: 'Reggie Perry',
    team: 'Bkn',
    position: ['C'],
  },
  {
    name: 'Tremont Waters',
    team: 'Bos',
    position: ['PG'],
  },
  {
    name: 'DaQuan Jeffries',
    team: 'Hou',
    position: ['SG'],
  },
  {
    name: 'Isaiah Joe',
    team: 'Phi',
    position: ['SG'],
  },
  {
    name: 'Nathan Knight',
    team: 'Atl',
    position: ['C'],
  },
  {
    name: 'Vlatko Cancar',
    team: 'Den',
    position: ['SF'],
  },
  {
    name: 'Amir Coffey',
    team: 'LAC',
    position: ['SG'],
  },
  {
    name: 'Jerome Robinson',
    team: 'Wsh',
    position: ['SG'],
  },
  {
    name: 'Carsen Edwards',
    team: 'Bos',
    position: ['PG'],
  },
  {
    name: 'Quinn Cook',
    team: 'Cle',
    position: ['PG'],
  },
  {
    name: 'Alfonzo McKinnie',
    team: 'LAL',
    position: ['SF'],
  },
  {
    name: 'Justise Winslow',
    team: 'Mem',
    position: ['SF'],
  },
  {
    name: 'Bol Bol',
    team: 'Den',
    position: ['C'],
  },
  {
    name: 'Frank Ntilikina',
    team: 'NY',
    position: ['PG'],
  },
  {
    name: 'Jarrell Brantley',
    team: 'Utah',
    position: ['PF'],
  },
  {
    name: 'Ersan Ilyasova',
    team: 'Utah',
    position: ['PF'],
  },
  {
    name: 'Rodions Kurucs',
    team: 'Mil',
    position: ['PF', 'SF'],
  },
  {
    name: 'Tre Jones',
    team: 'SA',
    position: ['PG'],
  },
  {
    name: 'Thon Maker',
    team: 'Cle',
    position: ['C', 'PF'],
  },
  {
    name: 'Josh Green',
    team: 'Dal',
    position: ['SG'],
  },
  {
    name: 'Mason Jones',
    team: 'Phi',
    position: ['SG'],
  },
  {
    name: 'Kelan Martin',
    team: 'Ind',
    position: ['SG'],
  },
  {
    name: 'Kyle Guy',
    team: 'Sac',
    position: ['SG'],
  },
  {
    name: 'Mamadi Diakite',
    team: 'Mil',
    position: ['PF'],
  },
  {
    name: 'Matt Thomas',
    team: 'Utah',
    position: ['SG'],
  },
  {
    name: 'Paul Reed',
    team: 'Phi',
    position: ['PF'],
  },
  {
    name: 'Dewayne Dedmon',
    team: 'Mia',
    position: ['C'],
  },
  {
    name: 'KZ Okpala',
    team: 'Mia',
    position: ['SF'],
  },
  {
    name: 'Sean McDermott',
    team: 'Mem',
    position: ['SG'],
  },
  {
    name: 'Jordan Bone',
    team: 'Orl',
    position: ['PG'],
  },
  {
    name: 'Chris Silva',
    team: 'Sac',
    position: ['PF'],
  },
  {
    name: 'Brodric Thomas',
    team: 'Cle',
    position: ['SG'],
  },
  {
    name: 'Keita Bates-Diop',
    team: 'SA',
    position: ['SF'],
  },
  {
    name: 'Luka Samanic',
    team: 'SA',
    position: ['PF'],
  },
  {
    name: 'Tacko Fall',
    team: 'Bos',
    position: ['C'],
  },
  {
    name: 'T.J. Warren',
    team: 'Ind',
    position: ['SF'],
  },
  {
    name: 'Devontae Cacok',
    team: 'LAL',
    position: ['C'],
  },
  {
    name: 'Bruno Fernando',
    team: 'Atl',
    position: ['C'],
  },
  {
    name: 'Killian Tillie',
    team: 'Mem',
    position: ['C'],
  },
  {
    name: 'JaKarr Sampson',
    team: 'Ind',
    position: ['PF'],
  },
  {
    name: 'Matthew Dellavedova',
    team: 'Cle',
    position: ['PG'],
  },
  {
    name: 'Trent Forrest',
    team: 'Utah',
    position: ['SG'],
  },
  {
    name: 'Cassius Winston',
    team: 'Wsh',
    position: ['PG'],
  },
  {
    name: 'Spencer Dinwiddie',
    team: 'Bkn',
    position: ['PG', 'SG'],
  },
  {
    name: 'CJ Elleby',
    team: 'Por',
    position: ['SG'],
  },
  {
    name: 'Tyler Cook',
    team: 'Det',
    position: ['PF'],
  },
  {
    name: 'Quinndary Weatherspoon',
    team: 'SA',
    position: ['SG'],
  },
  {
    name: 'Anthony Gill',
    team: 'Wsh',
    position: ['PF'],
  },
  {
    name: 'Chandler Hutchison',
    team: 'Wsh',
    position: ['SF'],
  },
  {
    name: 'Vernon Carey Jr.',
    team: 'Cha',
    position: ['C'],
  },
  {
    name: 'Daniel Oturu',
    team: 'LAC',
    position: ['C'],
  },
  {
    name: 'Dante Exum',
    team: 'Hou',
    position: ['PG', 'SG'],
  },
  {
    name: 'Mfiondu Kabengele',
    team: 'Cle',
    position: ['PF'],
  },
  {
    name: 'Romeo Langford',
    team: 'Bos',
    position: ['SG'],
  },
  {
    name: 'Donta Hall',
    team: 'Orl',
    position: ['PF'],
  },
  {
    name: 'Jordan Bell',
    team: 'Wsh',
    position: ['C', 'PF'],
  },
  {
    name: 'Gary Payton II',
    team: 'GS',
    position: ['PG'],
  },
  {
    name: 'Jabari Parker',
    team: 'Bos',
    position: ['PF'],
  },
  {
    name: 'Norvel Pelle',
    team: 'NY',
    position: ['C'],
  },
  {
    name: 'Udoka Azubuike',
    team: 'Utah',
    position: ['C'],
  },
  {
    name: 'Elijah Hughes',
    team: 'Utah',
    position: ['SG'],
  },
  {
    name: 'Juwan Morgan',
    team: 'Utah',
    position: ['SF'],
  },
  {
    name: 'Patrick McCaw',
    team: 'Tor',
    position: ['SG'],
  },
  {
    name: 'Jared Dudley',
    team: 'LAL',
    position: ['PF', 'SF'],
  },
  {
    name: 'Axel Toupane',
    team: 'Mil',
    position: ['SG'],
  },
  {
    name: 'Rayjon Tucker',
    team: 'Phi',
    position: ['SF'],
  },
  {
    name: 'Shaquille Harrison',
    team: 'Den',
    position: ['SG', 'PG'],
  },
  {
    name: 'Nate Hinton',
    team: 'Dal',
    position: ['SG'],
  },
  {
    name: 'Adam Mokoka',
    team: 'Chi',
    position: ['SG'],
  },
  {
    name: 'Justin Robinson',
    team: 'OKC',
    position: ['PG'],
  },
  {
    name: 'Bruno Caboclo',
    team: 'Hou',
    position: ['SF'],
  },
  {
    name: 'Dakota Mathias',
    team: 'Phi',
    position: ['SG'],
  },
  {
    name: "Jahmi'us Ramsey",
    team: 'Sac',
    position: ['SG'],
  },
  {
    name: 'Frank Mason III',
    team: 'Orl',
    position: ['PG'],
  },
  {
    name: 'Nate Darling',
    team: 'Cha',
    position: ['SG'],
  },
  {
    name: 'Karim Mane',
    team: 'Orl',
    position: ['SG'],
  },
  {
    name: 'Jontay Porter',
    team: 'Mem',
    position: ['PF'],
  },
  {
    name: 'Henry Ellenson',
    team: 'Tor',
    position: ['PF'],
  },
  {
    name: 'Sindarius Thornwell',
    team: 'NO',
    position: ['SG'],
  },
  {
    name: 'Isaiah Thomas',
    team: 'NO',
    position: ['PG'],
  },
  {
    name: 'Yogi Ferrell',
    team: 'Cle',
    position: ['SG'],
  },
  {
    name: 'Jalen Smith',
    team: 'Phx',
    position: ['PF'],
  },
  {
    name: 'Cristiano Felicio',
    team: 'Chi',
    position: ['C'],
  },
  {
    name: 'Deividas Sirvydis',
    team: 'Det',
    position: ['SF'],
  },
  {
    name: 'Devon Dotson',
    team: 'Chi',
    position: ['PG'],
  },
  {
    name: 'Marques Bolden',
    team: 'Cle',
    position: ['C'],
  },
  {
    name: 'Meyers Leonard',
    team: 'OKC',
    position: ['C'],
  },
  {
    name: 'Tyrell Terry',
    team: 'Dal',
    position: ['PG'],
  },
  {
    name: 'Jalen Harris',
    team: 'Tor',
    position: ['SG'],
  },
  {
    name: 'Andre Roberson',
    team: 'Bkn',
    position: ['SG'],
  },
  {
    name: 'Tim Frazier',
    team: 'Mem',
    position: ['PG'],
  },
  {
    name: 'Marquese Chriss',
    team: 'SA',
    position: ['PF', 'C'],
  },
  {
    name: 'Justin James',
    team: 'Sac',
    position: ['SG'],
  },
  {
    name: 'Cassius Stanley',
    team: 'Ind',
    position: ['SG'],
  },
  {
    name: 'Grant Riller',
    team: 'Cha',
    position: ['PG'],
  },
  {
    name: 'Anthony Tolliver',
    team: 'Phi',
    position: ['PF'],
  },
  {
    name: 'Alen Smailagic',
    team: 'GS',
    position: ['PF'],
  },
  {
    name: 'Iman Shumpert',
    team: 'Bkn',
    position: ['SF', 'SG'],
  },
  {
    name: 'Brian Bowen II',
    team: 'Ind',
    position: ['SG'],
  },
  {
    name: 'Jared Harper',
    team: 'NY',
    position: ['PG'],
  },
  {
    name: 'Cameron Reynolds',
    team: 'SA',
    position: ['SG'],
  },
  {
    name: 'Ignas Brazdeikis',
    team: 'Phi',
    position: ['PF'],
  },
  {
    name: 'Ashton Hagans',
    team: 'Min',
    position: ['PG'],
  },
  {
    name: 'Rondae Hollis-Jefferson',
    team: 'Por',
    position: ['PF', 'SF'],
  },
  {
    name: 'Anzejs Pasecniks',
    team: 'Wsh',
    position: ['C'],
  },
  {
    name: 'Jalen Lecque',
    team: 'Ind',
    position: ['PG'],
  },
  {
    name: 'Will Magnay',
    team: 'NO',
    position: ['PF'],
  },
  {
    name: 'James Nunnally',
    team: 'NO',
    position: ['SG'],
  },
]

const getPosition = name => players.find(p => p.name === name).position

export default players
export { getPosition }
