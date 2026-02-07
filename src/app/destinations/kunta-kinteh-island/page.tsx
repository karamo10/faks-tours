
import DestinationHero from '@/src/components/Destinations/DestinationHero';
import DestinationDetails from '@/src/components/Destinations/DestinationDetails';

export default function Page() {
  return (
    <>
      <DestinationHero
        title="Kunta Kinteh Island"
        description="A powerful journey through Gambian history and heritage."
        image="/images/kunta-kinteh.jpg"
      />

      <DestinationDetails
        title="Full-Day Guided Historic Tour to Kunta Kinteh Island, Juffureh and Albreda"
        intro={[
          "Join a guided Kunta Kinteh Island day tour from Banjul and embark on a deeply moving and authentic journey through some of The Gambia’s most important historical and cultural landmarks.",
          "This full-day experience goes far beyond sightseeing. It is a powerful opportunity to connect with the heart of Gambian history and culture.",
          "Your day begins early at the lively Banjul port, where you board a comfortable boat for a scenic journey along the Gambia River."
        ]}
        highlights={[
          "Scenic river journey along the Gambia River",
          "Visit Albreda and Juffureh, ancestral villages linked to Kunta Kinteh",
          "Meet descendants of Kunta Kinteh",
          "Guided visit to the Juffureh Museum",
          "Explore Kunta Kinteh Island, a UNESCO World Heritage Site"
        ]}
        info={[
          "Full-day tour with hotel pick-up and drop-off",
          "Price: €95 per person",
          "Solo traveler price: €120",
          "Includes local guide, transport, and entry fees",
          "Wear comfortable clothing and sun protection"
        ]}
        faqs={[
          {
            question: "Is Kunta Kinteh Island a UNESCO World Heritage Site?",
            answer:
              "Yes. The island and its related sites are officially recognized by UNESCO."
          },
          {
            question: "How long does the tour last?",
            answer:
              "The tour lasts between 8 and 10 hours, including river travel and village visits."
          },
          {
            question: "Is the tour suitable for families?",
            answer:
              "Yes, especially for families and students interested in history and culture."
          }
        ]}
        duration="Full Day"
        price="€90"
         galleryImages={[
          '/images/destination/kunta-kinteh-island/1.jpg',
          '/images/destination/kunta-kinteh-island/2.jpg',
          '/images/destination/kunta-kinteh-island/5.jpg',
        ]}
      />
    </>
  );
}
