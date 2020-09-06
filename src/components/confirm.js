import { useState } from 'react'

const Confirm = ({ action, className, children }) => {
  const [confirmAction, setConfirmAction] = useState(false)
  return (
    <>
      {confirmAction ? (
        <div className="flex space-x-2">
          <button
            className="flex justify-center flex-grow text-gray-900 rounded-lg"
            type="button"
            onClick={async () => {
              setConfirmAction(false)
              await action()
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button
            className="flex justify-center flex-grow text-gray-900 rounded-lg"
            type="button"
            onClick={() => setConfirmAction(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      ) : (
        <button
          type="button"
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
