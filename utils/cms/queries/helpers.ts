import type { Estate } from "utils/types/estate";

export function structureEstateObject(object): Estate {
  const {
    metadata: { images, plan, ...metafields },
    ...rest
  } = object;

  return {
    ...metafields,
    ...rest,
    images: structureImages({ images, plan }),
  };
}

function structureImages({
  images = [],
  plan,
}: {
  images: Array<{ image: { url: string } }>;
  plan: { url: string };
}) {
  const urls = images.map((image) => image.image.url);
  const estateImages = plan?.url ? [...urls, plan.url] : urls;

  if (!estateImages.length) {
    return ["/logo.svg"];
  } else {
    return estateImages;
  }
}

export function createFilters(filterQuery: {
  [key: string]: string | string[];
}) {
  //if query is empty prevent filtering
  if (
    Object.keys(filterQuery).length === 0 &&
    filterQuery.constructor === Object
  ) {
    return {};
  }

  const fields = Object.entries(filterQuery);

  const filtersTest = fields.map((field) => {
    const [key, value] = field;
    let filterName = `metadata.${key}`;

    //handle number input (left border)
    if (key.endsWith("From")) {
      filterName = filterName.replace("From", "");
      return { [filterName]: { $gte: Number(value) } };
    }
    //handle number input (right border)
    else if (key.endsWith("To")) {
      filterName = filterName.replace("To", "");
      return { [filterName]: { $lte: Number(value) } };
    }
    //handle switch
    else if (key.startsWith("is")) {
      //balconies exception
      if (key === "isBalcony") {
        filterName = "metadata.balconies";
        return { [filterName]: { $ne: "" } };
      } else {
        return { [filterName]: Boolean(value) };
      }
    }
    //handle checboxMenu
    else if (key.endsWith("In")) {
      filterName = filterName.replace("In", "");
      const arrayValue = value.toString().split(",");
      if (key === "ceilingTypeIn") {
        //ceilingType exception
        return { [filterName]: { $in: [...arrayValue, ""] } };
      } else {
        return { [filterName]: { $in: arrayValue } };
      }
    }
    //handle select
    else {
      return { [filterName]: value };
    }
  });

  return { $and: filtersTest };

  const filters = fields.reduce((filters, field) => {
    const [key, value] = field;
    //handle number input (left border)
    if (key.endsWith("From")) {
      const filterName = key.replace("From", "_gte");
      return { ...filters, [filterName]: Number(value) };
    }
    //handle number input (right border)
    else if (key.endsWith("To")) {
      const filterName = key.replace("To", "_lte");
      return { ...filters, [filterName]: Number(value) };
    }
    //handle switch
    else if (key.startsWith("is")) {
      //balconies / loggias exception
      if (key === "isBalcony") {
        return { ...filters, balconies_not: null };
      } else {
        return { ...filters, [key]: Boolean(value) };
      }
    }
    //handle checboxMenu
    else if (key.endsWith("In")) {
      const filterName = key.replace("In", "_in");
      //ceilingType exception
      if (key === "ceilingTypeIn") {
        const selectedValues = value.toString().split(",");
        return { ...filters, [filterName]: [...selectedValues, ""] };
      } else {
        return { ...filters, [filterName]: value.toString().split(",") };
      }
    }
    //handle select
    else {
      return { ...filters, [key]: value };
    }
  }, {});

  return filters;
}
