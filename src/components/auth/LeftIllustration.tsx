import { useNavigate } from "react-router";
import { Check, Shield, Zap } from "lucide-react";
import upvachiLogo from "../../assets/images/upvachi.png";

const LeftIllustration = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-tl from-zinc-950 via-black to-zinc-900 p-10 lg:p-14 flex-col justify-around items-center  relative overflow-hidden hidden lg:flex">
      <div
        className="flex items-center gap-2 absolute group top-6 left-6 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img
          src={upvachiLogo}
          className="w-18 h-18 border-2 border-[#1a2a4f] rounded-3xl m-2 shadow-inner shadow-[#0b1936]/40 transition duration-300 group-hover:scale-110"
          alt="UpVachi Logo"
        />

        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#cccccc] via-[#3069e4] to-[#c44881] drop-shadow-lg">
          UpVachi
        </h1>
      </div>
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-white/5 to-zinc-400/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-gradient-to-r from-zinc-300/5 to-white/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-zinc-400/3 to-white/3 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Main Premium Dashboard */}
      <div className="relative z-10 w-full max-w-lg">
        <svg viewBox="0 0 500 500" className="w-full h-auto">
          <defs>
            <linearGradient
              id="premiumGrad1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#a1a1aa" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient
              id="premiumGrad2"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#fafafa" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#d4d4d8" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient
              id="premiumGrad3"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#e4e4e7" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#a1a1aa" stopOpacity="0.4" />
            </linearGradient>
            <filter id="premiumGlow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="premiumShadow">
              <feDropShadow
                dx="0"
                dy="4"
                stdDeviation="8"
                floodColor="#000000"
                floodOpacity="0.3"
              />
            </filter>
          </defs>

          {/* Central Premium Dashboard */}
          <g transform="translate(250,250)">
            {/* Main Screen with premium styling */}
            <rect
              x="-100"
              y="-70"
              width="200"
              height="140"
              rx="16"
              fill="url(#premiumGrad1)"
              filter="url(#premiumShadow)"
            >
              <animate
                attributeName="opacity"
                values="0.8;1;0.8"
                dur="6s"
                repeatCount="indefinite"
              />
            </rect>

            {/* Screen Border */}
            <rect
              x="-100"
              y="-70"
              width="200"
              height="140"
              rx="16"
              fill="none"
              stroke="url(#premiumGrad2)"
              strokeWidth="1"
              opacity="0.6"
            />

            {/* Premium Screen Content */}
            <g opacity="0.9">
              <rect
                x="-85"
                y="-50"
                width="170"
                height="10"
                rx="5"
                fill="white"
                opacity="0.4"
              />
              <rect
                x="-85"
                y="-32"
                width="120"
                height="8"
                rx="4"
                fill="white"
                opacity="0.5"
              />
              <rect
                x="-85"
                y="-18"
                width="140"
                height="8"
                rx="4"
                fill="white"
                opacity="0.5"
              />

              {/* Premium Charts */}
              <g transform="translate(-70,5)">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <rect
                    key={i}
                    x={i * 25}
                    y={30 - i * 5}
                    width="12"
                    height={i * 5 + 15}
                    rx="6"
                    fill="white"
                    opacity="0.7"
                    filter="url(#premiumGlow)"
                  >
                    <animate
                      attributeName="height"
                      values={`${i * 5 + 15};${i * 5 + 25};${i * 5 + 15}`}
                      dur="4s"
                      begin={`${i * 0.6}s`}
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.5;0.9;0.5"
                      dur="3s"
                      begin={`${i * 0.4}s`}
                      repeatCount="indefinite"
                    />
                  </rect>
                ))}
              </g>
            </g>

            {/* Premium Floating Elements */}
            <g>
              {/* Security Shield - Premium */}
              <g transform="translate(-140,-100)">
                <circle
                  r="35"
                  fill="url(#premiumGrad1)"
                  opacity="0.3"
                  filter="url(#premiumShadow)"
                >
                  <animate
                    attributeName="r"
                    values="30;40;30"
                    dur="8s"
                    repeatCount="indefinite"
                  />
                </circle>
                <path
                  d="M0,-25 L15,-18 L15,18 L0,25 L-15,18 L-15,-18 Z"
                  fill="url(#premiumGrad2)"
                  opacity="0.9"
                  filter="url(#premiumGlow)"
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    values="0;6;0;-6;0"
                    dur="10s"
                    repeatCount="indefinite"
                  />
                </path>
                <circle cx="0" cy="0" r="12" fill="white" opacity="0.95">
                  <animate
                    attributeName="r"
                    values="10;15;10"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>
                <Check
                  className="w-4 h-4"
                  x="-8"
                  y="-8"
                  fill="url(#premiumGrad1)"
                />
              </g>

              {/* Analytics Globe - Premium */}
              <g transform="translate(140,-100)">
                <circle
                  r="40"
                  fill="url(#premiumGrad1)"
                  opacity="0.2"
                  filter="url(#premiumShadow)"
                >
                  <animate
                    attributeName="opacity"
                    values="0.1;0.3;0.1"
                    dur="6s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle
                  r="30"
                  fill="none"
                  stroke="url(#premiumGrad2)"
                  strokeWidth="3"
                  opacity="0.8"
                >
                  <animate
                    attributeName="stroke-dasharray"
                    values="0,188;94,94;0,188"
                    dur="6s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle
                  r="22"
                  fill="none"
                  stroke="url(#premiumGrad3)"
                  strokeWidth="2"
                  opacity="0.6"
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    values="0;360"
                    dur="12s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle
                  r="15"
                  fill="url(#premiumGrad2)"
                  opacity="0.4"
                  filter="url(#premiumGlow)"
                >
                  <animate
                    attributeName="opacity"
                    values="0.3;0.7;0.3"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* Premium Data Points */}
                {[0, 1, 2, 3, 4].map((i) => {
                  const angle = (i * 72 * Math.PI) / 180;
                  const x = Math.cos(angle) * 20;
                  const y = Math.sin(angle) * 20;
                  return (
                    <circle
                      key={i}
                      cx={x}
                      cy={y}
                      r="4"
                      fill="white"
                      opacity="0.9"
                      filter="url(#premiumGlow)"
                    >
                      <animate
                        attributeName="r"
                        values="3;7;3"
                        dur="3s"
                        begin={`${i * 0.6}s`}
                        repeatCount="indefinite"
                      />
                    </circle>
                  );
                })}
              </g>

              {/* AI Brain - Premium */}
              <g transform="translate(-140,120)">
                <circle
                  r="35"
                  fill="url(#premiumGrad1)"
                  opacity="0.3"
                  filter="url(#premiumShadow)"
                />

                {/* Premium Neural connections */}
                {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
                  const angle = (i * 45 * Math.PI) / 180;
                  const x = Math.cos(angle) * 40;
                  const y = Math.sin(angle) * 40;
                  return (
                    <g key={i}>
                      <line
                        x1="0"
                        y1="0"
                        x2={x}
                        y2={y}
                        stroke="url(#premiumGrad2)"
                        strokeWidth="3"
                        opacity="0.7"
                        filter="url(#premiumGlow)"
                      >
                        <animate
                          attributeName="opacity"
                          values="0.4;0.9;0.4"
                          dur="4s"
                          begin={`${i * 0.4}s`}
                          repeatCount="indefinite"
                        />
                      </line>
                      <circle
                        cx={x}
                        cy={y}
                        r="5"
                        fill="url(#premiumGrad3)"
                        opacity="0.9"
                        filter="url(#premiumGlow)"
                      >
                        <animate
                          attributeName="r"
                          values="4;8;4"
                          dur="3s"
                          begin={`${i * 0.5}s`}
                          repeatCount="indefinite"
                        />
                      </circle>
                    </g>
                  );
                })}

                <circle
                  r="12"
                  fill="white"
                  opacity="0.95"
                  filter="url(#premiumGlow)"
                >
                  <animate
                    attributeName="opacity"
                    values="0.8;1;0.8"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>

              {/* Premium Automation Workflow */}
              <g transform="translate(140,120)">
                {[0, 1, 2].map((i) => (
                  <g key={i} transform={`translate(${(i - 1) * 40},0)`}>
                    <rect
                      x="-15"
                      y="-12"
                      width="30"
                      height="24"
                      rx="8"
                      fill="url(#premiumGrad2)"
                      opacity="0.9"
                      filter="url(#premiumShadow)"
                    >
                      <animate
                        attributeName="opacity"
                        values="0.6;1;0.6"
                        dur="3s"
                        begin={`${i * 0.8}s`}
                        repeatCount="indefinite"
                      />
                    </rect>
                    <rect
                      x="-15"
                      y="-12"
                      width="30"
                      height="24"
                      rx="8"
                      fill="none"
                      stroke="white"
                      strokeWidth="1"
                      opacity="0.4"
                    />
                    {i < 2 && (
                      <path
                        d="M15,0 L25,0"
                        stroke="url(#premiumGrad2)"
                        strokeWidth="3"
                        markerEnd="url(#premiumArrow)"
                        filter="url(#premiumGlow)"
                      >
                        <animate
                          attributeName="stroke-dasharray"
                          values="0,15;15,0"
                          dur="2s"
                          begin={`${i * 0.8}s`}
                          repeatCount="indefinite"
                        />
                      </path>
                    )}
                  </g>
                ))}
              </g>
            </g>

            {/* Premium Data Streams */}
            <g opacity="0.7">
              {[0, 1, 2, 3].map((i) => (
                <path
                  key={i}
                  d={`M${-180 + i * 25},${-120 + i * 35} Q${-60 + i * 15},${
                    -60 + i * 25
                  } ${80 + i * 15},${120 - i * 25}`}
                  fill="none"
                  stroke="url(#premiumGrad2)"
                  strokeWidth="2"
                  filter="url(#premiumGlow)"
                >
                  <animate
                    attributeName="stroke-dasharray"
                    values="0,300;150,150;0,300"
                    dur="6s"
                    begin={`${i * 1.5}s`}
                    repeatCount="indefinite"
                  />
                </path>
              ))}
            </g>
          </g>

          {/* Premium Arrow marker */}
          <defs>
            <marker
              id="premiumArrow"
              markerWidth="12"
              markerHeight="9"
              refX="11"
              refY="4.5"
              orient="auto"
            >
              <polygon
                points="0 0, 12 4.5, 0 9"
                fill="url(#premiumGrad2)"
                filter="url(#premiumGlow)"
              />
            </marker>
          </defs>
        </svg>

        {/* Premium feature callouts */}
        <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-lg rounded-2xl px-4 py-3 border border-zinc-700/50 shadow-xl">
          <div className="flex items-center gap-3 text-white text-sm font-medium">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50" />
            <span>99.9% Uptime</span>
          </div>
        </div>

        <div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-lg rounded-2xl px-4 py-3 border border-zinc-700/50 shadow-xl">
          <div className="flex items-center gap-3 text-white text-sm font-medium">
            <Zap className="w-4 h-4 text-white animate-pulse" />
            <span>AI Powered</span>
          </div>
        </div>

        <div className="absolute top-1/2 right-6 bg-black/60 backdrop-blur-lg rounded-2xl px-4 py-3 border border-zinc-700/50 shadow-xl">
          <div className="flex items-center gap-3 text-white text-sm font-medium">
            <Shield className="w-4 h-4 text-white" />
            <span>Enterprise Grade</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftIllustration;
