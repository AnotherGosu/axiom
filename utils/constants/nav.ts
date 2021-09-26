import { NavItem } from "../types/common";
import { EstateType } from "../localizations";

export const footerNavItems: NavItem[] = [
  {
    label: "Купить",
    children: Object.entries(EstateType).map(([value, label]) => ({
      label,
      href: `/search?estateType=${value}&transactionType=sale`,
    })),
  },
  {
    label: "Снять",
    children: Object.entries(EstateType).map(([value, label]) => ({
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
    children: Object.entries(EstateType).map(([value, label]) => ({
      label,
      href: `/search?estateType=${value}&transactionType=sale`,
    })),
  },
  {
    label: "Снять",
    children: Object.entries(EstateType).map(([value, label]) => ({
      label,
      href: `/search?estateType=${value}&transactionType=longPeriodRent`,
    })),
  },
];
