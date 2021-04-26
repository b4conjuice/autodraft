import {
  ChevronLeftIcon,
  CalendarIcon,
  ChevronRightIcon,
} from '@heroicons/react/solid'
import format from 'date-fns/format'
import subDays from 'date-fns/subDays'
import addDays from 'date-fns/addDays'

const DatePicker = ({ date, setDate }) => (
  <ul className='inline-flex transition bg-blue-700 bg-opacity-50 divide-x divide-gray-100 rounded-lg backdrop-filter backdrop-blur'>
    <li className='flex justify-center'>
      <button
        className='p-3 text-gray-100 disabled:opacity-25 disabled:pointer-events-none'
        type='button'
        onClick={() => {
          const [year, month, day] = date.split('-').map(d => parseInt(d, 10))
          setDate(
            format(subDays(new Date(year, month - 1, day), 1), 'yyyy-MM-dd')
          )
        }}
      >
        <ChevronLeftIcon className='w-6 h-6' />
      </button>
    </li>
    <li className='flex justify-center'>
      <button
        className='p-3 text-gray-100 disabled:opacity-25 disabled:pointer-events-none'
        type='button'
        onClick={() => {
          setDate(format(new Date(), 'yyyy-MM-dd'))
        }}
        disabled={date === format(new Date(), 'yyyy-MM-dd')}
      >
        <CalendarIcon className='w-6 h-6' />
      </button>
    </li>
    <li className='flex justify-center'>
      <button
        className='p-3 text-gray-100 disabled:opacity-25 disabled:pointer-events-none'
        type='button'
        onClick={() => {
          const [year, month, day] = date.split('-').map(d => parseInt(d, 10))
          setDate(
            format(addDays(new Date(year, month - 1, day), 1), 'yyyy-MM-dd')
          )
        }}
      >
        <ChevronRightIcon className='w-6 h-6' />
      </button>
    </li>
  </ul>
)

export default DatePicker
