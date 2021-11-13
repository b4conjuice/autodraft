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

const DND = ({ items, reorderItems, fixItem, deleteItem }) => (
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
          {items.map((item, index) => (
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
                    className='flex items-center p-2 space-x-4 odd:bg-skin-foreground-alt'
                    ref={provided1.innerRef}
                    {...provided1.draggableProps}
                    {...dragHandleProps}
                  >
                    <span className='flex-grow'>
                      {index + 1} {item}{' '}
                    </span>
                    <Menu as='div' className='relative'>
                      <Menu.Button>
                        <DotsVerticalIcon className='w-6 h-6' />
                      </Menu.Button>
                      <Menu.Items className='absolute right-0 z-10 flex w-56 p-2 mt-2 space-x-4 origin-top-right bg-skin-background'>
                        <Menu.Item>
                          <button type='button' onClick={() => fixItem(index)}>
                            <ExclamationCircleIcon className='w-6 h-6' />
                          </button>
                        </Menu.Item>
                        <Menu.Item>
                          <button
                            type='button'
                            onClick={() => deleteItem(index)}
                          >
                            <TrashIcon className='w-6 h-6' />
                          </button>
                        </Menu.Item>
                      </Menu.Items>
                    </Menu>
                  </div>
                )
              }}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </DragDropContext>
)

export default DND
