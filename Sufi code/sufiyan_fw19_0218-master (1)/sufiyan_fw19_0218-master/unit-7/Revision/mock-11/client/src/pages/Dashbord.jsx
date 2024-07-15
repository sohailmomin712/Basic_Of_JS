import { Tag, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 as uuid } from 'uuid';

const MyItems = [
  { id: uuid(), content: "First Bug" },
  { id: uuid(), content: "Second Bug" },
  { id: uuid(), content: "Third Bug" }

];

const MyItems2 = [

  { id: uuid(), content: "Fourth Bug" },
  { id: uuid(), content: "Fifth Bug" }
];



const columnsFromBackend = {
  [uuid()]: {
    name: "Critical Severity",
    color: "red",
    items: MyItems
  },
  [uuid()]: {
    name: "Major Severity",
    color: "orange",
    items: MyItems2
  },
  [uuid()]: {
    name: "Medium Severity",
    color: "blue",
    items: []
  },
  [uuid()]: {
    name: "Low Severity",
    color: "green",
    items: []
  }
};

const onDragEnd = (result, columns, setColumns) => {

  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems
      }
    });
  }
};

function Dashbord() {
  const [columns, setColumns] = useState(columnsFromBackend);

  return (
   <VStack>
<Text fontSize={"25px"} fontWeight="900" >BUG TRACKER</Text>
<div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
      
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          console.log(column.color)
          return (
            <VStack
              key={columnId}
            >
        
              <Tag padding={5} fontSize="2xl" size={"lg"} key={"md"} variant='solid' colorScheme={column.color}>
              {column.name}
              </Tag>

              <VStack style={{ margin: 8 }}>
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <VStack
                      bg={"whiteAlpha.500"}
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          border: "1px solid lightgrey",
                         borderRadius : "20px",
                          padding: 50,
                          width: 250,
                          minHeight: 500
                        }}

                      >
                        {column.items.map((item, index) => {
                          return (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided, snapshot) => {
                                return (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                      userSelect: "none",
                                      padding: 16,
                                      width : "100%",
                                      margin: "0 0 8px 0",
                                      minHeight: "50px",
                                      backgroundColor: snapshot.isDragging
                                        ? column.color
                                        : column.color,
                                      color: "white",
                                      borderRadius : "50px",
                                      ...provided.draggableProps.style
                                    }}
                                  >
                                    {item.content}
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </VStack>
                    );
                  }}
                </Droppable>
              </VStack>
            </VStack>
          );
        })}
      </DragDropContext>
    </div>
   </VStack>
  );
}

export default Dashbord;
