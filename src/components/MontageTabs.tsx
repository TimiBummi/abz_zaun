'use client';

import { useState } from 'react';
import {
  MessageSquare,
  ClipboardList,
  Wrench,
  CheckCircle2,
  Check,
  CheckSquare,
  ShieldCheck,
  CalendarClock,
  Settings,
  PhoneCall,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const processSteps = [
  {
    number: 1,
    icon: MessageSquare,
    title: 'Kostenlose Beratung',
    description:
      'Wir besprechen Ihre Wünsche und besichtigen Ihr Grundstück vor Ort. Gemeinsam finden wir die optimale Lösung.',
  },
  {
    number: 2,
    icon: ClipboardList,
    title: 'Planung & Angebot',
    description:
      'Sie erhalten ein detailliertes, unverbindliches Angebot mit allen Kosten und Leistungen transparent aufgeschlüsselt.',
  },
  {
    number: 3,
    icon: Wrench,
    title: 'Professionelle Montage',
    description:
      'Unser erfahrenes Montageteam installiert Ihren Zaun oder Ihr Tor fachgerecht und termingenau.',
  },
  {
    number: 4,
    icon: CheckCircle2,
    title: 'Abnahme & Garantie',
    description:
      'Gemeinsame Endabnahme vor Ort. Sie erhalten eine umfassende Garantie auf Material und Montage.',
  },
];

const services = [
  'Zaunmontage (Doppelstab, Maschendraht, Zierzaun)',
  'Tormontage (Schiebetore, Drehflügeltore, Einzeldrehtore)',
  'Torantrieb-Installation (Ditec Gebietspartner)',
  'Sichtschutz-Montage (Sigma, Delta, Gamma)',
  'Gabionen setzen und befüllen',
  'Demontage und Entsorgung alter Zäune',
  'Reparatur und Wartung',
  'Fundamente und Pfosten setzen',
];

const checklist = [
  'Grundstücksgrenzen klären (Katasteramt oder Vermessungsplan)',
  'Zufahrt für Lieferfahrzeuge sicherstellen',
  'Nachbarn über geplante Arbeiten informieren',
  'Eventuell erforderliche Genehmigungen einholen',
  'Vorhandene Leitungen und Kabel markieren lassen',
];

const wartungsLeistungen = [
  {
    icon: Settings,
    title: 'Jährliche Inspektion',
    description:
      'Regelmäßige Prüfung aller mechanischen und elektronischen Komponenten Ihrer Toranlage — Antrieb, Laufrollen, Sicherheitselemente und Steuerung.',
  },
  {
    icon: ShieldCheck,
    title: 'Sicherheitsprüfung',
    description:
      'Kontrolle der Hinderniserkennung, Lichtschranken und Notentriegelung gemäß geltenden Normen. Prüfprotokoll auf Wunsch.',
  },
  {
    icon: CalendarClock,
    title: 'Wartungsvertrag',
    description:
      'Mit einem Wartungsvertrag profitieren Sie von festen Serviceintervallen, bevorzugter Terminvergabe und reduzierten Kosten im Störungsfall.',
  },
  {
    icon: PhoneCall,
    title: 'Entstörservice',
    description:
      'Im Störungsfall sind wir schnell vor Ort. Ersatzteile halten wir für alle gängigen Antriebe — insbesondere Ditec — direkt auf Lager.',
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

const tabs = [
  { id: 'ablauf', label: 'So läuft Ihr Projekt ab' },
  { id: 'vorbereitung', label: 'Vorbereitung' },
  { id: 'wartung', label: 'Wartungsverträge' },
] as const;

type TabId = (typeof tabs)[number]['id'];

export default function MontageTabs() {
  const [active, setActive] = useState<TabId>('ablauf');

  return (
    <div>
      {/* Tab Bar — pill/segmented style */}
      <div className="bg-white py-6 border-b border-warm-gray-dark/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex w-full max-w-xl overflow-hidden rounded-xl border border-warm-gray-dark/60 bg-warm-gray p-1 sm:w-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`flex-1 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-200 font-heading whitespace-nowrap ${
                  active === tab.id
                    ? 'bg-white text-abz-red shadow-sm'
                    : 'text-body-text hover:text-charcoal'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* ---- Tab 1: Ablauf ---- */}
          {active === 'ablauf' && (
            <div className="space-y-16">
              {/* Process Timeline */}
              <div>
                <div className="mx-auto mb-14 max-w-2xl text-center">
                  <h2 className="font-heading text-3xl font-bold text-charcoal sm:text-4xl">
                    So läuft Ihr Projekt ab
                  </h2>
                </div>
                <div className="relative mx-auto max-w-3xl">
                  <div
                    aria-hidden="true"
                    className="absolute left-8 top-0 hidden h-full w-0.5 bg-warm-gray-dark md:block"
                  />
                  <div className="space-y-10">
                    {processSteps.map((step) => {
                      const Icon = step.icon;
                      return (
                        <div key={step.number} className="relative flex gap-6">
                          <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-abz-red text-white shadow-lg shadow-abz-red/20">
                            <span className="font-heading text-xl font-bold">{step.number}</span>
                          </div>
                          <div className="flex-1 rounded-2xl border border-warm-gray-dark/50 bg-warm-white p-6">
                            <div className="mb-3 flex items-center gap-3">
                              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-abz-red/10 text-abz-red">
                                <Icon className="h-5 w-5" />
                              </div>
                              <h3 className="font-heading text-xl font-semibold text-charcoal">
                                {step.title}
                              </h3>
                            </div>
                            <p className="leading-relaxed text-body-text">{step.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Services List */}
              <div>
                <div className="mx-auto mb-12 max-w-2xl text-center">
                  <h2 className="font-heading text-3xl font-bold text-charcoal sm:text-4xl">
                    Unsere Leistungen
                  </h2>
                </div>
                <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
                  {services.map((service) => (
                    <div
                      key={service}
                      className="flex items-start gap-3 rounded-2xl border border-warm-gray-dark/50 bg-white p-5"
                    >
                      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-abz-red/10 text-abz-red">
                        <Check className="h-4 w-4" />
                      </div>
                      <span className="text-body-text">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ---- Tab 2: Vorbereitung ---- */}
          {active === 'vorbereitung' && (
            <div className="mx-auto max-w-3xl">
              <div className="mb-10 text-center">
                <h2 className="font-heading text-3xl font-bold text-charcoal sm:text-4xl">
                  Was Sie vorbereiten sollten
                </h2>
                <p className="mt-4 text-lg text-body-text">
                  Damit Ihre Montage reibungslos abläuft, hilft eine kurze Vorbereitung vorab.
                </p>
              </div>
              <div className="space-y-4">
                {checklist.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 rounded-lg border border-warm-gray-dark/50 bg-warm-white p-5"
                  >
                    <CheckSquare className="mt-0.5 h-5 w-5 shrink-0 text-abz-red" />
                    <span className="leading-relaxed text-body-text">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ---- Tab 3: Wartungsverträge ---- */}
          {active === 'wartung' && (
            <div>
              <div className="mx-auto mb-12 max-w-2xl text-center">
                <h2 className="font-heading text-3xl font-bold text-charcoal sm:text-4xl">
                  Wartungsverträge
                </h2>
                <p className="mt-4 text-lg text-body-text">
                  Elektrische Toranlagen brauchen regelmäßige Pflege — wir übernehmen das für Sie.
                </p>
              </div>
              <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
                {wartungsLeistungen.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-warm-gray-dark/50 bg-white p-6"
                    >
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-abz-red/10 text-abz-red">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-heading text-lg font-semibold text-charcoal">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-body-text">{item.description}</p>
                    </div>
                  );
                })}
              </div>
              <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-warm-gray-dark/50 bg-warm-white p-6 text-center">
                <p className="text-body-text">
                  Interesse an einem Wartungsvertrag?{' '}
                  <a
                    href="/kontakt"
                    className="font-semibold text-abz-red hover:text-abz-red-dark transition-colors"
                  >
                    Sprechen Sie uns an →
                  </a>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
