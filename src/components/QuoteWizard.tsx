'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Grid3X3,
  DoorOpen,
  DoorClosed,
  Eye,
  Boxes,
  Fence,
  FlowerIcon,
  Cog,
  HelpCircle,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  CheckCircle,
  Loader2,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface FormData {
  categories: string[];
  length: string;
  height: string;
  installation: string;
  details: string;
  salutation: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  message: string;
  privacy: boolean;
}

const initialFormData: FormData = {
  categories: [],
  length: '',
  height: '',
  installation: '',
  details: '',
  salutation: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  street: '',
  city: '',
  message: '',
  privacy: false,
};

/* ------------------------------------------------------------------ */
/*  Product categories for step 1                                      */
/* ------------------------------------------------------------------ */

const productCategories = [
  { id: 'doppelstabmattenzaun', label: 'Doppelstabmattenzaun', icon: Grid3X3 },
  { id: 'schiebetor', label: 'Schiebetor', icon: DoorOpen },
  { id: 'drehfluegeltor', label: 'Drehflügeltor', icon: DoorClosed },
  { id: 'sichtschutz', label: 'Sichtschutz', icon: Eye },
  { id: 'gabionen', label: 'Gabionen', icon: Boxes },
  { id: 'maschendrahtzaun', label: 'Maschendrahtzaun', icon: Fence },
  { id: 'zierzaun', label: 'Zierzaun', icon: FlowerIcon },
  { id: 'torantrieb', label: 'Torantrieb', icon: Cog },
  { id: 'sonstiges', label: 'Sonstiges', icon: HelpCircle },
];

/* ------------------------------------------------------------------ */
/*  Select / input options                                             */
/* ------------------------------------------------------------------ */

const lengthOptions = ['Bis 10m', '10-25m', '25-50m', 'Über 50m', 'Noch unklar'];
const heightOptions = ['80 cm', '100 cm', '120 cm', '140 cm', '160 cm', '180 cm', '200 cm', 'Andere'];
const installationOptions = ['Ja, mit Montage', 'Nein, nur Material', 'Noch unklar'];
const salutationOptions = ['Herr', 'Frau', 'Divers'];

/* ------------------------------------------------------------------ */
/*  Shared input class                                                 */
/* ------------------------------------------------------------------ */

const inputClass =
  'w-full rounded-lg border border-warm-gray-dark bg-white px-4 py-3 text-charcoal placeholder:text-warm-brown focus:border-abz-red focus:outline-none focus:ring-2 focus:ring-abz-red/20 min-h-12';

const selectClass =
  'w-full appearance-none rounded-lg border border-warm-gray-dark bg-white px-4 py-3 pr-10 text-charcoal focus:border-abz-red focus:outline-none focus:ring-2 focus:ring-abz-red/20 min-h-12';

/* ------------------------------------------------------------------ */
/*  Step indicator                                                     */
/* ------------------------------------------------------------------ */

