const getWinPercentage = ({ wins, losses }) =>
  wins === 0 && losses === 0 ? 0 : wins / (wins + losses)

export default getWinPercentage
