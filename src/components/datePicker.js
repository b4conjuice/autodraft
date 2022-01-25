import {
  ChevronLeftIcon,
  CalendarIcon,
  ChevronRightIcon,
} from '@heroicons/react/solid'
import format from 'date-fns/format'
import subDays from 'date-fns/subDays'
import addDays from 'date-fns/addDays'

const DatePicker = ({ date, setDate }) => (
  // <ul className='inline-flex transition bg-blue-700 bg-opacity-25 divide-x divide-gray-100 rounded-lg backdrop-filter backdrop-blur'>
  <ul className='inline-flex divide-x divide-gray-100 transition'>
    <li className='flex justify-center'>
      <button
        className='rounded-l-lg bg-skin-button-accent p-3 text-gray-100 hover:bg-skin-button-accent-hover disabled:pointer-events-none disabled:opacity-25'
        type='button'
        onClick={() => {
          const [year, month, day] = date.split('-').map(d => parseInt(d, 10))
          setDate(
            format(subDays(new Date(year, month - 1, day), 1), 'yyyy-MM-dd')
          )
        }}
      >
        <ChevronLeftIcon className='h-6 w-6' />
      </button>
    </li>
    <li className='flex justify-center'>
      <button
        className='bg-skin-button-accent p-3 text-gray-100 hover:bg-skin-button-accent-hover disabled:pointer-events-none disabled:opacity-25'
        type='button'
        onClick={() => {
          setDate(format(new Date(), 'yyyy-MM-dd'))
        }}
        disabled={date === format(new Date(), 'yyyy-MM-dd')}
      >
        <CalendarIcon className='h-6 w-6' />
      </button>
    </li>
    <li className='flex justify-center'>
      <button
        className='rounded-r-lg bg-skin-button-accent p-3 text-gray-100 hover:bg-skin-button-accent-hover disabled:pointer-events-none disabled:opacity-25'
        type='button'
        onClick={() => {
          const [year, month, day] = date.split('-').map(d => parseInt(d, 10))
          setDate(
            format(addDays(new Date(year, month - 1, day), 1), 'yyyy-MM-dd')
          )
        }}
      >
        <ChevronRightIcon className='h-6 w-6' />
      </button>
    </li>
  </ul>
)

export default DatePicker
