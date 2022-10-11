import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import {
  TrashIcon,
  ExclamationCircleIcon,
  DotsVerticalIcon,
} from '@heroicons/react/solid'
import { Menu } from '@headlessui/react'

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

const DND = ({ items, reorderItems, fixItem, deleteItem, teams }) => (
  <DragDropContext
    onDragEnd={result => {
      // dropped outside the list
      if (!result.destination) {
        return
      }

      const newItems = reorder(
        items,
        result.source.index,
        result.destination.index
      )

      reorderItems(newItems)
    }}
  >
    <Droppable droppableId='droppable'>
      {provided => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          {items.map((item, index) => {
            const round = Math.ceil(Math.abs(items.length - index) / teams)
            const pick =
              Math.abs(items.length - index) % teams === 0
                ? teams
                : Math.abs(items.length - index) % teams
            const pickNumber = Math.abs(items.length - index)
            return (
              <Draggable
                key={index}
                draggableId={`draggable-${index}`}
                index={index}
              >
                {provided1 => {
                  const { dragHandleProps } = provided1
                  delete dragHandleProps.tabIndex
                  return (
                    <div
                      className='flex items-center space-x-4 p-2 odd:bg-skin-foreground-alt'
                      ref={provided1.innerRef}
                      {...provided1.draggableProps}
                      {...dragHandleProps}
                    >
                      <div>
                        <div className='text-center'>{pickNumber}</div>
                        <div className='text-center'>
                          ({`${round}-${pick}`})
                        </div>
                      </div>
                      <div className='flex-grow truncate'>{item}</div>
                      <Menu as='div' className='relative'>
                        <Menu.Button>
                          <DotsVerticalIcon className='h-6 w-6' />
                        </Menu.Button>
                        <Menu.Items className='absolute right-0 z-10 mt-2 flex w-56 origin-top-right space-x-4 bg-skin-background p-2'>
                          <Menu.Item>
                            <button
                              type='button'
                              onClick={() => fixItem(index)}
                            >
                              <ExclamationCircleIcon className='h-6 w-6' />
                            </button>
                          </Menu.Item>
                          <Menu.Item>
                            <button
                              type='button'
                              onClick={() => deleteItem(index)}
                            >
                              <TrashIcon className='h-6 w-6' />
                            </button>
                          </Menu.Item>
                        </Menu.Items>
                      </Menu>
                    </div>
                  )
                }}
              </Draggable>
            )
          })}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </DragDropContext>
)

export default DND
