import { useState } from "react";
import Seo from "../components/Seo";
import { site } from "../content/site";

interface ContactFormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  message: string;
}

const emptyForm: ContactFormState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  date: "",
  message: ""
};

const Contact = () => {
  const [form, setForm] = useState<ContactFormState>(emptyForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!form.name.trim()) nextErrors.name = "Enter your name.";
    if (!form.email.trim()) nextErrors.email = "Enter a valid email.";
    if (!form.phone.trim()) nextErrors.phone = "Enter a phone number.";
    if (!form.service) nextErrors.service = "Select a service.";
    if (!form.date) nextErrors.date = "Select a date.";
    if (!form.message.trim()) nextErrors.message = "Share a short brief.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!validate()) return;
    console.log("Contact form submitted", form);
    setSubmitted(true);
    setForm(emptyForm);
  };

  return (
    <div>
      <Seo
        title="Contact"
        description="Contact Hungry Monkey Catering for premium service and bespoke menus across Cyprus."
        image={site.gallery[1]}
      />
      <section className="border-b border-white/10 bg-ink/70 py-20">
        <div className="container">
          <p className="text-xs uppercase tracking-[0.4em] text-gold">Contact</p>
          <h1 className="mt-4 font-display text-4xl md:text-5xl">Let's plan your next event</h1>
          <p className="mt-4 max-w-2xl text-sm text-sand/70">
            Share the details and our team will design a tailored culinary proposal.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-white/10 bg-ink/60 p-8">
            {submitted ? (
              <div className="rounded-2xl border border-gold/40 bg-ink/80 p-6 text-center">
                <p className="text-lg font-semibold">Thank you for reaching out.</p>
                <p className="mt-2 text-sm text-sand/70">
                  Your message is logged. Connect your preferred form handler when ready.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 rounded-full bg-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="grid gap-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="grid gap-2 text-sm font-medium">
                    Name *
                    <input
                      type="text"
                      value={form.name}
                      onChange={(event) => setForm({ ...form, name: event.target.value })}
                      className="rounded-xl border border-white/15 bg-ink/40 px-4 py-2"
                    />
                    {errors.name && <span className="text-xs text-red-400">{errors.name}</span>}
                  </label>
                  <label className="grid gap-2 text-sm font-medium">
                    Email *
                    <input
                      type="email"
                      value={form.email}
                      onChange={(event) => setForm({ ...form, email: event.target.value })}
                      className="rounded-xl border border-white/15 bg-ink/40 px-4 py-2"
                    />
                    {errors.email && <span className="text-xs text-red-400">{errors.email}</span>}
                  </label>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="grid gap-2 text-sm font-medium">
                    Phone *
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(event) => setForm({ ...form, phone: event.target.value })}
                      className="rounded-xl border border-white/15 bg-ink/40 px-4 py-2"
                    />
                    {errors.phone && <span className="text-xs text-red-400">{errors.phone}</span>}
                  </label>
                  <label className="grid gap-2 text-sm font-medium">
                    Service type *
                    <select
                      value={form.service}
                      onChange={(event) => setForm({ ...form, service: event.target.value })}
                      className="rounded-xl border border-white/15 bg-ink/40 px-4 py-2"
                    >
                      <option value="">Select a service</option>
                      {site.services.map((service) => (
                        <option key={service.id} value={service.name}>
                          {service.name}
                        </option>
                      ))}
                    </select>
                    {errors.service && <span className="text-xs text-red-400">{errors.service}</span>}
                  </label>
                </div>
                <label className="grid gap-2 text-sm font-medium">
                  Event date *
                  <input
                    type="date"
                    value={form.date}
                    onChange={(event) => setForm({ ...form, date: event.target.value })}
                    className="rounded-xl border border-white/15 bg-ink/40 px-4 py-2"
                  />
                  {errors.date && <span className="text-xs text-red-400">{errors.date}</span>}
                </label>
                <label className="grid gap-2 text-sm font-medium">
                  Message *
                  <textarea
                    value={form.message}
                    onChange={(event) => setForm({ ...form, message: event.target.value })}
                    rows={5}
                    className="rounded-xl border border-white/15 bg-ink/40 px-4 py-2"
                  />
                  {errors.message && <span className="text-xs text-red-400">{errors.message}</span>}
                </label>
                <button
                  type="submit"
                  className="mt-2 rounded-full bg-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink"
                >
                  Send enquiry
                </button>
                <p className="text-xs text-sand/60">
                  Placeholder submission. Replace with Formspree or CRM integration.
                </p>
              </form>
            )}
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-ink/60 p-6">
              <p className="text-xs uppercase tracking-[0.4em] text-gold">Contact details</p>
              <p className="mt-4 text-sm text-sand/70">{site.contact.address}</p>
              <a href={`tel:${site.contact.phone}`} className="mt-3 block text-sm text-sand">
                {site.contact.phone}
              </a>
              <a href={`mailto:${site.contact.email}`} className="mt-2 block text-sm text-sand">
                {site.contact.email}
              </a>
              <a
                href={site.contact.mapsUrl}
                className="mt-6 inline-flex rounded-full border border-gold px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold"
              >
                Directions
              </a>
            </div>
            <div className="rounded-3xl border border-white/10 bg-ink/60 p-6">
              <p className="text-xs uppercase tracking-[0.4em] text-gold">Social</p>
              <div className="mt-4 space-y-2 text-sm text-sand/70">
                {site.contact.socials.map((social) => (
                  <a key={social.label} href={social.href} className="block hover:text-gold">
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
