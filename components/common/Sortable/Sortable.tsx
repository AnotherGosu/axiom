import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import { Wrap, WrapItem } from "@chakra-ui/react";
import SortablePhoto from "./SortablePhoto";

interface Props {
  items: string[];
  setItems: React.Dispatch<React.SetStateAction<any[]>>;
  setFormState: (items: string[]) => void;
  handleDelete: (deletedPreview: string) => void;
}

export default function Sortable({
  items,
  setItems,
  setFormState,
  handleDelete,
}: Props) {
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={items} strategy={rectSortingStrategy}>
        <Wrap>
          {items.map((preview, index) => (
            <WrapItem key={preview}>
              <SortablePhoto
                preview={preview}
                handleDelete={handleDelete}
                index={index}
              />
            </WrapItem>
          ))}
        </Wrap>
      </SortableContext>
    </DndContext>
  );

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
  }
}
