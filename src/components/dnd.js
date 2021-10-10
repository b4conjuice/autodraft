import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { TrashIcon } from '@heroicons/react/solid'

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

const DND = ({ items, reorderItems, deleteItem }) => (
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
      {(provided, snapshot) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          {items.map((item, index) => (
            <Draggable
              key={index}
              draggableId={`draggable-${index}`}
              index={index}
            >
              {(provided, snapshot) => {
                const { dragHandleProps } = provided
                delete dragHandleProps.tabIndex
                return (
                  <div
                    className='flex items-center p-2 space-x-4 odd:bg-skin-foreground-alt'
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...dragHandleProps}
                  >
                    <span className='flex-grow'>
                      {index + 1}. {item}{' '}
                    </span>
                    <button type='button' onClick={() => deleteItem(index)}>
                      <TrashIcon className='w-4 h-4' />
                    </button>
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
