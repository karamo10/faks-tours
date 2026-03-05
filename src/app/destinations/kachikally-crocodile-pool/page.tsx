
import DestinationHero from "@/src/components/Destinations/DestinationHero";
import DestinationDetails from "@/src/components/Destinations/DestinationDetails";

export default function Page() {
  return (
     <>
          <DestinationHero
            title="Kathically Crocodile Pool"
            description="Discover the mystical Kachikally Crocodile Pool and Museum"
            image="/images/destinations/kathically.jpg"
          />
    
          <DestinationDetails
            title="Full-Day Guided Tour of Kachikally Crocodile Pool and Museum"
            intro={[
              "Experience the mystical allure of Kachikally Crocodile Pool and Museum with a full-day guided tour that immerses you in the rich history and cultural significance of this unique destination. Located in Bakau, just a short drive from Banjul, Kachikally is renowned for its sacred crocodile pool, which has been a site of spiritual importance for centuries.",
              "Your day begins with a scenic river journey along the Gambia River, where you can take in the lush landscapes and vibrant birdlife. Upon arrival at Kachikally, your knowledgeable guide will lead you through the fascinating history of the site, including its connection to the royal family and its role in traditional rituals. You will have the opportunity to see the sacred crocodiles up close, learn about their significance in Gambian culture, and explore the museum's exhibits that showcase artifacts and stories from the region's past.",
              "This tour offers a unique blend of nature, culture, and history, making it an unforgettable experience for all who visit. Whether you're a history enthusiast, a culture seeker, or simply looking for a memorable day out, the Kachikally Crocodile Pool and Museum tour promises a day of discovery and wonder."
            ]}
            highlights={[
              "Guided tour of the sacred crocodile pool and museum",
              "Visit the sacred Kachikally Crocodile Pool and meet friendly crocodiles",
              "Explore the Bakau craft market and fish market by the sea",
              "Learn about the cultural significance of the crocodiles and the history of the site",
            ]}
            info={[
              "Full-day tour with pick-up and drop-off at your accommodation",
              "Price: Available on request",
              "Includes local guide, transport, and entry fees",
              "Wear: comfortable clothing, sun protection, camera, and an open heart for cultural immersion",
            ]}
        faqs={[
          {
                question: "How long does the tour last?",
                answer:
                  "This is a full-day tour, usually 7–8 hours"
              },
              {
                question: "Can I touch the crocodiles at Kachikally Pool?",
                answer:
                  "Yes, the gentle crocodiles can be touched under the guidance of local caretakers."
              },
              
              {
                question: "Is the tour suitable for families?",
                answer:
                  "Yes, it’s ideal for families, couples, and solo travelers interested in authentic cultural experiences."
              },
              {
                question: "Can I take photos of the crocodiles?",
                answer:
                  "Yes, photography is allowed, but please be respectful and follow the guide’s instructions for safety."
              },
              {
                question: "What else can I see in Bakau?",
                answer:
                  "In addition to Kachikally, you can explore the vibrant Bakau craft market and the lively fish market by the sea."
              },
            ]}
            duration="Full Day"
            price="Available on request"
             galleryImages={[
              '/images/destination/kathically/1.jpg',
              '/images/destination/kathically/2.jpg',
              '/images/destination/kathically/3.jpg',
            ]}
          />
        </>
  );
}
