// data/testimonials.ts
export interface Testimonial {
  name: string;
  role: string;
  message: string;
  rating: number;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Tom',
    role: 'Traveler',
    message:
      'I did a 2-day private tour with Faks across The Gambia in December and enjoyed it a lot. He was very reliable and offered an affordable package. I gained great experiences and highly recommend him for anyone considering trips in The Gambia.',
    rating: 5,
    image: '/images/reviews/avater.png',
  },
  {
    name: 'Sally Newton',
    role: 'Traveler',
    message:
      'I have worked with Faks for many many years, who was our guide for my students and staff. He was diligent, hard working, friendly and made sure we all had a great experience in The Gambia.',
    rating: 5,
    image: '/images/reviews/avater.png',
  },
  {
    name: 'Alison M',
    role: 'Traveler',
    message:
      'We did a private tour with Faks to Fathala Wildlife reserve in Senegal and Kunta Kinte island. Great price compared to other tour operators and Faks was a great guide and very knowledgeable. Everything was organised well with no delays. Would definitely recommend booking a tour with Faks!',
    rating: 5,
    image: '/images/reviews/avater.png',
  },
  {
    name: ' Marcin I Iwona',
    role: 'Traveler',
    message:
      'The first time I visited the Gambia, Faks was on hand to give us a personalised tour each day - keeping us busy, interested and safe. He certainly knows his stuff! He was knowledgeable and well priced! My other two visits were just as good, with Faks suggesting different trips. Definitely recommended!',
    rating: 5,
    image: '/images/reviews/avater.png',
  },
];
