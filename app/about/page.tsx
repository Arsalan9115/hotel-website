import Link from 'next/link';
import Navbar from '@/components/Navbar';

const experiences = [
  {
    number: '01',
    title: 'A slower kind of morning',
    text: 'Wake to the sound of the sea. Breakfast is prepared with local fruit, warm pastries, and ingredients gathered from the coast.',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80',
  },
  {
    number: '02',
    title: 'The coast, your way',
    text: 'Set out by private boat, discover quiet coves, or let our concierge plan an unhurried afternoon in the villages nearby.',
    image:
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=80',
  },
  {
    number: '03',
    title: 'Evenings worth remembering',
    text: 'Long dinners, seasonal menus, and a table set for the sunset. Every detail is personal, never hurried.',
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=80',
  },
];

export default function About() {
  return (
    <main className="min-h-screen bg-[#090909] text-white">
      <Navbar />

      <section className="relative flex min-h-[680px] items-end overflow-hidden px-6 pb-16 pt-32 md:min-h-[780px] md:px-12 md:pb-20">
        <img
          src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=2000&q=85"
          alt="Amalfi Coast village above the sea"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/20" />
        <div className="relative mx-auto w-full max-w-[1180px]">
          <p className="text-[10px] uppercase tracking-[0.42em] text-[#d2b780]">The Aurum Amalfi story</p>
          <h1 className="serif mt-5 max-w-[800px] text-5xl leading-[1.02] md:text-7xl">
            Built into cliffs,
            <br />
            <span className="italic font-light">built for silence.</span>
          </h1>
          <p className="mt-6 max-w-[560px] text-sm leading-7 text-white/75 md:text-base">
            A private hideaway above the Amalfi Coast, made for the moments that stay with you long
            after the journey home.
          </p>
          <Link
            href="/rooms"
            className="mt-8 inline-flex rounded-full bg-[#d2b780] px-7 py-3.5 text-[10px] font-medium uppercase tracking-[0.22em] text-[#17130f] transition hover:bg-[#e0c994]"
          >
            Discover your stay
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1180px] gap-12 px-6 py-20 md:grid-cols-[0.8fr_1.2fr] md:gap-20 md:px-12 md:py-28">
        <div>
          <p className="text-[10px] uppercase tracking-[0.38em] text-[#b89b64]">A place apart</p>
          <h2 className="serif mt-5 text-4xl leading-tight md:text-5xl">
            Only six suites.
            <br />
            All the room in
            <br />
            the world.
          </h2>
        </div>
        <div className="space-y-5 self-end text-sm leading-7 text-white/60 md:text-base">
          <p>
            Aurum Amalfi was imagined as a quieter way to experience the coast. The architecture follows
            the natural lines of the cliff, opening every suite to the changing light and the
            endless Mediterranean.
          </p>
          <p>
            There is no grand lobby and no fixed itinerary. Just thoughtful service, considered
            design, and the freedom to make each day your own.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-6 pb-20 md:px-12 md:pb-28">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {[
            ['06', 'private suites'],
            ['01', 'infinity pool'],
            ['24/7', 'personal concierge'],
            ['0', 'reason to rush'],
          ].map(([value, label]) => (
            <div key={label} className="border-t border-white/20 py-5">
              <p className="serif text-3xl text-[#d2b780] md:text-4xl">{value}</p>
              <p className="mt-2 text-[9px] uppercase tracking-[0.22em] text-white/50 md:text-[10px]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#11100f] px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-[1180px]">
          <div className="mb-10 max-w-[600px]">
            <p className="text-[10px] uppercase tracking-[0.38em] text-[#b89b64]">Made of moments</p>
            <h2 className="serif mt-4 text-4xl md:text-5xl">The Aurum Amalfi experience</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {experiences.map((experience) => (
              <article key={experience.number} className="group">
                <div className="overflow-hidden">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="h-[260px] w-full object-cover transition duration-700 group-hover:scale-105 md:h-[300px]"
                  />
                </div>
                <div className="flex gap-4 border-b border-white/15 py-5">
                  <span className="pt-1 text-[10px] tracking-[0.2em] text-[#b89b64]">
                    {experience.number}
                  </span>
                  <div>
                    <h3 className="serif text-xl">{experience.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/55">{experience.text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-24 text-center md:py-32">
        <img
          src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1800&q=85"
          alt="Seaside retreat at sunset"
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#090909]/70 via-[#090909]/45 to-[#090909]/85" />
        <div className="relative mx-auto max-w-[700px]">
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#d2b780]">Your coast is waiting</p>
          <h2 className="serif mt-5 text-4xl md:text-6xl">Come find your quiet.</h2>
          <Link
            href="/rooms"
            className="mt-8 inline-flex rounded-full border border-white/50 px-7 py-3.5 text-[10px] uppercase tracking-[0.22em] transition hover:bg-white hover:text-black"
          >
            Explore suites
          </Link>
        </div>
      </section>

      <footer className="flex flex-col items-center justify-between gap-4 border-t border-white/10 px-6 py-8 text-center text-[9px] uppercase tracking-[0.24em] text-white/45 md:flex-row md:px-12">
        <Link href="/" className="serif text-sm tracking-[0.3em] text-white">
          AURUM AMALFI
        </Link>
        <p>Aurum Amalfi · Italy · A stay made personal</p>
        <Link href="/rooms" className="hover:text-white">
          Reservations
        </Link>
      </footer>
    </main>
  );
}
