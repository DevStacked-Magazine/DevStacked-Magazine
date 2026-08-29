import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="relative section-pad">
      <div className="mx-auto max-w-7xl px-5 sm:px-12 lg:px-20">
        <div className="sheet relative px-6 py-14 sm:px-14 sm:py-18 lg:px-20 lg:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <h2 className="h-display text-[clamp(2.4rem,5.6vw,5rem)] text-ink">
                Got a project?
                <br />
                <span className="text-red-active">Open a work order.</span>
              </h2>
              <p className="mt-8 max-w-xl text-base leading-7 text-ink-dim sm:text-lg">
                Send a short note or take the two-minute brief. Either way it
                lands with the two people who will actually build it.
              </p>
            </div>

            <div className="flex flex-col gap-4 lg:col-span-4">
              <Link href="/contact" className="btn-ink w-full">
                Send a note
              </Link>
              <Link href="/project" className="btn-line w-full">
                Take the 2-minute brief
              </Link>
              <p className="stamp mt-2 self-start">Response: 1 business day</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
