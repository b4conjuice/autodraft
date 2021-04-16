import format from 'date-fns/format'
import subDays from 'date-fns/subDays'
import addDays from 'date-fns/addDays'

const DatePicker = ({ date, setDate }) => (
  <ul className="inline-flex bg-blue-700 divide-x divide-gray-100 rounded-lg">
    <li className="flex justify-center">
      <button
        className="p-3 text-gray-100 disabled:opacity-25 disabled:pointer-events-none"
        type="button"
        onClick={() => {
          const [year, month, day] = date.split('-').map(d => parseInt(d, 10))
          setDate(
            format(subDays(new Date(year, month - 1, day), 1), 'yyyy-MM-dd')
          )
        }}
      >
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-6 h-6 chevron-left"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </li>
    <li className="flex justify-center">
      <button
        className="p-3 text-gray-100 disabled:opacity-25 disabled:pointer-events-none"
        type="button"
        onClick={() => {
          setDate(format(new Date(), 'yyyy-MM-dd'))
        }}
        disabled={date === format(new Date(), 'yyyy-MM-dd')}
      >
        <svg viewBox="0 0 20 20" className="w-6 h-6 fill-current calendar">
          <path
            fillRule="evenodd"
            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </li>
    <li className="flex justify-center">
      <button
        className="p-3 text-gray-100 disabled:opacity-25 disabled:pointer-events-none"
        type="button"
        onClick={() => {
          const [year, month, day] = date.split('-').map(d => parseInt(d, 10))
          setDate(
            format(addDays(new Date(year, month - 1, day), 1), 'yyyy-MM-dd')
          )
        }}
      >
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-6 h-6 chevron-right"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </li>
  </ul>
)

export default DatePicker
