import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFacebook,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Footer() {
  return (
    <footer className="w-full py-8 bg-gray-900 border-t border-white/5">
      <div className="max-w-4xl mx-auto flex flex-col items-center space-y-6 px-4">
        {/* INCREASED GAP AND TARGET AREA FOR MOBILE */}
        <div className="flex items-center gap-2 sm:gap-6">
          <a
            href="https://www.github.com/aungthawe"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 text-white border border-white/10 active:scale-95 transition-all md:bg-transparent md:border-none md:w-auto md:h-auto md:text-white/70 hover:text-white hover:-translate-y-1"
            aria-label="GitHub Profile"
          >
            <FontAwesomeIcon icon={faGithub} className="text-xl sm:text-2xl" />
          </a>

          <a
            href="https://t.me/dxaniel_i"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 text-white border border-white/10 active:scale-95 transition-all md:bg-transparent md:border-none md:w-auto md:h-auto md:text-white/70 hover:text-white hover:-translate-y-1"
            aria-label="Telegram Profile"
          >
            <FontAwesomeIcon
              icon={faTelegram}
              className="text-xl sm:text-2xl"
            />
          </a>

          <a
            href="https://www.facebook.com/aungthawethit"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 text-white border border-white/10 active:scale-95 transition-all md:bg-transparent md:border-none md:w-auto md:h-auto md:text-white/70 hover:text-white hover:-translate-y-1"
            aria-label="Facebook Profile"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-xl sm:text-2xl"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/aung-thawe-thit-oo-a99753394/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 text-white border border-white/10 active:scale-95 transition-all md:bg-transparent md:border-none md:w-auto md:h-auto md:text-white/70 hover:text-white hover:-translate-y-1"
            aria-label="LinkedIn Profile"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-xl sm:text-2xl"
            />
          </a>

          <a
            href="mailto:aungthawethit@gmail.com"
            className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 text-white border border-white/10 active:scale-95 transition-all md:bg-transparent md:border-none md:w-auto md:h-auto md:text-white/70 hover:text-white hover:-translate-y-1"
            aria-label="Email Me"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-xl sm:text-2xl"
            />
          </a>
        </div>

        <p className="text-white/40 text-xs sm:text-sm text-center tracking-wide font-light">
          © {new Date().getFullYear()} Aung Thawe Thit Oo — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
