const getRecord = ({ team, games }) =>
  games
    .filter(game => game.status === 'Final')
    .reduce(
      (record, game) => {
        if (
          (game.home_team_score > game.visitor_team_score &&
            team.id === game.home_team.id) ||
          (game.home_team_score < game.visitor_team_score &&
            team.id === game.visitor_team.id)
        )
          record.wins += 1
        else record.losses += 1
        return record
      },
      { wins: 0, losses: 0 }
    )

export default getRecord
