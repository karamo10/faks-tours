export type FAQItem = {
  question: string;
  answer: string;
};

export type DestinationDetailsProps = {
  title: string;
  intro: string[];
  highlights: string[];
  info: string[];
  faqs: FAQItem[];
};
