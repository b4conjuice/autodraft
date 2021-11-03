const filterGames = ({ games, team, conferenceDivision }) =>
  games.filter(
    game =>
      (game.home_team.id === team.id &&
        game.visitor_team[conferenceDivision] === team[conferenceDivision]) ||
      (game.home_team[conferenceDivision] === team[conferenceDivision] &&
        game.visitor_team.id === team.id)
  )

export default filterGames
