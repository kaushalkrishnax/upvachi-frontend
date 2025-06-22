import { ChangeEvent, FormEvent } from "react";
import { Eye, EyeOff, ArrowRight } from "lucide-react";

const RightForm = ({
  isLogin,
  handleInputChange,
  formData,
  errors,
  handleSubmit,
  isLoading,
  switchMode,
  showPassword,
  setShowPassword,
}: {
  isLogin: boolean;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  formData: Record<string, string>;
  errors: Record<string, string>;
  handleSubmit: (e: FormEvent) => void;
  isLoading: boolean;
  switchMode: () => void;
  showPassword: boolean;
  setShowPassword: (show: boolean) => void;
}) => {
  return (
    <div className="bg-gradient-to-br from-zinc-950 via-black to-zinc-900 p-10 lg:p-14 flex flex-col justify-center bg-black/60 backdrop-blur-sm border-l border-zinc-800/30 relative z-10">
      <div className="max-w-sm mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white mb-3 font-mono tracking-tight">
            {isLogin ? "Welcome back" : "Create account"}
          </h1>
          <p className="text-zinc-400 text-base leading-relaxed">
            {isLogin
              ? "Enter your credentials to access your dashboard"
              : "Get started with your premium UpVachi account"}
          </p>
        </div>

        {/* Social Login */}
        {/* <div className="space-y-4 mb-8">
              <button className="w-full flex items-center justify-center gap-4 px-6 py-4 bg-zinc-900/80 hover:bg-zinc-800/80 border border-zinc-700/50 rounded-2xl transition-all duration-300 text-white text-base font-medium group backdrop-blur-sm shadow-lg hover:shadow-xl hover:scale-[1.02]">
                <img
                  src={GoogleColorIcon}
                  alt="Google Icon"
                  className="w-5 h-5"
                />
                Continue with Google
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </button>
            </div>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
              <div className="relative w-full h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent my-6" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-black text-zinc-500 font-medium">
                  or continue with email
                </span>
              </div>
            </div> */}

        {/* Form */}
        <div className="space-y-5 font-sans">
          {!isLogin && (
            <div>
              <label className="block text-sm font-semibold text-zinc-300 mb-2">
                Full name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className={`w-full px-4 py-3.5 bg-zinc-900/60 border rounded-xl text-white text-sm placeholder-zinc-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/30 backdrop-blur-sm ${
                  errors.fullName
                    ? "border-red-500/50 bg-red-950/20"
                    : "border-zinc-700/50 hover:border-zinc-600/50"
                }`}
                placeholder="John"
              />
              {errors.fullName && (
                <p className="text-red-400 text-xs mt-2">{errors.fullName}</p>
              )}
            </div>
          )}

          <div>
            <label className="block text-sm font-semibold text-zinc-300 mb-2">
              Email address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-4 py-3.5 bg-zinc-900/60 border rounded-xl text-white text-sm placeholder-zinc-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/30 backdrop-blur-sm ${
                errors.email
                  ? "border-red-500/50 bg-red-950/20"
                  : "border-zinc-700/50 hover:border-zinc-600/50"
              }`}
              placeholder="you@company.com"
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-2">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-zinc-300 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className={`w-full px-4 py-3.5 pr-12 bg-zinc-900/60 border rounded-xl text-white text-sm placeholder-zinc-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/30 backdrop-blur-sm ${
                  errors.password
                    ? "border-red-500/50 bg-red-950/20"
                    : "border-zinc-700/50 hover:border-zinc-600/50"
                }`}
                placeholder={
                  isLogin ? "Enter your password" : "Create a password"
                }
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors p-1"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-400 text-xs mt-2">{errors.password}</p>
            )}
          </div>

          {!isLogin && (
            <div>
              <label className="block text-sm font-semibold text-zinc-300 mb-2">
                Confirm password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className={`w-full px-4 py-3.5 bg-zinc-900/60 border rounded-xl text-white text-sm placeholder-zinc-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/30 backdrop-blur-sm ${
                  errors.confirmPassword
                    ? "border-red-500/50 bg-red-950/20"
                    : "border-zinc-700/50 hover:border-zinc-600/50"
                }`}
                placeholder="Confirm your password"
              />
              {errors.confirmPassword && (
                <p className="text-red-400 text-xs mt-2">
                  {errors.confirmPassword}
                </p>
              )}
            </div>
          )}

          {isLogin && (
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-3 text-zinc-400 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-zinc-600 bg-zinc-800 text-white focus:ring-white/20 accent-white"
                />
                Remember me
              </label>
              <button
                type="button"
                className="text-white hover:text-zinc-300 transition-colors font-medium"
              >
                Forgot password?
              </button>
            </div>
          )}

          <div className="flex items-center justify-center mt-8">
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isLoading}
              className={`transition-all duration-300 flex items-center justify-center font-semibold shadow-lg disabled:opacity-70 disabled:cursor-not-allowed ${
                isLoading
                  ? "w-12 h-12 p-0 rounded-full bg-white"
                  : "w-full py-4 px-6 rounded-full bg-white hover:bg-zinc-100 gap-3 hover:shadow-xl hover:scale-[1.02]"
              }`}
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
              ) : (
                <>
                  {isLogin ? "Sign in" : "Create account"}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Switch Mode */}
        <div className="text-center mt-8">
          <p className="text-zinc-400 text-base">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={switchMode}
              className="text-white hover:text-zinc-300 transition-colors font-semibold ml-1"
            >
              {isLogin ? "Sign up" : "Sign in"}
            </button>
          </p>
        </div>

        {!isLogin && (
          <div className="mt-6 text-xs text-zinc-500 text-center leading-relaxed">
            By creating an account, you agree to our{" "}
            <a href="#" className="text-white hover:text-zinc-300 font-medium">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-white hover:text-zinc-300 font-medium">
              Privacy Policy
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default RightForm;
