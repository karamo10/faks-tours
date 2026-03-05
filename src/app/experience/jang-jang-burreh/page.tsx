import Link from 'next/link';
export default function Page() {
  return (
    <section>
      <div className="text-center py-20">
        <p className="text-clr-secondary capitalize mb-2">
          ⚠️ <br />Georgetown page is under development
        </p>
        <Link
          href={'/'}
          className="inline-flex items-center gap-1 bg-black px-3.5 py-2 rounded text-white text-sm hover:opacity-80 transition-all duration-300 cursor-pointer"
        >
          <span>Return back</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
