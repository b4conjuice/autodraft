import { useState } from 'react'
import { CheckIcon, XIcon } from '@heroicons/react/solid'

const Confirm = ({ action, className, children }) => {
  const [confirmAction, setConfirmAction] = useState(false)
  return (
    <>
      {confirmAction ? (
        <div className='flex space-x-2'>
          <button
            className='flex flex-grow justify-center rounded-lg text-skin-base'
            type='button'
            onClick={async () => {
              setConfirmAction(false)
              await action()
            }}
          >
            <CheckIcon className='h-6 w-6' />
          </button>
          <button
            className='flex flex-grow justify-center rounded-lg text-skin-base'
            type='button'
            onClick={() => setConfirmAction(false)}
          >
            <XIcon className='h-6 w-6' />
          </button>
        </div>
      ) : (
        <button
          type='button'
          className={className}
          onClick={() => setConfirmAction(true)}
        >
          {children}
        </button>
      )}
    </>
  )
}

export default Confirm
