// constants.ts

export interface FAQItem {
  id: string;
  title: string;
  content: string;
  link?: {
    url: string;
    text: string;
  };
}

export const faqItems: FAQItem[] = [
  {
    id: "gpa-tips",
    title: "General advice to maintain GPA",
    content: "Focus on getting good marks in CA-1 & 2. If you manage to score 18 or above in both CAs it goes a long way as getting decent internal marks will already land you in the 7 range. Plus you've already studied units 1 to 4 thoroughly so that leaves studying unit 5 for the end term. Focusing on CAs can really help set you up to a good SGPA relatively easily",
  },
  {
    id: "volunteering",
    title: "Is it worth volunteering in fests?",
    content: "I could list a thousand things that will be more useful to you than being a labour at fests in college. I'm not talking about participating in competitions, that is good. But being a volunteer has zero benefits. Spend time doing something else it is not worth it.",
  },
];