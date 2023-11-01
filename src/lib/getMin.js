const getMin = min => {
  if (!min || min === '0') return 0

  // * looks like min stat on balldontlie's api was changed to be without `:seconds`
  if (!min.includes(':')) {
    // console.error(`min ${min} is not the correct time format`)
    // return 0

    // assume that min is literally just minutes
    return Number(min)
  }
  const [m, s] = min.split(':')
  return parseInt(m, 10) * 60 + parseInt(s, 10)
}

export default getMin
