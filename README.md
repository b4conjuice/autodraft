# autodraft

## todo

- draft: hide drafted
- draft: search player
- draft: draft player using keyboard
-

## get espn player positions

- go to [player rater](https://fantasy.espn.com/basketball/playerrater)
- open dev tools console and run this code:

```javascript
players = Array.from(
  document.querySelectorAll('.Table--fixed-left > .Table__TBODY > tr')
).map(el => {
  const nameEl = el.querySelector('.player-column__athlete')
  const name = nameEl.title
  const teamEl = el.querySelector(
    '.player-column__position .playerinfo__playerteam'
  )
  const team = teamEl.innerText
  const positionEl = el.querySelector(
    '.player-column__position .playerinfo__playerpos'
  )
  const position = positionEl.innerText
  return {
    name,
    team,
    position: position.split(', '),
  }
})
```

output:

```
Array(50) [ {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, … ]
```

- right click Array and select "Copy Object" (on firefox)
- paste into src/lib/espnRank.js

## hashtag

- go to [projections](https://hashtagbasketball.com/fantasy-basketball-projections)

```javascript
players = Array.from(
  document.querySelectorAll('#ContentPlaceHolder1_GridView1 tr')
)
  .map(el => {
    const nameEl = el.querySelector('td:nth-child(3) span')
    if (!nameEl) return null
    const name = nameEl.innerText
    const teamEl = el.querySelector('td:nth-child(5)')
    const team = teamEl.innerText
    const positionEl = el.querySelector('td:nth-child(4)')
    const position = positionEl.innerText
    return {
      name,
      team,
      position,
    }
  })
  .filter(player => player !== null)
```

## fantasy scoreboard

- go to scoreboard for you league `https://fantasy.espn.com/basketball/league/scoreboard?leagueId=xxx`

```javascript
scoreboard = {
  categories: Array.from(
    document
      .querySelector('.Scoreboard__Column .Table .Table__THEAD tr')
      .querySelectorAll('th span')
  ).map(el => {
    // const [abbreviation, ...stats] = scores[index]
    const category = el.innerText
    return category
  }),
  matchups: Array.from(document.querySelectorAll('.Scoreboard__Row')).map(
    el => {
      const teams = Array.from(
        el.querySelectorAll(
          '.ScoreboardScoreCell__Competitors .ScoreCell__TeamName'
        )
      ).map(teamEl => {
        const team = teamEl.innerText
        return team
      })
      const scores = Array.from(
        el.querySelectorAll('.Scoreboard__Column .Table .Table__TBODY tr')
      ).map(rowEl => {
        return Array.from(rowEl.querySelectorAll('td div')).map(scoreEl => {
          const score = scoreEl.innerText
          return score
        })
      })
      return teams.map((team, index) => {
        const [abbreviation, ...stats] = scores[index]
        return {
          name: team,
          abbreviation,
          stats: stats.map(stat => Number(stat)),
        }
      })
    }
  ),
}
```

## nba standings tiebreaker

TIEBREAKER BASIS FOR TWO-WAY TIES:

    (-) Tie breaker not needed (better overall winning percentage)
    (1) Head-to-head won-lost percentage
    (2) Division leader wins tie from team not leading a division
    (3) Division won-lost percentage for teams in the same division
    (4) Conference won-lost percentage
    (5) W-L Percentage vs. Playoff teams, own conference
    (6) W-L Percentage vs. Playoff teams, other conference
    (7) Net Points, all games

TIEBREAKER BASIS FOR MULTI-WAY TIES:

    (-) Tie breaker not needed (better overall winning percentage)
    (1) Division leader wins tie from team not leading a division
    (2) Head-to-head won-lost percentage
    (3) Division won-lost percentage for teams in the same division
    (4) Conference won-lost percentage
    (5) W-L Percentage vs. Playoff teams, own conference
    (6) W-L Percentage vs. Playoff teams, other conference
    (7) Net Points, all games
