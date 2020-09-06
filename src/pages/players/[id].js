import Link from 'next/link'
import { useRouter } from 'next/router'
import format from 'date-fns/format'

import Page from '@/components/page'
import Main from '@/components/main'
import Loading from '@/components/loading'
import Footer from '@/components/footer'
import SelectSeason from '@/components/selectSeason'
import { fetchNBAPlayer, fetchNBATeams } from '@/lib/api'

const GameLog = ({ stats, teams, team, season }) => {
  const { query } = useRouter()
  const showSeason =
    season && (parseInt(query.season, 10) === season.season || !query.season)
  return (
    <div className="flex w-full">
      <table className="border-r-4 border-gray-400">
        <thead>
          <tr>
            <th>game</th>
          </tr>
        </thead>
        <tbody>
          {showSeason && (
            <tr>
              <td className="py-1 text-center">season</td>
            </tr>
          )}
          {stats
            .map(({ game }) => game)
            .map(
              ({
                id,
                date,
                visitor_team_id: awayTeamId,
                home_team_id: homeTeamId,
              }) => (
                <tr key={id} className="odd:bg-gray-300">
                  <td className="py-1 overflow-hidden text-center whitespace-no-wrap">
                    <Link href="/games/[id]" as={`/games/${id}`}>
                      <a className="space-x-1 text-blue-700 hover:text-blue-600">
                        <span className="hidden md:inline">
                          {format(new Date(date.replace('Z', '')), 'M/d/yy')}
                        </span>
                        <span>
                          {homeTeamId === team
                            ? `VS ${
                                teams.find(t => t.id === awayTeamId)
                                  .abbreviation
                              }`
                            : `@ ${
                                teams.find(t => t.id === homeTeamId)
                                  .abbreviation
                              }`}
                        </span>
                      </a>
                    </Link>
                  </td>
                </tr>
              )
            )}
        </tbody>
      </table>
      <div className="flex flex-grow overflow-y-scroll">
        <table className="w-full">
          <thead>
            <tr>
              <th>min</th>
              <th>pts</th>
              <th>
                <span className="hidden md:block">fgm / fga</span>
                <span className="md:hidden">fg</span>
              </th>
              <th className="hidden md:block">fg%</th>
              <th>
                <span className="hidden md:block">ftm / fta</span>
                <span className="md:hidden">ft</span>
              </th>
              <th className="hidden md:block">ft%</th>
              <th>3pm</th>
              <th>reb</th>
              <th>ast</th>
              <th>to</th>
              <th>stl</th>
              <th>blk</th>
            </tr>
          </thead>
          <tbody>
            {showSeason && (
              <tr>
                <td className="px-1 py-1 text-center">{season.min}</td>
                <td className="px-1 py-1 text-center">{season.pts}</td>
                <td className="px-1 py-1 text-center">
                  {season.fgm}/{season.fga}
                </td>
                <td className="hidden px-1 py-1 text-center md:block">
                  {season.fg_pct}
                </td>
                <td className="px-1 py-1 text-center">
                  {season.ftm}/{season.fta}
                </td>
                <td className="hidden px-1 py-1 text-center md:block">
                  {season.ft_pct}
                </td>
                <td className="px-1 py-1 text-center">{season.fg3m}</td>
                <td className="px-1 py-1 text-center">{season.reb}</td>
                <td className="px-1 py-1 text-center">{season.ast}</td>
                <td className="px-1 py-1 text-center">{season.turnover}</td>
                <td className="px-1 py-1 text-center">{season.stl}</td>
                <td className="px-1 py-1 text-center">{season.blk}</td>
              </tr>
            )}
            {stats.map(
              ({
                id,
                min,
                pts,
                fgm,
                fga,
                fg_pct: fgp,
                ftm,
                fta,
                ft_pct: ftp,
                fg3m,
                reb,
                ast,
                turnover,
                stl,
                blk,
              }) => (
                <tr key={id} className="odd:bg-gray-300">
                  <td className="py-1 text-center">{min}</td>
                  <td className="py-1 text-center">{pts}</td>
                  <td className="py-1 text-center">
                    {fgm}/{fga}
                  </td>
                  <td className="hidden py-1 text-center md:block">
                    {(fgp / 100).toFixed(3)}
                  </td>
                  <td className="py-1 text-center">
                    {ftm}/{fta}
                  </td>
                  <td className="hidden py-1 text-center md:block">
                    {(ftp / 100).toFixed(3)}
                  </td>
                  <td className="py-1 text-center">{fg3m}</td>
                  <td className="py-1 text-center">{reb}</td>
                  <td className="py-1 text-center">{ast}</td>
                  <td className="py-1 text-center">{turnover}</td>
                  <td className="py-1 text-center">{stl}</td>
                  <td className="py-1 text-center">{blk}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const Player = () => {
  const { query, replace } = useRouter()
  const { id, season } = query
  const player = fetchNBAPlayer(id, season)
  const { data: teams } = fetchNBATeams()
  if (!player || !teams)
    return (
      <Page>
        <Loading />
      </Page>
    )
  return (
    <Page title={`${player.first_name} ${player.last_name}`}>
      <Main className="space-y-2">
        <div className="flex items-center justify-center space-x-3">
          <h1 className="text-2xl text-center">
            {player.first_name} {player.last_name} {player.position}
          </h1>
          <h2 className="text-center">
            <Link href="/teams/[id]" as={`/teams/${player.team.id}`}>
              <a className="text-blue-700 hover:text-blue-600">
                {player.team.abbreviation}
              </a>
            </Link>
          </h2>
        </div>
        <GameLog
          stats={player.stats}
          team={player.team.id}
          teams={teams}
          season={player.season}
        />
      </Main>
      <Footer>
        <SelectSeason
          season={season}
          handleChange={e => {
            replace({
              pathname: `/players/${query.id}`,
              query: { season: e.target.value },
            })
          }}
        />
      </Footer>
    </Page>
  )
}

export default Player
