const filterGames = ({ games, team, conferenceDivision, opponentIds }) =>
  games.filter(game =>
    conferenceDivision
      ? (game.home_team.id === team.id &&
          game.visitor_team[conferenceDivision] === team[conferenceDivision]) ||
        (game.home_team[conferenceDivision] === team[conferenceDivision] &&
          game.visitor_team.id === team.id)
      : opponentIds
      ? (game.home_team.id === team.id &&
          opponentIds.some(id => id === game.visitor_team.id)) ||
        (opponentIds.some(id => id === game.home_team.id) &&
          game.visitor_team.id === team.id)
      : true
  )

export default filterGames