function StepIndicator({ current }: { current: number }) {
  const steps = [1, 2, 3, 4];
  return (
    <div className="mb-10 flex items-center justify-center gap-0">
      {steps.map((step, i) => (
        <div key={step} className="flex items-center">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
              step <= current
                ? 'bg-abz-red text-white'
                : 'bg-warm-gray-dark text-warm-brown'
            }`}
          >
            {step < current ? (
              <CheckCircle className="h-5 w-5" />
            ) : (
              step
            )}
          </div>
          {i < steps.length - 1 && (
            <div
              className={`h-0.5 w-8 sm:w-12 transition-colors ${
                step < current ? 'bg-abz-red' : 'bg-warm-gray-dark'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export default function QuoteWizard() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  /* ---- helpers ---- */

  function update<K extends keyof FormData>(key: K, value: FormData[K]) {
    setFormData((prev) => ({ ...prev, [key]: value }));
    // Clear error for this field when user changes it
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  }

  function toggleCategory(id: string) {
    setFormData((prev) => ({
      ...prev,
      categories: prev.categories.includes(id)
        ? prev.categories.filter((c) => c !== id)
        : [...prev.categories, id],
    }));
    if (errors.categories) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.categories;
        return next;
      });
    }
  }

  /* ---- validation ---- */

  function validateStep(s: number): boolean {
    const errs: Record<string, string> = {};

    if (s === 1) {
      if (formData.categories.length === 0) {
        errs.categories = 'Bitte wählen Sie mindestens eine Kategorie.';
      }
    }

    if (s === 3) {
      if (!formData.firstName.trim()) errs.firstName = 'Pflichtfeld';
      if (!formData.lastName.trim()) errs.lastName = 'Pflichtfeld';
      if (!formData.email.trim()) {
        errs.email = 'Pflichtfeld';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errs.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
      }
      if (!formData.phone.trim()) errs.phone = 'Pflichtfeld';
      if (!formData.privacy) errs.privacy = 'Bitte stimmen Sie der Datenschutzerklärung zu.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function goNext() {
    if (validateStep(step)) {
      setStep((s) => s + 1);
    }
  }

  function goBack() {
    setStep((s) => s - 1);
  }

  async function handleSubmit() {
    if (!validateStep(3)) return;

    setSubmitting(true);

    // Build payload
    const payload = {
      categories: formData.categories,
      length: formData.length,
      height: formData.height,
      installation: formData.installation,
      details: formData.details,
      salutation: formData.salutation,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      street: formData.street,
      city: formData.city,
      message: formData.message,
    };

    // For now, log to console. PHP handler will be connected later.
    console.log('Form submission:', payload);

    // Simulate brief delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    setSubmitting(false);
    setStep(4);
  }

  /* ---- label helper for confirmation ---- */

  function getCategoryLabel(id: string) {
    return productCategories.find((c) => c.id === id)?.label ?? id;
  }

  /* ================================================================ */
  /*  RENDER                                                           */
  /* ================================================================ */

  return (
    <div className="w-full">
      <StepIndicator current={step} />

      {/* -------------------------------------------------------------- */}
      {/* Step 1: Category Selection                                     */}
      {/* -------------------------------------------------------------- */}
      {step === 1 && (
        <div className="animate-in fade-in duration-300">
          <h2 className="font-heading text-2xl font-bold text-charcoal sm:text-3xl">
            Was möchten Sie anfragen?
          </h2>
          <p className="mt-2 text-body-text">
            Wählen Sie eine oder mehrere Kategorien aus.
          </p>

          {errors.categories && (
            <p className="mt-3 text-sm text-abz-red">{errors.categories}</p>
          )}

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {productCategories.map(({ id, label, icon: Icon }) => {
              const selected = formData.categories.includes(id);
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => toggleCategory(id)}
                  className={`flex flex-col items-center gap-2 rounded-xl border-2 p-4 text-center transition-all sm:p-5 ${
                    selected
                      ? 'border-abz-red bg-abz-red/5 text-abz-red'
                      : 'border-warm-gray-dark bg-white text-charcoal hover:border-charcoal/30'
                  }`}
                >
                  <Icon className={`h-7 w-7 ${selected ? 'text-abz-red' : 'text-warm-brown'}`} />
                  <span className="text-sm font-medium leading-tight">{label}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-8 flex justify-end">
            <button
              type="button"
              onClick={goNext}
              disabled={formData.categories.length === 0}
              className="inline-flex items-center gap-2 rounded-lg bg-abz-red px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-abz-red/25 transition-all hover:bg-abz-red-dark disabled:cursor-not-allowed disabled:opacity-50"
            >
              Weiter
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* -------------------------------------------------------------- */}
      {/* Step 2: Project Details                                        */}
      {/* -------------------------------------------------------------- */}
      {step === 2 && (
        <div className="animate-in fade-in duration-300">
          <h2 className="font-heading text-2xl font-bold text-charcoal sm:text-3xl">
            Details zu Ihrem Projekt
          </h2>
          <p className="mt-2 text-body-text">
            Helfen Sie uns, Ihr Projekt besser zu verstehen.
          </p>

          <div className="mt-8 space-y-5">
            {/* Length */}
            <div>
              <label htmlFor="length" className="mb-1.5 block text-sm font-medium text-charcoal">
                Ungefähre Länge
              </label>
              <div className="relative">
                <select
                  id="length"
                  value={formData.length}
                  onChange={(e) => update('length', e.target.value)}
                  className={selectClass}
                >
                  <option value="">Bitte wählen</option>
                  {lengthOptions.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-warm-brown" />
              </div>
            </div>

            {/* Height */}
            <div>
              <label htmlFor="height" className="mb-1.5 block text-sm font-medium text-charcoal">
                Ungefähre Höhe
              </label>
              <div className="relative">
                <select
                  id="height"
                  value={formData.height}
                  onChange={(e) => update('height', e.target.value)}
                  className={selectClass}
                >
                  <option value="">Bitte wählen</option>
                  {heightOptions.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-warm-brown" />
              </div>
            </div>

            {/* Installation */}
            <div>
              <label htmlFor="installation" className="mb-1.5 block text-sm font-medium text-charcoal">
                Montage gewünscht?
              </label>
              <div className="relative">
                <select
                  id="installation"
                  value={formData.installation}
                  onChange={(e) => update('installation', e.target.value)}
                  className={selectClass}
                >
                  <option value="">Bitte wählen</option>
                  {installationOptions.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-warm-brown" />
              </div>
            </div>

            {/* Details */}
            <div>
              <label htmlFor="details" className="mb-1.5 block text-sm font-medium text-charcoal">
                Zusätzliche Informationen{' '}
                <span className="text-warm-brown">(optional)</span>
              </label>
              <textarea
                id="details"
                rows={3}
                value={formData.details}
                onChange={(e) => update('details', e.target.value)}
                placeholder="z.B. Gefälle, Bodenbeschaffenheit, besondere Wünsche..."
                className={inputClass}
              />
            </div>
          </div>

          <div className="mt-8 flex justify-between">
            <button
              type="button"
              onClick={goBack}
              className="inline-flex items-center gap-2 rounded-lg border-2 border-warm-gray-dark px-6 py-3 text-base font-semibold text-charcoal transition-all hover:border-charcoal/40 hover:bg-warm-gray"
            >
              <ChevronLeft className="h-4 w-4" />
              Zurück
            </button>
            <button
              type="button"
              onClick={goNext}
              className="inline-flex items-center gap-2 rounded-lg bg-abz-red px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-abz-red/25 transition-all hover:bg-abz-red-dark"
            >
              Weiter
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* -------------------------------------------------------------- */}
      {/* Step 3: Contact Details                                        */}
      {/* -------------------------------------------------------------- */}
      {step === 3 && (
        <div className="animate-in fade-in duration-300">
          <h2 className="font-heading text-2xl font-bold text-charcoal sm:text-3xl">
            Ihre Kontaktdaten
          </h2>
          <p className="mt-2 text-body-text">
            Damit wir Ihnen ein individuelles Angebot erstellen können.
          </p>

          <div className="mt-8 space-y-5">
            {/* Salutation */}
            <div>
              <label htmlFor="salutation" className="mb-1.5 block text-sm font-medium text-charcoal">
                Anrede
              </label>
              <div className="relative">
                <select
                  id="salutation"
                  value={formData.salutation}
                  onChange={(e) => update('salutation', e.target.value)}
                  className={selectClass}
                >
                  <option value="">Bitte wählen</option>
                  {salutationOptions.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-warm-brown" />
              </div>
            </div>

            {/* Name row */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="mb-1.5 block text-sm font-medium text-charcoal">
                  Vorname <span className="text-abz-red">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => update('firstName', e.target.value)}
                  placeholder="Max"
                  className={`${inputClass} ${errors.firstName ? 'border-abz-red' : ''}`}
                />
                {errors.firstName && <p className="mt-1 text-sm text-abz-red">{errors.firstName}</p>}
              </div>
              <div>
                <label htmlFor="lastName" className="mb-1.5 block text-sm font-medium text-charcoal">
                  Nachname <span className="text-abz-red">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => update('lastName', e.target.value)}
                  placeholder="Mustermann"
                  className={`${inputClass} ${errors.lastName ? 'border-abz-red' : ''}`}
                />
                {errors.lastName && <p className="mt-1 text-sm text-abz-red">{errors.lastName}</p>}
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-charcoal">
                  E-Mail <span className="text-abz-red">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => update('email', e.target.value)}
                  placeholder="max@beispiel.de"
                  className={`${inputClass} ${errors.email ? 'border-abz-red' : ''}`}
                />
                {errors.email && <p className="mt-1 text-sm text-abz-red">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-charcoal">
                  Telefon <span className="text-abz-red">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  placeholder="+49 ..."
                  className={`${inputClass} ${errors.phone ? 'border-abz-red' : ''}`}
                />
                {errors.phone && <p className="mt-1 text-sm text-abz-red">{errors.phone}</p>}
              </div>
            </div>

            {/* Address */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="street" className="mb-1.5 block text-sm font-medium text-charcoal">
                  Straße & Hausnummer
                </label>
                <input
                  type="text"
                  id="street"
                  value={formData.street}
                  onChange={(e) => update('street', e.target.value)}
                  placeholder="Musterstraße 1"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="city" className="mb-1.5 block text-sm font-medium text-charcoal">
                  PLZ & Ort
                </label>
                <input
                  type="text"
                  id="city"
                  value={formData.city}
                  onChange={(e) => update('city', e.target.value)}
                  placeholder="47877 Willich"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-charcoal">
                Nachricht <span className="text-warm-brown">(optional)</span>
              </label>
              <textarea
                id="message"
                rows={3}
                value={formData.message}
                onChange={(e) => update('message', e.target.value)}
                placeholder="Haben Sie noch weitere Fragen oder Anmerkungen?"
                className={inputClass}
              />
            </div>

            {/* Privacy checkbox */}
            <div>
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={formData.privacy}
                  onChange={(e) => update('privacy', e.target.checked)}
                  className="mt-1 h-5 w-5 shrink-0 rounded border-warm-gray-dark text-abz-red focus:ring-abz-red/20"
                />
                <span className="text-sm text-body-text">
                  Ich stimme der Verarbeitung meiner Daten gemäß der{' '}
                  <Link href="/datenschutz" className="text-abz-red underline hover:text-abz-red-dark">
                    Datenschutzerklärung
                  </Link>{' '}
                  zu. <span className="text-abz-red">*</span>
                </span>
              </label>
              {errors.privacy && <p className="mt-1 text-sm text-abz-red">{errors.privacy}</p>}
            </div>
          </div>

          <div className="mt-8 flex justify-between">
            <button
              type="button"
              onClick={goBack}
              className="inline-flex items-center gap-2 rounded-lg border-2 border-warm-gray-dark px-6 py-3 text-base font-semibold text-charcoal transition-all hover:border-charcoal/40 hover:bg-warm-gray"
            >
              <ChevronLeft className="h-4 w-4" />
              Zurück
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={submitting}
              className="inline-flex items-center gap-2 rounded-lg bg-abz-red px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-abz-red/25 transition-all hover:bg-abz-red-dark disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Wird gesendet...
                </>
              ) : (
                'Absenden'
              )}
            </button>
          </div>
        </div>
      )}

      {/* -------------------------------------------------------------- */}
      {/* Step 4: Confirmation                                           */}
      {/* -------------------------------------------------------------- */}
      {step === 4 && (
        <div className="animate-in fade-in duration-300 text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-abz-red/10">
            <CheckCircle className="h-10 w-10 text-abz-red" />
          </div>

          <h2 className="font-heading text-2xl font-bold text-charcoal sm:text-3xl">
            Vielen Dank für Ihre Anfrage!
          </h2>
          <p className="mx-auto mt-3 max-w-md text-body-text">
            Wir melden uns innerhalb von 24 Stunden bei Ihnen.
          </p>

          {/* Submission summary */}
          <div className="mx-auto mt-8 max-w-md rounded-2xl bg-warm-gray p-6 text-left text-sm">
            <h3 className="mb-3 font-heading font-semibold text-charcoal">
              Zusammenfassung Ihrer Anfrage
            </h3>
            <dl className="space-y-2">
              <div>
                <dt className="text-warm-brown">Produkte</dt>
                <dd className="font-medium text-charcoal">
                  {formData.categories.map(getCategoryLabel).join(', ')}
                </dd>
              </div>
              {formData.length && (
                <div>
                  <dt className="text-warm-brown">Länge</dt>
                  <dd className="font-medium text-charcoal">{formData.length}</dd>
                </div>
              )}
              {formData.height && (
                <div>
                  <dt className="text-warm-brown">Höhe</dt>
                  <dd className="font-medium text-charcoal">{formData.height}</dd>
                </div>
              )}
              {formData.installation && (
                <div>
                  <dt className="text-warm-brown">Montage</dt>
                  <dd className="font-medium text-charcoal">{formData.installation}</dd>
                </div>
              )}
              <div className="border-t border-warm-gray-dark/50 pt-2">
                <dt className="text-warm-brown">Name</dt>
                <dd className="font-medium text-charcoal">
                  {formData.salutation && `${formData.salutation} `}
                  {formData.firstName} {formData.lastName}
                </dd>
              </div>
              <div>
                <dt className="text-warm-brown">E-Mail</dt>
                <dd className="font-medium text-charcoal">{formData.email}</dd>
              </div>
              <div>
                <dt className="text-warm-brown">Telefon</dt>
                <dd className="font-medium text-charcoal">{formData.phone}</dd>
              </div>
            </dl>
          </div>

          <div className="mt-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-lg bg-abz-red px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-abz-red/25 transition-all hover:bg-abz-red-dark"
            >
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
