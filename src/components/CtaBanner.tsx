import Link from 'next/link';

interface CtaBannerProps {
  heading: string;
  subtext: string;
  buttonLabel: string;
  buttonHref: string;
  secondaryButtonLabel?: string;
  secondaryButtonHref?: string;
}

export default function CtaBanner({
  heading,
  subtext,
  buttonLabel,
  buttonHref,
  secondaryButtonLabel,
  secondaryButtonHref,
}: CtaBannerProps) {
  return (
    <section className="bg-abz-red-muted py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">{heading}</h2>
            <p className="mt-3 text-lg text-white/80">{subtext}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={buttonHref}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-7 py-3.5 text-base font-semibold text-abz-red shadow-lg transition-all hover:bg-warm-white hover:shadow-xl"
            >
              {buttonLabel}
            </Link>
            {secondaryButtonLabel && secondaryButtonHref && (
              <Link
                href={secondaryButtonHref}
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-7 py-3.5 text-base font-semibold text-white transition-all hover:border-white/60 hover:bg-white/10"
              >
                {secondaryButtonLabel}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
