const API_URL = 'https://api.balldontlie.io'
const API_KEY = process.env.BALLDONTLIE_API_KEY

export default async (req, res) => {
  const { query } = req
  const { path, ...otherQueryParams } = query
  const pathAsString = path.join('/')
  const gameIds = otherQueryParams['game_ids[]']
    ? otherQueryParams['game_ids[]']
    : []
  if (otherQueryParams['game_ids[]']) {
    delete otherQueryParams['game_ids[]']
  }
  const playerIds = otherQueryParams['player_ids[]']
    ? otherQueryParams['player_ids[]']
    : []
  if (otherQueryParams['player_ids[]']) {
    delete otherQueryParams['player_ids[]']
  }
  const searchParams = new URLSearchParams(otherQueryParams)
  const otherQueryParamsAsString = searchParams.toString()
  const url = `${API_URL}/${pathAsString}${
    otherQueryParamsAsString
      ? `?${otherQueryParamsAsString}${gameIds.reduce(
          (query, game) => `${query}&game_ids[]=${game}`,
          ''
        )}${playerIds.reduce(
          (query, player) => `${query}&player_ids[]=${player}`,
          ''
        )}`
      : ''
  }`
  const headers = {
    Authorization: API_KEY,
  }
  const response = await fetch(url, {
    headers,
  })
  const { data, meta } = await response.json()
  res.json({
    gameIds,
    path,
    otherQueryParams,
    otherQueryParamsAsString,
    pathAsString,
    url,
    data,
    meta,
  })
}
