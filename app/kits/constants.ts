import {
  BrandingAnalysis,
  BrandingCraft,
  BrandingDesign,
  BrandingExperience,
  BrandingValues,
} from "../components/cards/brandingCards";
import {
  designCopy,
  designCreation,
  designGraphic,
  designVideo,
  designWeb,
} from "../components/cards/designCards";
import {
  digitalAdvertising,
  digitalContent,
  digitalEmail,
  digitalSearch,
  digitalSocial,
  digitalWeb,
} from "../components/cards/digitalMarketingCards";
import {
  strategyAutomation,
  strategyBudgeting,
  strategyMarket,
  strategyPerformance,
  strategyPlanning,
} from "../components/cards/strategyCards";

export const navElements = [
  {
    title: "Home",
    value: "",
  },
  {
    title: "Marketing",
    value: "marketing",
  },
  {
    title: "Branding",
    value: "branding",
  },
  {
    title: "Strategy",
    value: "strategy",
  },
  {
    title: "Design",
    value: "design",
  },
  {
    title: "Contact",
    value: "contact",
  },
];

export const strategyTexts = [
  {
    id: 1,
    title: "Marketing Planning:",
    text: "Devoloping comprehensive marketing plans and strategies.",
    card: strategyPlanning,
  },
  {
    id: 2,
    title: "Market Reasearch and Analysis:",
    text: "Conducting market market research, competitor analysis, and customer segmentation.",
    card: strategyMarket,
  },
  {
    id: 3,
    title: "Marketing Automation:",
    text: "Implementing marketing automation tools and workflows.",
    card: strategyAutomation,
  },
  {
    id: 4,
    title: "Marketing Performance Evaluation:",
    text: "Assessing the effectiveness of marketing efforts and making data-driven recommendations.",
    card: strategyPerformance,
  },
  {
    id: 5,
    title: "Marketing Budgeting:",
    text: "Allocating budgets and resources for marketing initiatives.",
    card: strategyBudgeting,
  },
];

export const designTexts = [
  {
    id: 1,
    title: "Graphic Design:",
    text: "Creating visual assets for making materials.",
    card: designGraphic,
  },
  {
    id: 2,
    title: "Content Creation:",
    text: "Producing written, visual, and multimedia content for marketing compaigns.",
    card: designCreation,
  },
  {
    id: 3,
    title: "Website Design and Development:",
    text: "Designing and building websites that align with marketing goals. ",
    card: designWeb,
  },
  {
    id: 4,
    title: "Video Production:",
    text: "Creating video content for various marketing channels.",
    card: designVideo,
  },
  {
    id: 5,
    title: "Copywriting:",
    text: "Crafting compelling and persuasive copy for advertisements and marketing collateral.",
    card: designCopy,
  },
];

export const brandingTexts = [
  {
    text: "Defining a brand's values, mission, positioning",
    id: 1,
    title: "Brand Strategy",
    card: BrandingValues,
  },
  {
    text: "Designing logos, brand guidelines, and visual assets",
    id: 2,
    title: "Logo and Visual Identity",
    card: BrandingDesign,
  },
  {
    text: "Crafting the brands messaging and communication strategy",
    id: 3,
    title: "Brand Messaging",
    card: BrandingCraft,
  },
  {
    text: "Ensuring a consistent brand experience across all touchpoints",
    id: 4,
    title: "Brand Experience",
    card: BrandingExperience,
  },
  {
    text: "Researching the market and competition to inform branding decisions",
    id: 5,
    title: "Market Research & Competitor Analysis",
    card: BrandingAnalysis,
  },
];

export const digitalTexts = [
  {
    text: "Includes both SEO (organic search optimization) and paid search advertising (PPC).",
    id: 1,
    title: "Search Engine Marketing",
    card: digitalSearch,
  },
  {
    text: "Managing and advertising on social media platforms",
    id: 2,
    title: "Social Media Marketing",
    card: digitalSocial,
  },
  {
    text: "Creating and distributing valuable content to engage and attract audience",
    id: 3,
    title: "Content Marketing",
    card: digitalContent,
  },
  {
    text: "Sending targeted email campaigns to nurture leads and retain customers",
    id: 4,
    title: "Email Marketing",
    card: digitalEmail,
  },
  {
    text: "Tracking website and campaign performance using tools like Google Analytics",
    id: 5,
    title: "Web Analytics & Reporting",
    card: digitalWeb,
  },
  {
    text: "Managing digital ad campaigns on various platforms, such as Google Ads Facebook ads, and more",
    id: 6,
    title: "Online Advertising",
    card: digitalAdvertising,
  },
];
