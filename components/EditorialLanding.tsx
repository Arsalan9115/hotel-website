import Link from 'next/link';
import Navbar from '@/components/Navbar';

type EditorialLandingProps = {
  label: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  highlights: { title: string; description: string }[];
};

export default function EditorialLanding({
  label,
  title,
  description,
  image,
  imageAlt,
  highlights,
}: EditorialLandingProps) {
  return (
    <main className="min-h-screen bg-[#090909] text-white">
      <Navbar />
      <section className="relative flex min-h-[680px] items-end overflow-hidden px-6 pb-16 pt-32 md:min-h-[760px] md:px-12 md:pb-20">
        <img src={image} alt={imageAlt} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
        <div className="relative mx-auto w-full max-w-[1180px]">
          <p className="text-[10px] uppercase tracking-[0.42em] text-[#d2b780]">{label}</p>
          <h1 className="serif mt-5 max-w-[850px] text-5xl leading-[1.04] md:text-7xl">{title}</h1>
          <p className="mt-6 max-w-[590px] text-sm leading-7 text-white/75 md:text-base">
            {description}
          </p>
          <Link
            href="/rooms"
            className="mt-8 inline-flex rounded-full bg-[#d2b780] px-7 py-3.5 text-[10px] font-medium uppercase tracking-[0.22em] text-[#17130f] transition hover:bg-[#e0c994]"
          >
            Plan your stay
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-6 py-20 md:px-12 md:py-28">
        <div className="mb-10 max-w-[620px]">
          <p className="text-[10px] uppercase tracking-[0.38em] text-[#b89b64]">Thoughtfully curated</p>
          <h2 className="serif mt-4 text-4xl md:text-5xl">A little more personal.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {highlights.map((highlight, index) => (
            <article key={highlight.title} className="border-t border-white/20 py-6">
              <p className="text-[10px] tracking-[0.2em] text-[#b89b64]">
                0{index + 1}
              </p>
              <h3 className="serif mt-5 text-2xl">{highlight.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/55">{highlight.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#11100f] px-6 py-16 text-center md:px-12 md:py-20">
        <p className="text-[10px] uppercase tracking-[0.4em] text-[#d2b780]">Aurum Amalfi</p>
        <h2 className="serif mx-auto mt-4 max-w-[700px] text-4xl md:text-5xl">
          Your time here should feel entirely your own.
        </h2>
        <Link
          href="/rooms"
          className="mt-8 inline-flex rounded-full border border-white/40 px-7 py-3.5 text-[10px] uppercase tracking-[0.22em] transition hover:bg-white hover:text-black"
        >
          Explore our suites
        </Link>
      </section>
      <footer className="px-6 py-8 text-center text-[9px] uppercase tracking-[0.24em] text-white/45">
        Aurum Amalfi · Italy · A stay made personal
      </footer>
    </main>
  );
}
