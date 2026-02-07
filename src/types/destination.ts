// src/types/destination.ts
export type DestinationDetailsProps = {
  title: string;
  intro: string[];
  highlights: string[];
  info: string[];
  faqs: {
    question: string;
    answer: string;
  }[];

  duration?: string;
  price?: string;
  bookingLink?: string;

//   🔽 ONLY images are dynamic
  galleryImages?: string[];
};

//  <div className="rounded-xl overflow-hidden">
//               <YouTubeEmbed videoId="qt--1w7gJ8o" autoplay />
//             </div>