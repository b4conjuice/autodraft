import Link from 'next/link'

const Games = ({ games, team }) => (
  <ul className="space-y-2">
    {games.map(game => (
      <li key={game.id} className="bg-gray-300 odd:bg-gray-400 rounded">
        <Link href="/games/[id]" as={`/games/${game.id}`}>
          <a className="block space-x-1 text-gray-900 hover:text-blue-600 text-xl p-2">
            <span>{game.visitor_team.abbreviation}</span>
            <span>@</span>
            <span>{game.home_team.abbreviation}</span>
            {game.status.includes(':') && <span>{game.status}</span>}
            {!game.status.includes(':') && (
              <span className={game.status === 'Final' ? 'font-semibold' : ''}>
                {game.visitor_team_score}-{game.home_team_score}
              </span>
            )}
            {!game.status.includes(':') && game.status !== 'Final' && (
              <span>
                {game.status} {game.time}
              </span>
            )}
            {team &&
              game.status === 'Final' &&
              ((game.visitor_team_score > game.home_team_score &&
                game.visitor_team.id === team.id) ||
              (game.home_team_score > game.visitor_team_score &&
                game.home_team.id === team.id)
                ? 'W'
                : 'L')}
          </a>
        </Link>
      </li>
    ))}
  </ul>
)

export default Games
