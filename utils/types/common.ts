export interface MenuGroup {
  title: string;
  options: Option[];
}

export type Option = [string, string];

export interface NavItem {
  label: string;
  href?: string;
  children?: Array<NavItem>;
}

export interface Media {
  id: string;
  name: string;
  url: string;
  metadata: any;
}

export interface Metafield {
  type:
    | "text"
    | "number"
    | "switch"
    | "repeater"
    | "file"
    | "object"
    | "parent"
    | "repeating_item";
  title?: string;
  key?: string;
  value?: string | number | boolean;
  options?: "yes,no";
  children?: Metafield[];
  repeater_fields?: Metafield[];
  object_type?: string;
}
