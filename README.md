# autodraft

## get player positions

go to [player rater](https://fantasy.espn.com/basketball/playerrater)

open dev tools console and run this code

```
players = Array.from(document.querySelectorAll('.Table--fixed-left > .Table__TBODY > tr')).map(el => {
 const nameEl = el.querySelector('.player-column__athlete')
 const name = nameEl.title
 const teamEl = el.querySelector('.player-column__position .playerinfo__playerteam')
 const team = teamEl.innerText
 const positionEl = el.querySelector('.player-column__position .playerinfo__playerpos')
 const position = positionEl.innerText
 return {
   name,
   team,
   position: position.split(', ')
 }
})
```

right click array and select "Copy Object"
