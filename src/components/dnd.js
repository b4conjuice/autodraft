import {
  TrashIcon,
  ExclamationCircleIcon,
  DotsVerticalIcon,
} from '@heroicons/react/solid'
import { Menu } from '@headlessui/react'

const DraftListItem = ({
  item,
  index,
  itemsLength,
  fixItem,
  deleteItem,
  teams,
}) => {
  const round = Math.ceil(Math.abs(itemsLength - index) / teams)
  const pick =
    Math.abs(itemsLength - index) % teams === 0
      ? teams
      : Math.abs(itemsLength - index) % teams
  const pickNumber = Math.abs(itemsLength - index)
  return (
    <>
      <div>
        <div className='text-center'>{pickNumber}</div>
        <div className='text-center'>({`${round}-${pick}`})</div>
      </div>
      <div className='flex-grow truncate'>{item}</div>
      <Menu as='div' className='relative'>
        <Menu.Button>
          <DotsVerticalIcon className='h-6 w-6' />
        </Menu.Button>
        <Menu.Items className='absolute right-0 z-10 mt-2 flex w-56 origin-top-right space-x-4 bg-skin-background p-2'>
          <Menu.Item>
            <button type='button' onClick={() => fixItem(index)}>
              <ExclamationCircleIcon className='h-6 w-6' />
            </button>
          </Menu.Item>
          <Menu.Item>
            <button type='button' onClick={() => deleteItem(index)}>
              <TrashIcon className='h-6 w-6' />
            </button>
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </>
  )
}

export default DraftListItem
