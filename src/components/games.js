import Link from 'next/link'
import format from 'date-fns/format'

const Games = ({ games, team }) => (
  <ul className='space-y-2'>
    {games.map(game => (
      <li
        key={game.id}
        className='rounded bg-skin-foreground odd:bg-skin-foreground-alt'
      >
        <Link href={`/nba/games/${game.id}`}>
          <a className='block space-x-1 p-2 text-xl text-skin-base hover:text-skin-link-accent-hover'>
            <span>{game.visitor_team.abbreviation}</span>
            <span>@</span>
            <span>{game.home_team.abbreviation}</span>
            {game.status.includes(':') && (
              <span>{format(new Date(game.status), 'h:mm a')}</span>
            )}
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
