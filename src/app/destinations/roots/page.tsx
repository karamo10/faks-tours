
import DestinationHero from '@/src/components/Destinations/DestinationHero';
import DestinationDetails from '@/src/components/Destinations/DestinationDetails';

export default function Page() {
  return (
    <>
      <DestinationHero
        title="Roots - James-Island / Juffureh"
        description="Come and step into 5 centuries of history tracing the origins of Kunta Kinteh the Gambian who was taken to the Americas. "
        image="/images/destinations/roots.jpg"
      />

      <DestinationDetails
        title="Full-Day Guided Historic Tour to Kunta Kinteh Island, Juffureh and Albreda"
        intro={[
          "Come and step into 5 centuries of history tracing the origins of Kunta Kinteh- the Gambian who was taken to the Americas.  This is another trip, which makes you meet fellow brothers and sisters from the Diaspora and also gives you a chance of visiting many historical sites.",
          "Your day begins early at the lively Banjul port, where you board a comfortable boat for a scenic journey along the Gambia River.",
          "Passing an Island called dog Island, you visit your first port of call, Albreda. Here you visit the freedom flag pole and also visit a slave museum. Albreda used to be a French trading post during the slavery era. There is also a church here, which was the first of its kind to be built in West Africa by the Portuguese. The essence of stopping here is to explain how the freedom flagpole came into being, which is nowadays one of our national monuments since 1970.",
          "Juffureh…From here you proceed onto Juffureh, which is the home village of the famous slave who was forced into slavery in the mid seventeenth century: Kunta Kinteh. It is on whom, Alex Haley has based the history of his best seller Roots, which retraces the events of the transatlantic slave trade.",
          "You also pay a courtesy call to the chief, at the bantaba (meeting place), where the chieftaincy rule will be explained as well as how to become a chief in The Gambia.",
          "You then come to the main highlight of the roots trip, the visit of the Kinteh clan.  On the way back to the boat a stop is made to the museum, which retraces more than 400 years of slave trade that contributed considerably to the depopulation of the continent.",
          "Following the walk to the boat we then all proceed for a 2-mile sea cruise to Kunta Kinteh Island (former James Island).  This is an Island, which used to play a vital role during the slave trade, it is located about 3 KM away from the village Albreda.  This tiny Island, which used to be six times bigger than its actual size, was used to keep slaves for 2 weeks maximum, before they were shipped to Goree Island.  The most characteristic thing is the dungeon remaining on the Island, out of 14, which were washed away by the erosion or the gunpowder explosion, which occurred in the mid eighteen century.  Those dungeons were used to punish slaves who used to rebel against the slave master; hands and legs chained, and served one meal a day in order to weaken them.",
          "After the sights and information on this other historical landmark in The Gambia, you join your boat and cruise back to Banjul port and then to your hotel."
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
          "Price: available on request",
          "Includes local guide, transportation, and entry fees",
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
        price="Available on request"
         galleryImages={[
          '/images/destination/roots/4.jpg',
           '/images/destination/roots/2.jpg',
           '/images/destination/roots/3.jpg',
          '/images/destination/roots/1.jpg',
          '/images/destination/roots/5.jpg',
        ]}
      />
    </>
  );
}
