import DestinationHero from '@/src/components/Destinations/DestinationHero';
import DestinationDetails from '@/src/components/Destinations/DestinationDetails';

export default function Page() {
  return (
    <>
      <DestinationHero
        title="River Gambia Tour"
        description="Experience the magic of the Gambia River with a full-day guided tour that immerses you in the heart of this lush sanctuary. Nestled along the banks of the Gambia River."
        image="/images/destinations/river-gambia.jpg"
      />

      <DestinationDetails
        title="Full-Day Guided Tour of River Gambia"
        intro={[
          'Embark on a full-day Lazy Day River Cruise, gliding along the peaceful Gambia River aboard a traditional African pirogue. This tour is ideal for nature lovers, relaxation seekers, and travelers who want a slow-paced cultural escape, combining scenic landscapes, vibrant wildlife, and authentic Gambian experiences.',
          'Your journey begins at your hotel or accommodation from there we headed to Banjul Denton Bridge, where a handcrafted pirogue and its attentive crew welcome you onboard. Settle on plush deck mattresses, relax under the sun, and let the gentle river currents carry you into peace, reflection, and connection with nature.',
          'During the cruise, enjoy freshly prepared Gambian meals on deck, celebrating local culinary culture with seasonal ingredients and authentic flavors. Spot vibrant birds, fish, and lush riverbank vegetation, experiencing the thriving ecosystem of the Gambia River firsthand.',
        ]}
        highlights={[
          'Authentic African pirogue cruise along the peaceful Gambia River',
          'You will have the opportunity of swimming, sunbathing or fishing during the afternoon period.',
          'Freshly prepared Gambian meals served onboard ',
          'Spot vibrant birds, fish, and lush riverbank vegetation',
          'Relax on plush deck mattresses and soak in the serene river atmosphere',
          'Experience a slow-paced cultural escape, perfect for nature lovers and relaxation seekers',
        ]}
        info={[
          'Full-day tour with pick-up and drop-off at your accommodation',
          'Price: available on request',
          'Includes experienced crew, boat transportation, meals onboard, and deck mattresses',
          'Recommendations: wear comfortable clothing and swimwear, bring sun protection, a towel, a camera, and a sense of adventure',
          'This tour is ideal for nature lovers, relaxation seekers, and travelers who want a slow-paced cultural escape',
        ]}
        faqs={[
          {
            question: 'Can we swim in the river?',
            answer:
              'Yes, a refreshing swim is included under safe conditions.',
          },
          {
            question: 'What wildlife can I expect to see?',
            answer:
              'Spot birds, fish, and riverbank flora, and enjoy the peaceful natural scenery.',
          },
          {
            question: 'Is it suitable for travelers seeking relaxation?',
            answer:
              'Absolutely, this is a slow-paced, tranquil, and rejuvenating experience.',
          },
          {
            question: 'What meals are included?',
            answer:
              'Enjoy freshly prepared Gambian meals on deck, celebrating local culinary culture.',
          },
          {
            question: 'Is this tour suitable for families?',
            answer:
              'Yes, it’s a great option for families looking for a unique and relaxing river experience.',
          },
        ]}
        duration="Full Day"
        price="available on request"
        galleryImages={[
          '/images/destination/river-gambia/1.jpg',
          '/images/destination/river-gambia/2.jpg',
          '/images/destination/river-gambia/3.jpg',
          '/images/destination/river-gambia/4.jpg',
          '/images/destination/river-gambia/5.jpg',
          '/images/destination/river-gambia/6.jpg',
        ]}
      />
    </>
  );
}
