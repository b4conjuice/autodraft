const Leaders = ({ stats, className }) => {
  const categories = ['pts', 'reb', 'ast', 'stl', 'blk', 'fg3m']
  const leaders = stats.reduce((prev, player) => {
    categories.forEach(category => {
      prev[category] =
        !prev[category] || player[category] > prev[category].stat
          ? {
              name: player.player.last_name,
              stat: player[category],
            }
          : prev[category]
    })
    return prev
  }, {})
  return (
    <ul className={className}>
      {categories.map(category => {
        const { name, stat } = leaders[category]
        return (
          <li key={category} className='flex px-2 odd:bg-skin-foreground-alt'>
            <span className='flex-grow'>{name}</span>
            <span className='font-semibold'>
              {stat} {category === 'fg3m' ? '3pm' : category}
            </span>
          </li>
        )
      })}
    </ul>
  )
}

export default Leaders
