const getMin = min => {
  if (!min || min === '0') return 0
  if (!min.includes(':')) {
    console.error(`min ${min} is not the correct time format`)
    return 0
  }
  const [m, s] = min.split(':')
  return parseInt(m, 10) * 60 + parseInt(s, 10)
}

export default getMin
