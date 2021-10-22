import { NavItem } from "../types/common";
import { EstateTypeSearched } from "../localizations";

export const footerNavItems: NavItem[] = [
  {
    label: "Купить",
    children: Object.entries(EstateTypeSearched).map(([value, label]) => ({
      label,
      href: `/search?estateType=${value}&transactionType=sale`,
    })),
  },
  {
    label: "Снять",
    children: Object.entries(EstateTypeSearched).map(([value, label]) => ({
      label,
      href: `/search?estateType=${value}&transactionType=longPeriodRent`,
    })),
  },
  {
    label: "О нас",
    children: [
      {
        label: "Правила",
        href: "/about/rules",
      },
      {
        label: "Ценности",
        href: "/about/values",
      },
    ],
  },
];

export const headerNavItems: NavItem[] = [
  {
    label: "Купить",
    children: Object.entries(EstateTypeSearched).map(([value, label]) => ({
      label,
      href: `/search?estateType=${value}&transactionType=sale`,
    })),
  },
  {
    label: "Снять",
    children: Object.entries(EstateTypeSearched).map(([value, label]) => ({
      label,
      href: `/search?estateType=${value}&transactionType=longPeriodRent`,
    })),
  },
];
