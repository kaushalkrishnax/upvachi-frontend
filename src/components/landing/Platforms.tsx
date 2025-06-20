const Platforms = () => {
  const platforms = [
    {
      name: "Instagram",
      icon: ({ className }: { className?: string }) => (
        <svg
          className={"w-12 h-12 text-white" + className}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
        </svg>
      ),
      gradient: "from-[#E4405F] to-[#C13584]",
      accentColor: "#E4405F",
      bgGradient: "from-[#E4405F]/10 to-[#C13584]/10",
      story: "A reel comment triggers a DM with a personalized response",
      chat: [
        {
          type: "received",
          text: "Loved your reel! Can you teach me that technique?",
        },
        {
          type: "sent",
          text: "So glad you enjoyed it! I actually have a full tutorial on this. Would love to share it with you ✨",
        },
        { type: "received", text: "Yes please! 🙏" },
        {
          type: "sent",
          text: "DMing you the link now! Let me know if you have any questions 💖",
        },
      ],
    },
    {
      name: "WhatsApp",
      icon: ({ className }: { className?: string }) => (
        <svg
          className={"w-12 h-12 text-white" + className}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"></path>
        </svg>
      ),
      gradient: "from-[#25D366] to-[#128C7E]",
      accentColor: "#25D366",
      bgGradient: "from-[#25D366]/10 to-[#128C7E]/10",
      story: 'A lead messages "Hi," gets an emotional guided response',
      chat: [
        { type: "received", text: "Hi" },
        {
          type: "sent",
          text: "Hey there! Thanks for reaching out 😊 I saw you were interested in my coaching program. What specific area would you like to work on?",
        },
        { type: "received", text: "I need help with content strategy" },
        {
          type: "sent",
          text: "Perfect! Content strategy is one of my specialties. I have a few spots opening up next week. Would you like to hop on a quick call to see if we're a good fit?",
        },
      ],
    },
    {
      name: "Facebook",
      icon: ({ className }: { className?: string }) => (
        <svg
          className={"w-12 h-12 text-white" + className}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
        </svg>
      ),
      gradient: "from-[#1877F2] to-[#42A5F5]",
      accentColor: "#1877F2",
      bgGradient: "from-[#1877F2]/10 to-[#42A5F5]/10",
      story: "A comment → DM flow for community and lead engagement",
      chat: [
        {
          type: "received",
          text: "Great post! How do you stay so consistent?",
        },
        {
          type: "sent",
          text: "Thank you! Consistency is definitely key 🔑 I actually have a simple system I use. Would you like me to share it with you?",
        },
        { type: "received", text: "That would be amazing!" },
        {
          type: "sent",
          text: "I'll send you my free consistency guide! It's helped thousands of creators build sustainable habits ✨",
        },
      ],
    },
  ];

  return (
    <section id="platforms" className="py-20 bg-gray-950 relative">
      {/* Neural Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <linearGradient
              id="platformNeural"
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
            d="M100,100 Q400,50 700,100 T1100,150"
            stroke="url(#platformNeural)"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M0,400 Q300,350 600,400 T1200,450"
            stroke="url(#platformNeural)"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M200,700 Q500,650 800,700 T1200,750"
            stroke="url(#platformNeural)"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Your Voice, Everywhere
          </h2>
          <p className="text-xl text-gray-300">
            UpVachi seamlessly integrates with your favorite platforms,
            maintaining your unique voice across every conversation.
          </p>
        </div>

        <div className="space-y-24">
          {platforms.map((platform, index) => (
            <div
              key={platform.name}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-16`}
            >
              <div className="flex-1 max-w-lg">
                {/* Platform Icon */}
                <div
                  className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${platform.gradient} flex items-center justify-center mb-8 shadow-2xl shadow-black/50 relative group`}
                >
                  <platform.icon className="w-12 h-12 text-white" />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${platform.gradient} rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300 -z-10`}
                  ></div>
                </div>

                <h3 className="text-4xl font-bold text-white mb-6">
                  {platform.name}
                </h3>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  {platform.story}
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-[#35A7FF] to-[#824DFF] rounded-full shadow-lg shadow-[#35A7FF]/50"></div>
                    <span className="text-gray-300">Real-time responses</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-[#824DFF] to-[#35A7FF] rounded-full shadow-lg shadow-[#824DFF]/50"></div>
                    <span className="text-gray-300">
                      Personality-driven replies
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-[#35A7FF] to-[#824DFF] rounded-full shadow-lg shadow-[#35A7FF]/50"></div>
                    <span className="text-gray-300">
                      Lead conversion focused
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex-1 max-w-lg">
                <div
                  className={`bg-gradient-to-br ${platform.bgGradient} rounded-3xl p-8 border border-white/10 backdrop-blur-sm relative`}
                >
                  {/* Phone Frame */}
                  <div className="bg-gradient-to-b from-gray-900 to-black rounded-[2.5rem] p-4 shadow-2xl shadow-black/50">
                    <div className="bg-black rounded-[2rem] overflow-hidden">
                      {/* Status Bar */}
                      <div className="bg-black px-4 py-2 flex justify-between items-center text-white text-xs">
                        <span>9:41</span>
                        <div className="flex gap-1">
                          <div className="w-3 h-1.5 bg-white rounded-sm"></div>
                          <div className="w-4 h-1.5 bg-white rounded-sm"></div>
                        </div>
                      </div>

                      {/* Chat Header */}
                      <div
                        className={`bg-gradient-to-r ${platform.bgGradient} px-4 py-3 flex items-center gap-3 border-b border-gray-800`}
                      >
                        <div
                          className={`w-8 h-8 rounded-full bg-gradient-to-r ${platform.gradient} flex items-center justify-center shadow-lg`}
                        >
                          <platform.icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="text-white font-medium text-sm">Chat</p>
                          <p className="text-gray-400 text-xs">Online</p>
                        </div>
                      </div>

                      {/* Chat Messages */}
                      <div className="p-4 space-y-3 max-h-80 overflow-y-auto">
                        {platform.chat.map((message, idx) => (
                          <div
                            key={idx}
                            className={`flex ${
                              message.type === "sent"
                                ? "justify-end"
                                : "justify-start"
                            }`}
                          >
                            <div
                              className={`max-w-xs px-3 py-2 rounded-2xl text-sm ${
                                message.type === "sent"
                                  ? `bg-gradient-to-r ${platform.gradient} text-white shadow-lg`
                                  : "bg-gray-800 text-gray-200 border border-gray-700"
                              }`}
                            >
                              <p>{message.text}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Phone Glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${platform.gradient} rounded-3xl blur-2xl opacity-20 -z-10`}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Platforms;
