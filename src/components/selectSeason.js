import CURRENT_SEASON from '@/config/season'

const SelectSeason = ({ season, handleChange }) => (
  <select
    className='form-select w-full text-center'
    onChange={handleChange}
    value={season || CURRENT_SEASON}
  >
    <option>select season</option>
    {[
      '2010',
      '2011',
      '2012',
      '2013',
      '2014',
      '2015',
      '2016',
      '2017',
      '2018',
      '2019',
      '2020',
      '2021',
    ].map(s => (
      <option key={s} value={s}>
        {s}
      </option>
    ))}
  </select>
)

export default SelectSeason
