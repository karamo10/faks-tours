import DestinationHero from "@/src/components/Destinations/DestinationHero";
import DestinationDetails from "@/src/components/Destinations/DestinationDetails";

export default function Page() {
  return (
     <>
         <DestinationHero
           title="Abuko Nature Reserve"
           description=" Discover the serene beauty of Abuko Nature Reserve. A haven for wildlife enthusiasts."
           image="/images/destinations/abuko-nature-reserve.jpg"
         />
   
         <DestinationDetails
           title="Full-Day Guided Tour of Abuko Nature Reserve"
           intro={[
             "Abuko Nature Reverse is a nature reserve in the Gambia lying south of the town of Abuko. It is a popular tourist attraction and was the country's first designated wildlife reserve.",
             "Your journey begins at your hotel or accommodation were we'll headed to Abuko Nature Reserve, the country’s first protected area. Wander along shaded forest trails, listen to exotic birds, spot playful green monkeys, and watch colorful kingfishers in action. Encounter crocodiles basking along riverbanks and visit the wildlife orphanage to see rescued hyenas and baboons, while learning about conservation efforts that protect Gambia’s unique biodiversity.",
           ]}
           highlights={[
             'Explore Abuko Nature Reserve, including forest trails, wildlife orphanage, monkeys, birds, and crocodiles',
             "Learn about conservation efforts to protect Gambia's unique biodiversity",
             "Visit the wildlife orphanage to see rescued hyenas and baboons",
              "Spot playful green monkeys and colorful kingfishers in their natural habitat",
           ]}
           info={[
             'Full-day tour with pick-up and drop-off at your accommodation',
             'Price: available on request',
             'Includes transportation, entry fee, guided tour, and wildlife encounters',
             'Ideal for nature lovers, wildlife enthusiasts, and families',
           ]}
           faqs={[
             {
               question: 'How long does the tour last?',
               answer:
                 'This is a full-day tour, usually 6–7 hours including transportation, guided tour, and wildlife encounters.',
             },
             {
               question: 'Can I see crocodiles and monkeys?',
               answer:
                 'Yes, you will observe crocodiles, monkeys, and a variety of tropical birds.',
             },
             {
               question: 'Is the tour suitable for children?',
               answer:
                 'Yes, families with children will enjoy the wildlife encounters and nature walks.',
             },
             {
               question: 'Can I take photos of the wildlife?',
               answer:
                 'Absolutely! Bring your camera to capture the incredible wildlife and scenic beauty of the reserve.',
             },
           ]}
           duration="Half Day"
           price="€60"
           galleryImages={[
             '/images/destination/abuko-nature-reserve/5.jpg',
             '/images/destination/abuko-nature-reserve/2.jpg',
             '/images/destination/abuko-nature-reserve/3.jpg',
             '/images/destination/abuko-nature-reserve/4.jpg',
           ]}
         />
       </>
  );
}
