const API_URL = 'https://api.balldontlie.io'
const API_KEY = process.env.BALLDONTLIE_API_KEY

export default async (req, res) => {
  const { query } = req
  const { path, ...otherQueryParams } = query
  const pathAsString = path.join('/')
  const searchParams = new URLSearchParams(otherQueryParams)
  const otherQueryParamsAsString = searchParams.toString()
  const url = `${API_URL}/${pathAsString}${
    otherQueryParamsAsString ? `?${otherQueryParamsAsString}` : ''
  }`
  const headers = {
    Authorization: API_KEY,
  }
  const response = await fetch(url, {
    headers,
  })
  const { data } = await response.json()
  res.json({
    path,
    otherQueryParams,
    otherQueryParamsAsString,
    pathAsString,
    url,
    data,
  })
}
