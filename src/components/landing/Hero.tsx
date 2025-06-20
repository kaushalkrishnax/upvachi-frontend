import React, { useEffect, useRef, useState } from "react";
import { Wifi, Battery } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import upvachiLogo from "../../assets/images/upvachi.png";
import whatsappChatBgImage from "../../assets/images/whatsapp-chat-bg.jpg";
import facebookChatBgImage from "../../assets/images/facebook-chat-bg.jpg";
import instagramChatBgImage from "../../assets/images/instagram-chat-bg.jpg";
import upvachiChirpSound from "../../assets/audio/upvachi-chirp.mp3";

const Hero: React.FC = () => {
  const [currentPlatform, setCurrentPlatform] = useState("whatsapp");
  const [isBirdHovered, setIsBirdHovered] = useState(false);

  const chatRef = useRef<HTMLDivElement>(null);

  const platforms = ["whatsapp", "facebook", "instagram"];
  const currentTime = new Date();

  // WhatsApp (business talk)
  const whatsappMessages = [
    {
      type: "received",
      text: "Meeting at 3pm, boss. Report ready?",
      time: "10:16 AM",
    },
    { type: "sent", text: "Yes bhai, will send soon", time: "10:17 AM" },
    { type: "received", text: "Perfect, boss will review.", time: "10:18 AM" },
    { type: "sent", text: "On it, bhai.", time: "10:19 AM" },
    {
      type: "received",
      text: "Client called, please update the slides.",
      time: "10:20 AM",
    },
    { type: "sent", text: "Got it bhai, updating now.", time: "10:21 AM" },
  ];

  // Facebook (friendly talk)
  const facebookMessages = [
    { type: "received", text: "Hey bhai, weekend plans?", time: "10:16 AM" },
    { type: "sent", text: "Chill at my place, bhai?", time: "10:17 AM" },
    { type: "received", text: "Sounds cool!", time: "10:18 AM" },
    { type: "sent", text: "Bring snacks, okay?", time: "10:19 AM" },
    {
      type: "received",
      text: "Sure, kya movie dekhte hain?",
      time: "10:20 AM",
    },
    { type: "sent", text: "Marvel or comedy, bata de bhai.", time: "10:21 AM" },
  ];

  // Instagram (lovely talk, English with a touch of Hindi)
  const instagramMessages = [
    { type: "received", text: "Your feed is fire, sweetie!", time: "10:16 AM" },
    {
      type: "sent",
      text: "Thanks -   feeling like a star here!",
      time: "10:17 AM",
    },
    {
      type: "received",
      text: "Can’t wait for next story!",
      time: "10:18 AM",
    },
    { type: "sent", text: "Dropping soon, promise!", time: "10:19 AM" },
    {
      type: "received",
      text: "Got any BTS snaps?",
      time: "10:20 AM",
    },
    {
      type: "sent",
      text: "Absolutely, sharing this weekend!",
      time: "10:21 AM",
    },
  ];

  const messages = {
    whatsapp: whatsappMessages,
    facebook: facebookMessages,
    instagram: instagramMessages,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex =
        (platforms.indexOf(currentPlatform) + 1) % platforms.length;
      setCurrentPlatform(platforms[nextIndex]);
    }, 8000);
    return () => clearInterval(interval);
  }, [currentPlatform]);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTo({
        top: chatRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [currentPlatform]);

  const nodes = [
    { x: 120, y: 80 },
    { x: 300, y: 50 },
    { x: 480, y: 150 },
    { x: 660, y: 100 },
    { x: 840, y: 180 },
    { x: 540, y: 250 },
  ];
  const edges: [number, number][] = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [2, 5],
    [0, 5],
    [4, 5],
  ];

  type SocialPlatform = "whatsapp" | "facebook" | "instagram";

  function getTheme(platform: SocialPlatform) {
    const themes = {
      whatsapp: {
        bgImage: whatsappChatBgImage,
        bubbleSent: "bg-[#1E865F] via-[#1B734F] to-[#1E865F]",
        bubbleRecv: "bg-[#2d2d2d]",
        textSent: "text-white",
        textRecv: "text-black",
        statusText: "text-[#1E865F]",
      },
      facebook: {
        bgImage: facebookChatBgImage,
        bubbleSent: "bg-[#56B3FA] via-[#3B5E8F] to-[#56B3FA]",
        bubbleRecv: "bg-[#1a1a1a]",
        textSent: "text-white",
        textRecv: "text-black",
        statusText: "text-[#1877F2]",
      },
      instagram: {
        bgImage: instagramChatBgImage,
        bubbleSent:
          "bg-gradient-to-br from-[#ff5c8d] via-[#ff6daa] to-[#ff7fb7]",
        bubbleRecv: "bg-[#1a1a1a]",
        textSent: "text-white",
        textRecv: "text-black",
        statusText: "text-[#E1306C]",
      },
    } as const;

    const theme = themes[platform];
    if (!theme) {
      throw new Error(`Unsupported platform: ${platform}`);
    }
    return theme;
  }

  const audioRef = useRef<HTMLAudioElement>(null);

  const handleBirdHover = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      setIsBirdHovered(true);
      setTimeout(() => {
        setIsBirdHovered(false);
      }, 2000);
    }
  };

  return (
    <section id="hero" className="relative flex items-center min-h-screen bg-gradient-to-br bg-gray-950 overflow-hidden">
      <motion.svg
        className="absolute inset-0 w-full h-full opacity-15"
        viewBox="0 0 1000 400"
        preserveAspectRatio="none"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
      >
        <defs>
          <linearGradient id="gradEdge" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FF6B6B" />
            <stop offset="50%" stopColor="#4A90E2" />
            <stop offset="100%" stopColor="#8E2DE2" />
          </linearGradient>
          <filter id="blurGlow">
            <feGaussianBlur stdDeviation="1" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {edges.map(([i, j], idx) => (
          <motion.line
            key={idx}
            x1={nodes[i].x}
            y1={nodes[i].y}
            x2={nodes[j].x}
            y2={nodes[j].y}
            stroke="url(#gradEdge)"
            strokeWidth="0.5"
            filter="url(#blurGlow)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: idx * 0.1, duration: 1.5 }}
          />
        ))}
        {nodes.map((n, idx) => (
          <motion.circle
            key={idx}
            cx={n.x}
            cy={n.y}
            r="2"
            fill={idx % 2 === 0 ? "url(#gradEdge)" : "none"}
            stroke={idx % 2 !== 0 ? "url(#gradEdge)" : "none"}
            strokeWidth="0.5"
            filter="url(#blurGlow)"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        ))}
      </motion.svg>

      <div className="relative z-10 container mx-auto px-6 py- flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="max-w-xl space-y-6 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-4 backdrop-blur-md rounded-xl px-4 py-2 transition-all duration-300">
            <audio ref={audioRef} src={upvachiChirpSound} preload="auto" />

            <div className="relative group" onMouseEnter={handleBirdHover}>
              <img
                src={upvachiLogo}
                className="w-24 h-24 border-2 border-[#1a2a4f] rounded-3xl m-2 shadow-inner shadow-[#0b1936]/40 transition duration-300 group-hover:scale-110"
                alt="UpVachi Logo"
              />

              {/* Left Side Floating Music Wave */}
              {isBirdHovered && [0, 1, 2, 3, 4].map((idx) => (
                <div
                  key={`left-${idx}`}
                  className="absolute top-1/2 w-4 h-4 text-white opacity-0 group-hover:opacity-100"
                  style={{
                    right: `calc(100% + ${20 + idx * 20}px)`,
                    animation: "floatWave 2s ease-in-out infinite",
                    animationDelay: `${idx * 0.2}s`,
                  }}
                >
                  {idx % 2 === 0 ? "🎵" : "🎶"}
                </div>
              ))}
            </div>

            <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#cccccc] via-[#3069e4] to-[#c44881] drop-shadow-lg">
              UpVachi
            </h1>
          </div>

          <h2 className="text-6xl lg:text-7xl font-extrabold text-gray-100 leading-tight mt-8">
            Chirping Minds,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] via-[#4A90E2] to-[#8E2DE2]">
              Flowing Chats
            </span>
          </h2>

          <p className="text-xl text-gray-400 font-light">
            UpVachi is an AI-powered bird assistant that chirps back smartly
            across WhatsApp, Facebook, and Instagram — for creators,
            solopreneurs, and businesses alike.
          </p>

          <div className="flex justify-center lg:justify-start gap-10 mt-10">
            {/* Primary CTA: deep‐blue gradient fill */}
            <button
              className="
                w-60 py-3
                bg-[#ffffff]
                text-black font-semibold rounded-full
                transition-transform duration-300 hover:scale-105
                cursor-pointer
              "
              onClick={() => window.location.href = "/register"}
            >
              Get Started
            </button>

            {/* Secondary CTA: dark fill + neon stroke */}
            <div className="w-60 p-[2px] bg-gradient-to-r from-[#5586FF] via-[#9570FF] to-[#4F2FF0] rounded-full transition-transform duration-300 hover:scale-105">
              <button
                className="
                  w-full py-3
                  bg-[#0E0F17]
                  text-[#5586FF] font-semibold rounded-full
                  cursor-pointer
                "
              >
                Watch Live
              </button>
            </div>

            {/* Live dot */}
            <motion.div
              className="w-2 h-2 rounded-full bg-gradient-to-br from-[#4F2FF0] to-[#5586FF] animate-pulse"
              initial={{ opacity: 0.6 }}
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </div>

        {/* Phone Preview */}
        <div className="flex justify-end w-full lg:w-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPlatform}
              className="relative w-[320px] h-[600px] bg-black rounded-[40px] shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-hidden"
              initial={{ rotateY: 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: -90, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Status Bar */}
              <div className="flex items-center justify-between px-4 py-2 bg-black text-gray-400 text-xs">
                <div className="flex items-center space-x-1">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                  <div className="w-3 h-1 bg-gray-400 rounded-sm"></div>
                </div>
                <span>
                  {currentTime.toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </span>
                <div className="flex items-center space-x-1">
                  <Wifi className="w-4 h-4" />
                  <Battery className="w-4 h-4" />
                </div>
              </div>

              {/* Header with avatar */}
              <div className="flex items-center px-4 py-3 bg-gray-900 border-b border-gray-80 justify-between">
                <div className="flex items-center space-x-2">
                  <img
                    src={upvachiLogo}
                    className="w-10 h-10 bg-gradient-to-br from-[#FF6B6B] via-[#4A90E2] to-[#8E2DE2] rounded-full flex items-center justify-center"
                  />
                  <div className="flex flex-col">
                    <p className="text-white text-base font-medium">UpVachi</p>
                    <p className="text-green-400 text-xs">Active Now</p>
                  </div>
                </div>

                <select
                  value={currentPlatform}
                  onChange={(e) => setCurrentPlatform(e.target.value)}
                  className="w-26 bg-transparent text-white"
                >
                  <option value="whatsapp" className="text-black">
                    WhatsApp
                  </option>
                  <option value="facebook" className="text-black">
                    Facebook
                  </option>
                  <option value="instagram" className="text-black">
                    Instagram
                  </option>
                </select>
              </div>

              {/* Chat Body */}
              <div
                ref={chatRef}
                className="p-4 flex flex-col space-y-3 h-[566px] overflow-y-auto bg-gradient-to-br"
                style={{
                  backgroundImage: `url(${
                    getTheme(currentPlatform as SocialPlatform).bgImage
                  })`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {messages[currentPlatform as SocialPlatform].map(
                  (msg: any, i: number) => (
                    <motion.div
                      key={i}
                      className={`flex ${
                        msg.type === "sent" ? "justify-end" : "justify-start"
                      }`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                    >
                      <div
                        className={`px-4 py-2.5 rounded-xl max-w-[75%] text-white shadow-lg ${
                          msg.type === "sent"
                            ? getTheme(currentPlatform as SocialPlatform)
                                .bubbleSent
                            : getTheme(currentPlatform as SocialPlatform)
                                .bubbleRecv
                        }`}
                      >
                        <p className="text-sm font-medium">{msg.text}</p>
                        <p className="text-xs text-gray-300 mt-1">{msg.time}</p>
                      </div>
                    </motion.div>
                  )
                )}
              </div>

              {/* Subtle backdrop glare */}
              <div className="absolute inset-0 bg-black/20 rounded-[40px] pointer-events-none" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <motion.div
        className="absolute top-12 left-12 w-28 h-28 bg-gradient-to-br from-[#FF6B6B]/40 to-[#4A90E2]/40 rounded-full blur-2xl"
        animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-12 right-12 w-36 h-36 bg-gradient-to-br from-[#8E2DE2]/40 to-[#FF6B6B]/40 rounded-full blur-2xl"
        animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity, delay: 1 }}
      />
    </section>
  );
};

export default Hero;
