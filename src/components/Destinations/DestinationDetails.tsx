import SectionHeading from "../Shared/SectionHeading";
import FAQItem from "../Shared/FAQAccordion";
import BulletList from "../Shared/BulletList";
import { DestinationDetailsProps } from "@/src/types/destination";

export default function DestinationDetails({
  title,
  intro,
  highlights,
  info,
  faqs,
}: DestinationDetailsProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          {title}
        </h2>

        {/* Intro */}
        <div className="space-y-5 text-gray-700 leading-relaxed mb-14">
          {intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* Highlights */}
        <SectionHeading>What Makes This Tour Unique</SectionHeading>
        <BulletList items={highlights} />
        <div className="h-14"></div>

        {/* Info */}
        <SectionHeading>Important Information Before You Go</SectionHeading>
        <BulletList items={info} />
        <div className="h-14"></div>

        {/* FAQ */}
        <SectionHeading>Mini FAQ</SectionHeading>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} {...faq} />
          ))}
        </div>

      </div>
    </section>
  );
}
