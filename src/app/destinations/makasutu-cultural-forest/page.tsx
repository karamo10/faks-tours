import DestinationHero from '@/src/components/Destinations/DestinationHero';
import DestinationDetails from '@/src/components/Destinations/DestinationDetails';

export default function Page() {
  return (
    <>
      <DestinationHero
        title="Makasutu Cultural Forest"
        description="Discover the enchanting Makasutu Cultural Forest, a lush sanctuary teeming with diverse wildlife and rich cultural heritage."
        image="/images/destinations/makasutu2.jpg"
      />

      <DestinationDetails
        title="Full-Day Guided Tour of Makasutu Cultural Forest"
        intro={[
          'Experience the magic of Makasutu Cultural Forest with a full-day guided tour that immerses you in the heart of this lush sanctuary. Nestled along the banks of the Gambia River, Makasutu is a haven for nature lovers and culture enthusiasts alike.',
          'Your day begins with a scenic boat ride along the Gambia River, where you can spot vibrant birdlife and perhaps even playful monkeys swinging through the trees. Upon arrival, your knowledgeable guide will lead you on a journey through the forest’s winding trails, revealing hidden gems and sharing fascinating stories about the flora, fauna, and cultural significance of the area.',
          'Explore tranquil lagoons, encounter exotic wildlife such as monkeys, birds, and butterflies, and learn about traditional Gambian culture through visits to local villages includes (Galloya Art Village) within the forest. This tour offers a unique blend of nature and culture, making it an unforgettable experience for all who visit. Whether you’re a nature enthusiast, a culture seeker, or simply looking for a peaceful escape, the Makasutu Cultural Forest tour promises a day of discovery and wonder.',
        ]}
        highlights={[
          'Experience a traditional dugout canoe ride through the mangroves',
          'observing oyster collectors at work and spotting kingfishers, herons, and exotic birds.',
          'You will also see a demonstration on how to climb a palm tree to tap the wine and even have the chance to try to climb the palm tree yourself.',
          'Visit to Galloya Art Village includes a workshop with local artists where you can learn traditional crafts and purchase unique handmade souvenirs.',
          'You will meet a Jola fortune teller and learn to read the future with cowrie shells',
        ]}
        info={[
          'Full-day tour with pick-up and drop-off at your accommodation',
          'Price: €70 per person',
          'Includes entry fee, canoe trip, forest walks, birdwatching, and cultural activities',
          'Wear comfortable clothing and sun protection',
        ]}
        faqs={[
          {
            question: 'How long does the tour last?',
            answer:
              'This is a full-day tour, usually 8–9 hours including forest walks, canoe rides, and cultural activities.',
          },
          {
            question: 'Can I see wildlife safely?',
            answer:
              'Yes, the forest trails and canoe routes are guided and safe, with opportunities to see monkeys, birds, and other wildlife.',
          },
          {
            question: 'Are cultural activities included?',
            answer:
              'Absolutely. Workshops, fortune telling, palm wine tasting, and drumming are all part of the experience.',
          },
          {
            question: 'Can I buy local art?',
            answer:
              'Yes, you can purchase art directly from Galloya Village artists to support local creativity.',
          },
          {
            question: 'Is the tour suitable for children?',
            answer:
              'Yes, older children and families will enjoy wildlife and hands-on cultural activities.',
          },
        ]}
        duration="Half Day"
        price="€60"
        galleryImages={[
          '/images/destination/makasutu/1.jpg',
          '/images/destination/makasutu/2.jpg',
          '/images/destination/makasutu/3.jpg',
        ]}
      />
    </>
  );
}
