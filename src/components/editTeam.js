const EditTeam = ({ values, handleChange, errors }) => {
  const { name, teams, rounds, order, slots, ir } = values
  return (
    <form className='space-y-2'>
      <input
        placeholder='name'
        className='form-input w-full text-center'
        type='text'
        name='name'
        value={name}
        onChange={handleChange}
      />
      {errors.name && <div className='text-red-700'>{errors.name}</div>}
      <div className='flex space-x-2'>
        <div className='w-1/2 space-y-2'>
          <h2>league settings</h2>
          <label htmlFor='teams'>
            <span>teams</span>
            <input
              className='form-input w-full'
              type='number'
              name='teams'
              value={teams}
              onChange={handleChange}
            />
          </label>
          <label htmlFor='rounds'>
            <span>rounds</span>
            <input
              className='form-input w-full'
              type='number'
              name='rounds'
              value={rounds}
              onChange={handleChange}
            />
          </label>
          <label htmlFor='order'>
            <span>order</span>
            <input
              className='form-input w-full'
              type='number'
              name='order'
              value={order}
              min='1'
              max={rounds}
              onChange={handleChange}
            />
          </label>
          <label htmlFor='ir'>
            <span>ir</span>
            <input
              className='form-input w-full'
              type='number'
              name='ir'
              value={ir}
              min='1'
              max='4'
              onChange={handleChange}
            />
          </label>
        </div>
        <div className='w-1/2'>
          <h2>slots</h2>
          {[...Array(rounds).keys()]
            .map(x => x)
            .map(slot => (
              <div key={slot}>
                <label htmlFor={`slots-${slot}`}>
                  {slot + 1}.
                  <select
                    className='form-select w-full'
                    name={`slots-${slot}`}
                    value={slots[slot] || 'B'}
                    onChange={handleChange}
                  >
                    {['PG', 'SG', 'SF', 'PF', 'C', 'G', 'F', 'U', 'B'].map(
                      option => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      )
                    )}
                  </select>
                </label>
              </div>
            ))}
        </div>
      </div>
    </form>
  )
}

export default EditTeam
