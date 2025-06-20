import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Globe,
} from "lucide-react";
import upvachiLogo from "../../assets/images/upvachi.png";

const Footer = () => (
  <footer className="bg-gray-950 text-gray-200 border-t border-gray-800 pt-12 pb-6">
    <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between gap-10">
      {/* Logo & Socials */}
      <div className="flex flex-col items-center lg:items-start gap-6 min-w-[210px]">
        <img
          src={upvachiLogo}
          alt="UpVachi Logo"
          className="w-12 h-12 rounded-2xl border border-gray-800 shadow"
        />
        <div className="flex gap-4 text-gray-500 text-2xl">
          <a
            href="https://www.facebook.com/upvachi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="hover:text-[#3069e4]" />
          </a>
          <a
            href="https://www.instagram.com/upvachi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="hover:text-[#c44881]" />
          </a>
          <a
            href="https://x.com/upvachi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="hover:text-[#577dce]" />
          </a>
          <a
            href="https://www.linkedin.com/company/upvachi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="hover:text-[#577dce]" />
          </a>
          <a
            href="https://www.youtube.com/@upvachi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube className="hover:text-[#c4302b]" />
          </a>
          <a
            href="https://upvachi.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Globe className="hover:text-[#824DFF]" />
          </a>
        </div>
      </div>
      {/* Columns */}
      <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-semibold mb-3">Build with UpVachi</h4>
          <ul className="space-y-2">
            <li>
              <a href="/ai" className="hover:underline">
                AI Platform
              </a>
            </li>
            <li>
              <a href="/automation" className="hover:underline">
                Automation
              </a>
            </li>
            <li>
              <a href="/integrations" className="hover:underline">
                Integrations
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Support</h4>
          <ul className="space-y-2">
            <li>
              <a href="/support" className="hover:underline">
                Help Center
              </a>
            </li>
            <li>
              <a href="/docs" className="hover:underline">
                Documentation
              </a>
            </li>
            <li>
              <a href="/community" className="hover:underline">
                Community Forum
              </a>
            </li>
            <li>
              <a href="/api-status" className="hover:underline">
                API Status
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="/careers" className="hover:underline">
                Careers
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Legal</h4>
          <ul className="space-y-2">
            <li>
              <a href="/privacy" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:underline">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/cookies" className="hover:underline">
                Cookies
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr className="my-8 border-gray-800" />
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
      <span>© {new Date().getFullYear()} UpVachi. All rights reserved.</span>
      <div className="flex flex-wrap gap-4">
        <a href="/about" className="hover:underline">
          About
        </a>
        <a href="/careers" className="hover:underline">
          Careers
        </a>
        <a href="/privacy" className="hover:underline">
          Privacy Policy
        </a>
        <a href="/cookies" className="hover:underline">
          Cookies
        </a>
        <a href="/terms" className="hover:underline">
          Terms
        </a>
        <span className="text-gray-400">|</span>
        <span>English (US)</span>
      </div>
    </div>
  </footer>
);

export default Footer;
