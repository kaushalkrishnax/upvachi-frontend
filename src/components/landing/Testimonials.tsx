import { User } from "lucide-react";
import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

// Testimonial Data (unchanged)
const testimonials = [
  {
    text: "This sounds exactly like me. My followers can't tell the difference!",
    author: "Sarah Chen",
    role: "Content Creator",
    platform: "Instagram",
    followers: "125K",
    gradient: "from-[#E4405F] to-[#C13584]",
    rating: 5,
  },
  {
    text: "People thought I was replying at 2AM. UpVachi never sleeps!",
    author: "Marcus Rodriguez",
    role: "Fitness Coach",
    platform: "WhatsApp",
    followers: "50K",
    gradient: "from-[#25D366] to-[#128C7E]",
    rating: 4,
  },
  {
    text: "Handled all my leads without me lifting a finger. Game changer.",
    author: "Emily Johnson",
    role: "Business Owner",
    platform: "Facebook",
    followers: "30K",
    gradient: "from-[#1877F2] to-[#42A5F5]",
    rating: 5,
  },
  {
    text: "My engagement went up 300% because I'm always 'present' now.",
    author: "David Kim",
    role: "Digital Marketer",
    platform: "Instagram",
    followers: "80K",
    gradient: "from-[#35A7FF] to-[#824DFF]",
    rating: 5,
  },
  {
    text: "It captures my personality perfectly. Even my mom was fooled!",
    author: "Jessica White",
    role: "Lifestyle Blogger",
    platform: "WhatsApp",
    followers: "200K",
    gradient: "from-[#824DFF] to-[#35A7FF]",
    rating: 4,
  },
  {
    text: "Best investment I've made. Saves me 4 hours daily.",
    author: "Alex Thompson",
    role: "Entrepreneur",
    platform: "Facebook",
    followers: "95K",
    gradient: "from-[#35A7FF] to-[#824DFF]",
    rating: 5,
  },
];

function StarRow({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center mb-2">
      {[...Array(count)].map((_, idx) => (
        <svg
          key={idx}
          className="w-5 h-5 text-yellow-400 fill-current"
          viewBox="0 0 20 20"
        >
          <polygon points="10 1.5 12.59 7.19 18.73 7.72 14 12.09 15.27 18.22 10 15.16 4.73 18.22 6 12.09 1.27 7.72 7.41 7.19 10 1.5" />
        </svg>
      ))}
    </div>
  );
}

const Autoplay: KeenSliderPlugin = (slider) => {
  let timeout: number | null;
  let mouseOver = false;

  const clear = () => {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };

  const next = () => {
    clear();
    if (mouseOver || !slider) return;
    timeout = setTimeout(() => {
      slider.next();
    }, 2000);
  };

  slider.on("created", () => {
    if (!slider.container) return;
    slider.container.addEventListener(
      "mouseover",
      () => {
        mouseOver = true;
        clear();
      },
      { passive: true }
    );
    slider.container.addEventListener(
      "mouseout",
      () => {
        mouseOver = false;
        next();
      },
      { passive: true }
    );
    next();
  });

  slider.on("dragStarted", clear);
  slider.on("animationEnded", next);
  slider.on("updated", next);

  slider.on("destroyed", () => {
    clear();
    if (slider.container) {
      slider.container.removeEventListener("mouseover", () => {});
      slider.container.removeEventListener("mouseout", () => {});
    }
  });
};

function Testimonials() {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      slides: { perView: 1, spacing: 24 },
      breakpoints: {
        "(min-width: 768px)": { slides: { perView: 2, spacing: 32 } },
        "(min-width: 1024px)": { slides: { perView: 3, spacing: 40 } },
      },
    },
    [Autoplay]
  );

  return (
    <section id="testimonials" className="py-20 bg-gray-950 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Loved by Creators Worldwide
          </h2>
          <p className="text-xl text-gray-300">
            Join thousands of creators who've found their digital voice with
            UpVachi
          </p>
        </div>
        <div ref={sliderRef} className="keen-slider">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="keen-slider__slide">
              <div
                className={`group bg-gradient-to-br ${testimonial.gradient} rounded-3xl p-8 border border-gray-700/70 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:scale-110`}
              >
                <StarRow count={testimonial.rating || 5} />
                <div className="mb-4">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="px-4 py-3 rounded-2xl bg-white/10 text-white shadow-lg max-w-xs">
                      <p className="text-sm font-medium leading-relaxed">
                        "{testimonial.text}"
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-gray-300" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-gray-300">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div
                      className={`px-3 py-1 rounded-full bg-gradient-to-r ${testimonial.gradient} text-white text-xs font-medium mb-1`}
                    >
                      {testimonial.platform}
                    </div>
                    <p className="text-xs text-gray-200">
                      {testimonial.followers} followers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
