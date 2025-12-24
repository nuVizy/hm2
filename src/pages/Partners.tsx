import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { site } from "../content/site";

const Partners = () => {
  const partner = site.partners[0];

  return (
    <div>
      <Seo
        title="Our Partners"
        description="Discover the venues and collaborators who share our standard of hospitality excellence."
        image={partner.images[0]}
      />
      <section className="border-b border-white/10 bg-ink/70 py-20">
        <div className="container">
          <p className="text-xs uppercase tracking-[0.4em] text-gold">Our partners</p>
          <h1 className="mt-4 font-display text-4xl md:text-5xl">
            Collaborations that elevate every experience
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-sand/70">
            We partner with Cyprus' most iconic venues to deliver seamless celebrations from menu to mise-en-scène.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gold">Feature</p>
            <h2 className="mt-4 font-display text-3xl">{partner.name}</h2>
            <p className="mt-4 text-sm text-sand/70">{partner.description}</p>
            <p className="mt-4 text-sm text-sand/70">{partner.story}</p>
            <Link
              to="/contact"
              className="mt-6 inline-flex rounded-full border border-gold px-6 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold"
            >
              Plan with us
            </Link>
          </div>
          <div className="grid gap-4">
            {partner.images.map((image, index) => (
              <div key={image} className="aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  src={image}
                  alt={`${partner.name} imagery ${index + 1}`}
                  loading="lazy"
                  width={640}
                  height={480}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-16">
        <div className="container">
          <p className="text-xs uppercase tracking-[0.4em] text-gold">More partners</p>
          <h2 className="mt-4 font-display text-3xl">Built to expand with new collaborations</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {["Vineyard venues", "Luxury villas", "Corporate retreats"].map((label) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-ink/60 p-6">
                <p className="text-sm font-semibold text-sand">{label}</p>
                <p className="mt-2 text-xs text-sand/70">
                  Add new partner profiles easily in src/content/site.ts.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
