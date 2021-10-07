import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://tp-home.vercel.app",
      },
      {
        label: "Blog",
        href: "https://tp-home.vercel.app",
      },
      {
        label: "Community",
        href: "https://tp-home.vercel.app",
      },
      {
        label: "CAKE",
        href: "https://tp-home.vercel.app",
      },
      {
        label: "Online Store",
        href: "https://tp-home.vercel.app",
        isHighlighted: true,
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support https://tp-home.vercel.app",
      },
      {
        label: "Troubleshooting",
        href: "https://tp-home.vercel.app",
      },
      {
        label: "Guides",
        href: "https://tp-home.vercel.app",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://tp-home.vercel.app",
      },
      {
        label: "Documentation",
        href: "https://tp-home.vercel.app",
      },
      {
        label: "Bug Bounty",
        href: "https://tp-home.vercel.app",
      },
      {
        label: "Audits",
        href: "https://tp-home.vercel.app",
      },
      {
        label: "Careers",
        href: "https://tp-home.vercel.app",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: "Twitter",
    href: "https://tp-home.vercel.app",
  },
  {
    label: "Telegram",
    icon: "Telegram",
    items: [
      {
        label: "English",
        href: "https://tp-home.vercel.app",
      },
    ],
  },
  {
    label: "Reddit",
    icon: "Reddit",
    href: "https://tp-home.vercel.app",
  },
  {
    label: "Instagram",
    icon: "Instagram",
    href: "https://tp-home.vercel.app",
  },
  {
    label: "Github",
    icon: "Github",
    href: "https://tp-home.vercel.app",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
