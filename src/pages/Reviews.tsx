import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { site } from "../content/site";

const Reviews = () => {
  return (
    <div>
      <Seo
        title="Reviews"
        description="Client testimonials celebrating Hungry Monkey's premium catering and service."
        image={site.testimonials[0].image}
      />
      <section className="border-b border-white/10 bg-ink/70 py-20">
        <div className="container">
          <p className="text-xs uppercase tracking-[0.4em] text-gold">Reviews</p>
          <h1 className="mt-4 font-display text-4xl md:text-5xl">Loved by hosts across Cyprus</h1>
          <div className="mt-6 flex items-center gap-3 text-gold">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} className="h-5 w-5 fill-current" />
            ))}
            <span className="text-sm text-sand/70">5.0 average rating from private and corporate hosts</span>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {site.testimonials.map((testimonial) => (
            <div key={testimonial.name} className="rounded-3xl border border-white/10 bg-ink/60 p-6">
              <p className="text-sm text-sand/80">“{testimonial.quote}”</p>
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  loading="lazy"
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-sand">{testimonial.name}</p>
                  <p className="text-xs text-sand/60">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="container mt-12">
          <div className="rounded-3xl border border-gold/40 bg-ink/70 p-8 text-center">
            <h2 className="font-display text-3xl">Ready to host something extraordinary?</h2>
            <p className="mt-3 text-sm text-sand/70">
              Tell us about your event and our team will create a bespoke culinary plan.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex rounded-full bg-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink"
            >
              Contact the team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
