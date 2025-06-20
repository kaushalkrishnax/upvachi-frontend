import {
  User,
  Users,
  Briefcase,
  GraduationCap,
  Building,
  UserRoundCheck,
} from "lucide-react";

const UseCases = () => {
  const useCases = [
    {
      title: "Individuals",
      description: "Manage personal DMs with your true personality",
      icon: User,
      gradient: "from-[#0B1C3A] via-[#354B72] to-[#EAB2FF]", // Deep blue → steel → soft violet
      features: [
        "Authentic connections",
        "Hobby group chats",
        "Close friend replies",
      ],
      example:
        "Never miss a meaningful message while staying effortlessly “you”.",
    },
    {
      title: "Creators",
      description: "Engage fans with your voice, even at scale",
      icon: Users,
      gradient: "from-[#1F2F56] via-[#6D4DD2] to-[#E879F9]", // Navy → purple → electric pink
      features: ["Fan interaction", "Content promotion", "Community warmth"],
      example: "Reply to thousands of fans while keeping your unique tone.",
    },
    {
      title: "Influencers",
      description: "Grow your influence without losing your authenticity",
      icon: UserRoundCheck,
      gradient: "from-[#2D365E] via-[#7D4BE1] to-[#FF8FCB]", // Twilight blue → violet → rose
      features: ["Audience growth", "DM automation", "Multi-platform presence"],
      example:
        "Handle a flood of messages while staying on-brand and relatable.",
    },
    {
      title: "Solopreneurs",
      description: "Convert leads, answer FAQs, and book clients — hands-free",
      icon: Briefcase,
      gradient: "from-[#0D1B2A] via-[#375B9A] to-[#FFA9D2]", // Blue-black → tech blue → soft pink
      features: ["Lead capture", "Smart FAQs", "Appointment scheduling"],
      example: "Turn DMs into deals, even while you sleep.",
    },
    {
      title: "Coaches",
      description: "Support your students with personalized messaging flows",
      icon: GraduationCap,
      gradient: "from-[#101B30] via-[#5B6DA3] to-[#EFC4FF]", // Midnight → gray blue → pastel lavender
      features: ["Progress tracking", "Student support", "Course engagement"],
      example: "Nurture students 24/7 with motivation, tips, and reminders.",
    },
    {
      title: "Brands",
      description: "Scale support and sales while keeping your brand voice",
      icon: Building,
      gradient: "from-[#111827] via-[#4A6EF3] to-[#FFAECF]", // Charcoal → electric blue → blush pink
      features: ["Customer support", "Brand consistency", "Platform coverage"],
      example: "Stay responsive and on-brand across every customer touchpoint.",
    },
  ];

  return (
    <section id="use-cases" className="py-20 bg-gray-950 relative">
      {/* Neural Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <linearGradient
              id="useCaseNeural"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#35A7FF" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#824DFF" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path
            d="M0,300 Q300,250 600,300 T1200,350"
            stroke="url(#useCaseNeural)"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M100,600 Q400,550 700,600 T1200,650"
            stroke="url(#useCaseNeural)"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Perfect for Every Use Case
          </h2>
          <p className="text-xl text-gray-300">
            Whether you're building a personal brand or scaling a business,
            UpVachi adapts to your unique needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-3xl p-8 border border-gray-700 backdrop-blur-sm hover:border-[#35A7FF]/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#35A7FF]/10"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${useCase.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#35A7FF]/25`}
              >
                <useCase.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                {useCase.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {useCase.description}
              </p>

              <div className="space-y-3 mb-6">
                {useCase.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${useCase.gradient} shadow-lg`}
                    ></div>
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-[#35A7FF]/10 to-[#824DFF]/10 rounded-2xl p-4 border border-[#35A7FF]/20">
                <p className="text-sm text-gray-300 italic leading-relaxed">
                  "{useCase.example}"
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-[#35A7FF]/10 to-[#824DFF]/10 rounded-3xl p-8 max-w-4xl mx-auto border border-[#35A7FF]/20 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-white mb-6">
              Not Sure Which Use Case Fits You?
            </h3>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              UpVachi learns and adapts to your specific needs. Start with any
              use case and let it evolve with you.
            </p>
            <button className="bg-gradient-to-r from-[#106eb6] to-[#c54c06] hover:from-[#2a8cdb] hover:to-[#d44936] text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#106eb6]/25 hover:shadow-[#106eb6]/40 cursor-pointer">
              Discover Your Perfect Setup
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
