import DestinationHero from '@/src/components/Destinations/DestinationHero';
import DestinationDetails from '@/src/components/Destinations/DestinationDetails';

export default function Page() {
  return (
    <>
      <DestinationHero
        title="Fathala Wildlife Reserve"
        description="The Fathala Game Park is located at 12 kilometers of the north of The Gambian / Senegalese border in Senegal."
        image="/images/destinations/makasutu2.jpg"
      />

      <DestinationDetails
        title="Full-Day Safari at Fathala Wildlife Reserve"
        intro={[
          'Fathala Wildlife Reserve is a sanctuary for a variety of African wildlife, including giraffes, lions, zebras, rhinos, and antelopes.',
          'You will be picked up early morning from your hotels to drive to Banjul, the capital city where we join the ferry to Barra and experience the hustle and bustle with the local people.',
          'After approximately one hour cruising on The River Gambia, we reach Barra to continue driving by road through numerous villages before reaching Amdalaye/Karang the Gambian & Senegalese Border for passport formalities.',
          'From there we enter Senegal to drive for approximately 30 minutes to reach the Fathala Park.',
          'At Fathala, a 4x4 ex-army truck will be waiting for us to start our 2 hours safari within the park.',
          'In the reserve, you can enjoy the natural environment of the bush and get the chance to spot animals as zebras, rhinoceros, giraffes, monkey and many more.',
          'After the safari, we will have a delicious lunch at the restaurant of the park before departing back to the boarders to catch the ferry to Banjul.',
        ]}
        highlights={[
          'Enjoy a scenic ferry ride across the River Gambia, immersing yourself in the vibrant local culture of Barra.',
          'Experience a thrilling safari in Fathala Wildlife Reserve, spotting giraffes, lions, zebras, rhinos, and antelopes in their natural habitat.',
          'Travel in a 4x4 vehicle with an expert local guide',
          'Optional Walk with Lions experience for adventurous travelers',
        ]}
        info={[
          'Full-day tour with pick-up and drop-off at your accommodation',
          'Price: available on request',
          'Includes transportation, entry fee, safari drive, and lunch at the park restaurant',
          'Wear comfortable clothing and sun protection. Bring camera for wildlife photography.',
        ]}
        faqs={[
          {
            question:
              'Is the Fathala safari suitable for first-time safari travelers?',
            answer:
              'Yes. This full-day safari is ideal for first-time visitors who want a safe, comfortable, and authentic African safari experience without long travel times or overnight stays.',
          },
          {
            question: 'What is the Walk with Lions experience? Is it safe?',
            answer:
              'The optional Walk with Lions is a carefully managed and supervised experience, led by trained professionals. It must be booked in advance and is subject to availability.',
          },
          {
            question: 'Do I need a passport to join this tour?',
            answer:
              'Yes. A valid passport is required, as the tour crosses the border into Senegal. Border assistance is included for a smooth experience.',
          },
          {
            question: 'Is the yellow fever vaccine mandatory?',
            answer:
              'The yellow fever vaccination is recommended for entry into Senegal. Local border arrangements may be available if needed.',
          },
          {
            question: 'How long does the tour last?',
            answer:
              'This is a full-day experience, including transportation, ferry crossings, safari time, and return to your accommodation.',
          },
          {
            question: 'Is this tour suitable for families with children?',
            answer:
              'Yes. The safari is suitable for families with children, couples, and small groups looking for a high-quality wildlife experience.',
          },
        ]}
        duration="Full Day"
        price="Available on request"
        galleryImages={[
          '/images/destination/fathala-wildlife-reserve/1.jpg',
          '/images/destination/fathala-wildlife-reserve/2.jpg',
          '/images/destination/fathala-wildlife-reserve/10.jpg',
          '/images/destination/fathala-wildlife-reserve/7.jpg',
          '/images/destination/fathala-wildlife-reserve/5.jpg',
          '/images/destination/fathala-wildlife-reserve/3.jpg',
          '/images/destination/fathala-wildlife-reserve/8.jpg',
          '/images/destination/fathala-wildlife-reserve/9.jpg',
        ]}
      />
    </>
  );
}
