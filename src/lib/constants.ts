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
    id: "volunteering",
    title: "Is it worth volunteering in fests?",
    content: "I could list a thousand things that will be more useful to you than being a labour at fests in college. I'm not talking about participating in competitions, that is good. But being a volunteer has zero benefits. Spend time doing something else it is not worth it.",
  },
];

export const AcademicFaqItems: FAQItem[] = [
  {
    id: "gpa-tips",
    title: "General advice to maintain GPA",
    content: "Focus on getting good marks in CA-1 & CA-2. If you manage to score 18 or above in both CAs it goes a long way as getting decent internal marks will already land you in the 7 range. Plus you've already studied units 1 to 4 thoroughly so that leaves studying unit 5 for the end term. Focusing on CAs can really help set you up to a good SGPA relatively easily",
  },
  
  {
    id: "zero-credit-course",
    title: "Do I need to pass in zero credit courses?",
    content: "Yes. You need to pass in zero credit subjects. Do not take them lightly as you will have to clear ",
  },
  {
    id: "attendance",
    title: "Does attendance matter?",
    content: "If you don't clear the attendance criteria of 75% for 3 and 4 credit courses, 15 marks will be deducted from your internals(mid sem). So if you were to score 45/50 in one subject, but you had 70% attendance, 15 marks will be deducted and you will get 30 marks officially. Now if you do not care about your GPA, not caring about those 15 marks would make sense. But that decision is yours to make. I prefer balancing my GPA above 7.5 which is not hard to do.  ",
  },
];