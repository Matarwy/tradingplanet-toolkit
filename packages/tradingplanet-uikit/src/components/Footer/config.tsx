import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://tradingplanet.org/contact-us",
      },
      {
        label: "Blog",
        href: "https://tradingplanet.org/",
      },
      {
        label: "Home",
        href: "https://tradingplanet.io/",
      },
      {
        label: "PLANET",
        href: "https://docs.pancakeswap.finance/tokenomics/cake",
      },
      {
        label: "—",
      },
      {
        label: "Online Store",
        href: "https://store.tradingplanet.io/",
        isHighlighted: true,
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer Support",
        href: "https://tradingplanet.org/contact-us",
      },
      {
        label: "Troubleshooting",
        href: "https://docs.pancakeswap.finance/help/troubleshooting",
      },
      {
        label: "Guides",
        href: "https://docs.pancakeswap.finance/get-started",
      },
    ],
  },
  {
    label: "Developers",
    items: [

      {
        label: "Documentation",
        href: "https://docs.pancakeswap.finance",
      },
      {
        label: "Bug Bounty",
        href: "https://app.gitbook.com/@pancakeswap-1/s/pancakeswap/code/bug-bounty",
      },
      {
        label: "Audits",
        href: "https://docs.pancakeswap.finance/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited",
      },
      // {
      //   label: "Careers",
      //   href: "https://docs.pancakeswap.finance/hiring/become-a-chef",
      // },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: "Twitter",
    href: "https://twitter.com/tradingplanetx",
  },
  {
    label: "Telegram",
    icon: "Telegram",
    items: [
      {
        label: "English",
        href: "https://t.me/Tradingplanet_Group",
      },
      {
        label: "Announcements",
        href: "https://t.me/Tradingplanet_Channel",
      },
    ],
  },
  // {
  //   label: "Reddit",
  //   icon: "Reddit",
  //   href: "https://www.reddit.com/user/TradingPlanet",
  // },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
