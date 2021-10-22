import { EstateType, Rooms } from "utils/localizations";
import type { AddEstateForm } from "utils/types/forms";
import type { Media, Metafield } from "utils/types/common";

export function createEstateTitle({
  rooms,
  estateType,
}: {
  rooms: string;
  estateType: string;
}) {
  switch (estateType) {
    case "apartment": {
      if (rooms === "studio") {
        return Rooms["studio"];
      } else if (rooms === "six") {
        return "6-комнатная квартира";
      } else {
        return `${Rooms[rooms]}-комнатная квартира`;
      }
    }
    default: {
      return EstateType[estateType];
    }
  }
}

export function createEstateMetafields({
  userId,
  images,
  plan,
  fields,
}: {
  userId: string;
  images: Media[];
  plan: Media;
  fields: Omit<AddEstateForm, "images" | "plan">;
}) {
  const imagesRepeater: Metafield = {
    type: "repeater",
    title: "images",
    key: "images",
    repeater_fields: [
      {
        title: "image",
        key: "image",
        value: "",
        type: "file",
      },
    ],
    children: images.map((image) => ({
      type: "repeating_item",
      children: [
        {
          type: "file",
          title: "image",
          key: "image",
          value: image.name,
        },
      ],
    })),
  };

  const planFile: Metafield = {
    type: "file",
    title: "plan",
    key: "plan",
    value: plan?.name || "",
  };

  const creatorObject: Metafield = {
    type: "object",
    title: "creator",
    key: "creator",
    object_type: "users",
    value: userId,
  };

  const commonMetafields = Object.entries(fields).map((field) =>
    createMetafield(field)
  );

  return [imagesRepeater, planFile, creatorObject, ...commonMetafields];
}

export function createMetafield(field: [string, any]): Metafield {
  const [title, value] = field;

  //empty number fields
  if (value === null) {
    return {
      title,
      key: title,
      type: "number",
      value,
    };
  }

  switch (typeof value) {
    case "string":
      return {
        type: "text",
        title,
        key: title,
        value,
      };
    case "number":
      return {
        type: "number",
        title,
        key: title,
        value,
      };
    case "boolean":
      return {
        type: "switch",
        title,
        key: title,
        value,
        options: "yes,no",
      };
    case "object": {
      const subValues = Object.entries(value);
      const children = subValues.map((subValue) => createMetafield(subValue));
      return {
        type: "parent",
        title,
        key: title,
        children,
      };
    }
    default:
      throw new Error("createMetafield error: incorrent field value");
  }
}
