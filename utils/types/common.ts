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
