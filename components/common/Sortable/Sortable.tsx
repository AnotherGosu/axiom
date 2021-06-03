import { useState } from "react";
import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
  DragOverlay,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import Grid from "./Grid";
import SortablePhoto from "./SortablePhoto";
import Photo from "./Photo";

interface Props {
  items: string[];
  setItems: React.Dispatch<React.SetStateAction<any[]>>;
  setFormState: (items: string[]) => void;
  handleDelete: (deletedPreview: string) => void;
}

const Sortable: React.FC<Props> = ({
  items,
  setItems,
  setFormState,
  handleDelete,
}) => {
  const [activeId, setActiveId] = useState(null);
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <SortableContext items={items} strategy={rectSortingStrategy}>
        <Grid columns={4}>
          {items.map((preview, index) => (
            <SortablePhoto
              key={preview}
              preview={preview}
              handleDelete={handleDelete}
              index={index}
            />
          ))}
        </Grid>
      </SortableContext>

      <DragOverlay adjustScale={true}>
        {activeId ? (
          <Photo
            preview={activeId}
            handleDelete={handleDelete}
            index={items.indexOf(activeId)}
          />
        ) : null}
      </DragOverlay>
    </DndContext>
  );

  function handleDragStart(event) {
    setActiveId(event.active.id);
  }

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        const movedItems = arrayMove(items, oldIndex, newIndex);
        setFormState(movedItems);

        return movedItems;
      });
    }

    setActiveId(null);
  }

  function handleDragCancel() {
    setActiveId(null);
  }
};

export default Sortable;
