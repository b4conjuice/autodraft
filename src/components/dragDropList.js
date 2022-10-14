import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

const DragDropList = ({
  items,
  reorderItems,
  renderItem,
  itemContainerClassName,
}) => (
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
                      className={itemContainerClassName}
                      ref={provided1.innerRef}
                      {...provided1.draggableProps}
                      {...dragHandleProps}
                    >
                      {renderItem(item, index)}
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

export default DragDropList
