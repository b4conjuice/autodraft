# autodraft

## todo

- draft: hide drafted
- draft: search player
- draft: draft player using keyboard
-

## get espn player positions

- go to [projections](https://fantasy.espn.com/basketball/players/projections) ~~[player rater](https://fantasy.espn.com/basketball/playerrater)~~
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

```javascript
// alternate method in draft strategy page: https://fantasy.espn.com/basketball/editdraftstrategy?leagueId=201693

players = Array.from(
  document.querySelectorAll(
    '.players-table .Table__Scroller > .Table > .Table__TBODY > tr'
  )
).map(el => {
  const nameEl = el.querySelector('.player-column__athlete')
  const name = nameEl.textContent
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

## espn (within draft)

```javascript
players = Array.from(
  document.querySelectorAll('.fixedDataTableRowLayout_rowWrapper a.player-news')
).map(el => {
  // const nameEl = el.querySelector('.player-column__athlete')
  // const name = nameEl.title
  // const teamEl = el.querySelector(
  //   '.player-column__position .playerinfo__playerteam'
  // )
  // const team = teamEl.innerText
  // const positionEl = el.querySelector(
  //   '.player-column__position .playerinfo__playerpos'
  // )
  // const position = positionEl.innerText
  // return {
  //   name,
  //   team,
  //   position: position.split(', '),
  // }
  return el
})
```

## hashtag

- go to [projections](https://hashtagbasketball.com/fantasy-basketball-projections)

```javascript
players = Array.from(
  document.querySelectorAll('#ContentPlaceHolder1_GridView1 tr')
)
  .map(el => {
    const nameEl = el.querySelector('td:nth-child(3) a')
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

## espn team

- go to a team's page `https://fantasy.espn.com/basketball/team?leagueId=xxx&teamId=y`

```javascript
team = Array.from(
  document.querySelectorAll(
    '.Table__ScrollerWrapper .Table.Table--align-right > tbody > tr'
  )
).map(el => {
  const fg_fr = el.querySelector(
    'div[title="Field Goals Made & Field Goals Attempted"]'
  ).innerText
  const fg_pct = Number(
    el.querySelector('div[title="Field Goal Percentage"]').innerText
  )
  const ft_fr = el.querySelector(
    'div[title="Free Throws Made & Free Throws Attempted"]'
  ).innerText
  const ft_pct = Number(
    el.querySelector('div[title="Free Throw Percentage"]').innerText
  )
  const fg3m = Number(
    el.querySelector('div[title="Three Pointers Made"]').innerText
  )
  const reb = Number(el.querySelector('div[title="Rebounds"]').innerText)
  const ast = Number(el.querySelector('div[title="Assists"]').innerText)
  const stl = Number(el.querySelector('div[title="Steals"]').innerText)
  const blk = Number(el.querySelector('div[title="Blocks"]').innerText)
  const turnover = Number(el.querySelector('div[title="Turnovers"]').innerText)
  const pts = Number(el.querySelector('div[title="Points"]').innerText)

  const dataIndex = el.getAttribute('data-idx')

  const nameEl = document.querySelector(
    `.Table.Table--align-right.Table--fixed-left > tbody > tr[data-idx="${dataIndex}"] .player-column__athlete`
  )
  const name = nameEl.getAttribute('title')
  return {
    dataIndex,
    nameEl,
    name,
    ast,
    blk,
    fg3m,
    fg_pct,
    fg_fr,
    ft_pct,
    ft_fr,
    pts,
    reb,
    stl,
    turnover,
  }
})
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
