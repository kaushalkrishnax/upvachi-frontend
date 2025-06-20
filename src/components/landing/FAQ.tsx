import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: 'Can I control how UpVachi sounds?',
      answer: 'Absolutely! UpVachi learns your unique communication style through our advanced Voice Customizer. You can adjust tone, emoji usage, message length, and even specific phrases you like to use. The more you train it, the more it sounds like you.'
    },
    {
      question: 'What platforms does UpVachi work on?',
      answer: 'UpVachi currently works on Instagram (DMs and comments), WhatsApp (personal and business), and Facebook (Messenger and page comments). We\'re constantly adding new platforms based on user demand.'
    },
    {
      question: 'Can UpVachi answer comments too?',
      answer: 'Yes! UpVachi can respond to comments on your posts across all supported platforms. It can even trigger follow-up DMs when appropriate, helping you convert comments into meaningful conversations.'
    },
    {
      question: 'Does UpVachi store my personal data?',
      answer: 'We take privacy seriously. UpVachi only stores the conversation patterns and preferences you explicitly share to train your voice. We never store personal information from your conversations, and all data is encrypted and secure.'
    },
    {
      question: 'How is this different from other chatbots?',
      answer: 'Unlike generic chatbots that use scripts, UpVachi learns YOUR unique voice and personality. It doesn\'t just give robotic responses - it reflects your tone, humor, and communication style. It\'s like having a digital twin that knows how to talk like you.'
    },
    {
      question: 'Can I pause or stop UpVachi anytime?',
      answer: 'Of course! You have complete control. You can pause UpVachi for specific conversations, platforms, or altogether. You can also set "Do Not Disturb" hours or exclude certain contacts from automated responses.'
    },
    {
      question: 'How accurate is the voice matching?',
      answer: 'Our users consistently tell us that UpVachi captures their voice so well that friends and followers can\'t tell the difference. The accuracy improves over time as UpVachi learns more about your communication patterns.'
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes! We offer a free tier that lets you test UpVachi with one platform and 100 messages per month. This gives you a real feel for how it works before upgrading to unlimited usage.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-950 relative">
      {/* Neural Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="faqNeural" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#35A7FF" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#824DFF" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <path d="M0,300 Q300,250 600,300 T1200,350" stroke="url(#faqNeural)" strokeWidth="1" fill="none" />
          <path d="M100,600 Q400,550 700,600 T1200,650" stroke="url(#faqNeural)" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300">
            Everything you need to know about UpVachi
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-6">
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? -1 : index)}
                className="w-full bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl p-6 text-left border border-gray-700 backdrop-blur-sm hover:border-[#35A7FF]/50 transition-all duration-300 flex items-center justify-between group"
              >
                <h3 className="text-lg font-semibold text-white pr-4 group-hover:text-[#35A7FF] transition-colors duration-300">{faq.question}</h3>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <ChevronUp className="w-6 h-6 text-[#35A7FF]" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-[#35A7FF] transition-colors duration-300" />
                  )}
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="bg-gradient-to-br from-[#35A7FF]/10 to-[#824DFF]/10 rounded-2xl mt-3 p-6 border border-[#35A7FF]/20 backdrop-blur-sm">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;