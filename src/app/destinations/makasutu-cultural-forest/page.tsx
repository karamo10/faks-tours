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
          'An early start is needed as the drive takes just under one hour to the Makasutu cultural forest. You will be picked up from your respective hotels around 08:00 AM.',
          'Makasutu is a palm forest situated on the banks of a beautiful meandering tributary of the River Gambia (Madina Bolon), encompassing many different ecosystems including dense forest, savanna and mangrove regions. The environment encompassing this forest is home to hundreds of varieties of birds, 3 species of monkeys, monitor lizards, pygmy deer, man goose to name but a few-and if you are lucky, you may catch a glimpse of migrating baboons, that make the forest their home for a number of months each year.',
          'Upon arrival at Makasutu you will have the chance for a tea or coffee or some other form of refreshment.  A walk to the wildlife museum then follows where a small talk will be given on the work this particular museum is trying to do for the wildlife of the Gambia.',
          'First… You will take a trip down the river on “dug out” canoes while drifting down the waters seeing wildlife, fishermen and women collecting oysters from the mangrove.  This is very relaxing and you will have wonderful view of the region.',
          'Lunch… A drive back to base camp then follows where lunch will be waiting for you.  Lunch consists of some of the best African dishes in this region, including Benechin, Domada and Yassa.',
          'While you enjoy your food you can watch traditional dancers and drum troupes perform on the natural stage, under the shade of the majestic Baobab tree.',
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
          'Price: available on request',
          'Includes entry fee, canoe trip, forest walks, birdwatching, and cultural activities',
          'Wear comfortable clothing and sun protection. Bring camera for wildlife photography.',
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
        duration="Full Day"
        price="Available on request"
        galleryImages={[
          '/images/destination/makasutu/1.jpg',
          '/images/destination/makasutu/2.jpg',
          '/images/destination/makasutu/6.jpg',
          '/images/destination/makasutu/7.jpg',
          '/images/destination/makasutu/5.jpg',
          '/images/destination/makasutu/3.jpg',
          '/images/destination/makasutu/8.jpg',
          '/images/destination/makasutu/9.jpg',
        ]}
      />
    </>
  );
}
