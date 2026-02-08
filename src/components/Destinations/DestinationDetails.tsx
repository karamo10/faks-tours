import SectionHeading from '../shared/SectionHeading';
import FAQAccordion from '../shared/FAQAccordion';
import BulletList from '../shared/BulletList';
import YouTubeEmbed from '../YoutubeEmbed/YoutubeEmbeded';
import { DestinationDetailsProps } from '@/src/types/destination';

const SHARED_VIDEO_URL =
  'https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=VIDEO_ID';

export default function DestinationDetails({
  title,
  intro,
  highlights,
  info,
  faqs,
  duration,
  price,
  bookingLink,
  galleryImages,
}: DestinationDetailsProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[2fr_1fr] gap-12 items-start">
          {/* LEFT */}
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              {title}
            </h2>

            <div className="space-y-5 text-gray-700 leading-relaxed mb-14">
              {intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <SectionHeading>What Makes This Tour Unique</SectionHeading>
            <BulletList items={highlights} />
            <div className="h-14" />

            <SectionHeading>Important Information Before You Go</SectionHeading>
            <BulletList items={info} />
            <div className="h-14" />

            <SectionHeading>Mini FAQ</SectionHeading>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <FAQAccordion key={i} {...faq} />
              ))}
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="lg:sticky lg:top-24 space-y-6">
            {/* Booking card */}
            {(duration || price) && (
              <div className="border rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-4">Tour Details</h3>

                <ul className="space-y-2 text-gray-700 mb-6">
                  {duration && (
                    <li>
                      <strong>Duration:</strong> {duration}
                    </li>
                  )}
                  {price && (
                    <li>
                      <strong>Price:</strong> {price}
                    </li>
                  )}
                </ul>

                {bookingLink && (
                  <a
                    href={bookingLink}
                    className="block text-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition"
                  >
                    Book This Tour
                  </a>
                )}
              </div>
            )}

            {/* Shared video – always visible */}
            <div className="rounded-xl overflow-hidden">
              <YouTubeEmbed videoId="qt--1w7gJ8o" autoplay />
            </div>

            {/* Optional gallery */}
            {galleryImages && galleryImages.length > 0 && (
              <div className="grid grid-cols-2 gap-3">
                {galleryImages.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt=""
                    className="rounded-lg object-cover h-28 w-full"
                  />
                ))}
              </div>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}
