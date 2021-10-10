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
