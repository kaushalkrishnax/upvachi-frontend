import { Check, Sparkles, Crown, Building } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Test UpVachi with 1 platform",
      icon: Sparkles,
      gradient: "from-[#FF512F] via-[#F09819] to-[#fff5e1]", // Red-orange to soft white
      bgGradient: "from-[#2D0900]/80 to-[#F09819]/10", // Deep red-orange bg
      features: [
        "1 platform connection",
        "100 messages/month",
        "Basic voice customization",
        "Community support",
        "7-day chat history",
      ],
      cta: "Start Free",
      popular: false,
    },
    {
      name: "Pro",
      price: "$29",
      period: "per month",
      description: "Full access + advanced voice customizer",
      icon: Crown,
      gradient: "from-[#2980B9] via-[#6DD5FA] to-[#CCCCCC]", // Deep blue → cyan → white
      bgGradient: "from-[#2980B9]/10 to-[#CCCCCC]/20", // Soft blue bg
      features: [
        "All 3 platforms (IG, WA, FB)",
        "Unlimited messages",
        "Advanced voice customization",
        "Priority support",
        "Unlimited chat history",
        "Analytics dashboard",
        "Custom integrations",
      ],
      cta: "Start Pro",
      popular: true,
    },
    {
      name: "Business",
      price: "$99",
      period: "per month",
      description: "Multi-platform, analytics, white label",
      icon: Building,
      gradient: "from-[#232526] via-[#414345] to-[#CCCCCC]", // Black → silver → white
      bgGradient: "from-[#232526]/80 to-[#CCCCCC]/10", // Dark silver bg
      features: [
        "Everything in Pro",
        "White label solution",
        "Team collaboration",
        "Advanced analytics",
        "API access",
        "Dedicated account manager",
        "Custom training",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-950 relative">
      {/* Neural Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <linearGradient
              id="pricingNeural"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#35A7FF" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#824DFF" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <path
            d="M0,400 Q300,350 600,400 T1200,450"
            stroke="url(#pricingNeural)"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M100,200 Q400,150 700,200 T1200,250"
            stroke="url(#pricingNeural)"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-300">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 border backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-2 ${
                plan.popular
                  ? "border-[#35A7FF] bg-gradient-to-br from-[#35A7FF]/10 to-[#824DFF]/10 shadow-2xl shadow-[#35A7FF]/20 scale-105"
                  : "border-gray-700 bg-gradient-to-br from-gray-900/80 to-gray-800/80 hover:border-gray-600 hover:shadow-xl"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-[#35A7FF] to-[#824DFF] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg shadow-[#35A7FF]/25">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div
                  className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${plan.gradient} flex items-center justify-center mx-auto mb-6 shadow-lg`}
                >
                  <plan.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">
                  {plan.name}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-gray-400 text-lg">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div
                      className={`w-6 h-6 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}
                    >
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                  plan.popular
                    ? "bg-gradient-to-r from-[#35A7FF] to-[#824DFF] text-white hover:from-[#2a8cdb] hover:to-[#6b3dd9] shadow-lg shadow-[#35A7FF]/25 hover:shadow-[#35A7FF]/40"
                    : "bg-gradient-to-br from-gray-800 to-gray-700 text-white border border-gray-600 hover:border-gray-500"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-[#35A7FF]/10 to-[#824DFF]/10 rounded-3xl p-8 max-w-4xl mx-auto border border-[#35A7FF]/20 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-white mb-6">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              We work with enterprises and agencies to create tailored UpVachi
              solutions for their specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-[#2980B9] to-[#d36d6d] hover:from-[#2a8cdb] hover:to-[#ce5f8d] text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#35A7FF]/25">
                Book a Demo
              </button> 
              <button className="border-2 border-[#35A7FF] text-[#35A7FF] hover:bg-[#35A7FF] hover:text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Email Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
